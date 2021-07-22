import React from 'react'

//components
import MovieNavbar from '../components/navbar/MovieNavbar.component';
const MovieLayout = (props) => {
    return (
        <>
            < MovieNavbar  />
           {props.children}  
        </>
    );
};

export default MovieLayout;
