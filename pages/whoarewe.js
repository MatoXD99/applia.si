import React from 'react'
import Hero from "../components/Hero.js"
import Head from 'next/head'
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Team from "../components/Team.js";

const whoarewe = () => {
    return (
        <>
            <Head>
                <title>Who are we?</title>
                <meta name="keywords" content="programming, web, mobile, application, android, ios, mysql, reactjs, javascript" />
            </Head>

            <Header />
            <Hero title="Who are we?" subtitle="bla bla bla" />
            <Team />
            <Footer />
        </>
    )
}

export default whoarewe