import React from 'react';
import Blog from '../../components/Blog/Blog';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Copyright from '../../components/Copyright/Copyright'
import ObatLanding from '../../components/ObatLanding/ObatLanding';
import ListArtikel from '../ListArtikel/ListArtikel'
import Action from '../../components/Action/Action'

const Landing = () => {

    return (
        <div>
            <NavBar />
            <Header />
            <Blog />
            <ObatLanding />
            <Copyright />
        </div>
    );
};

export default Landing;