import React, { useContext } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user , loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <ProgressBar animated now={70} />
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;