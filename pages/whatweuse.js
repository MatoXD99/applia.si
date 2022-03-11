import React from 'react'
import Hero from "../components/Hero.js"
import Head from 'next/head'
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Programms from "../components/Programms.js";

const whatweuse = () => {
    return (
        <>
            <Head>
                <title>What we use?</title>
                <meta name="keywords" content="programming, web, mobile, application, android, ios, mysql, reactjs, javascript" />
            </Head>

            <Header />
            <Hero title="What we use?" subtitle="Applia is using up-to-date technology to ensure maximum performance and quick application delivery." />
            <Programms />
            <Footer />
        </>
    )
}

export default whatweuse