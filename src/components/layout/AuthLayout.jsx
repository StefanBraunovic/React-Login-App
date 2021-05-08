import React from 'react';
import NavbarTop from '../navbar/NavbarTop'



const AuthLayout = ({children}) => {
    return <div>
     <NavbarTop/>
        {children}
    </div>
}

export default AuthLayout;