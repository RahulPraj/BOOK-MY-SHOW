import React from 'react'
//components
import Navbar from "../components/navbar/navbar.component";
const MovieLayout = (props) => {
    return (
        <>
            <Navbar />
           {props.children}  
        </>
    );
};

export default MovieLayout;
