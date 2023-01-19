import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const LoggedOutUser = () => {

    const { loginState } = useSelector((state) => state.auth);

    return loginState ? <Navigate to="/" /> : <Outlet/>;

}

export default LoggedOutUser;
