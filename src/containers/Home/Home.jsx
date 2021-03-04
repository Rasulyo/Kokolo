

import React from 'react';
import About from '../../components/AboutUs/About';
import Hero from '../../components/Hero/Hero';
import Header from '../Header/Header';
import Content from './Content';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <>
           <Content>
               <Header />
           </Content>
               <Hero />
               <About />
               <Footer />
        </>
    )
}

export default Home;