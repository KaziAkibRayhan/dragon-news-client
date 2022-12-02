import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaViber, FaLinkedin, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-3' variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> Login with Google</Button>
            </ButtonGroup>

            <div className='mt-5'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3 border'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border'><FaViber /> Viber</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border'><FaLinkedin /> Linked In</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;