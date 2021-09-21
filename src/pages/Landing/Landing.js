import React from 'react';
import Blog from '../../components/Blog/Blog';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Copyright from '../../components/Copyright/Copyright'
import ObatLanding from '../../components/ObatLanding/ObatLanding';

const Landing = () => {

    return (
        <div>
            <NavBar />
            <Header />
            <ObatLanding />
            <Blog />
            <Copyright />
        </div>
    );
};

export default Landing;