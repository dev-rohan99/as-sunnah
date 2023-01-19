import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LoggedInUser = () => {

    const { loginState } = useSelector((state) => state.auth);

    return loginState ? <Outlet/> : <Navigate to="/login" />;

}

export default LoggedInUser;
