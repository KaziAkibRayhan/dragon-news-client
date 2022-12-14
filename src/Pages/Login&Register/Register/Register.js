import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const [err, setErr] = useState('')
    const [accepted, setAccepted] = useState(false);

    const handleRegisterSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setErr('');
                handleUpdateUserProfile(name, photoURL);
                handleUpdateVerifyEmail();
                toast.success('Verification email send your device, please verify.!')
            })
            .catch(error => {
                console.log(error);
                setErr(error.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }

    const handleUpdateVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const handleAccepted = (event) => {
        console.log(event.target.checked);
        setAccepted(event.target.checked)
    }

    return (
        <Form onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicphotoURL">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAccepted}
                    type="checkbox"
                    label={<>Accept <Link to={'/terms'}>Terms And Conditions</Link></>}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text>
                {err}
            </Form.Text>
        </Form>
    );
};

export default Register;