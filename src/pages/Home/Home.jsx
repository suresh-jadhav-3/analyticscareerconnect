import React from 'react'
import Hero from '../../components/Home/Hero'
import Footer from '../../components/layout/Footer'
import About from '../../components/Home/About'

function Home() {
    return (
        <>
            <main>

                <Hero />
                <About/>
            </main>
            <Footer/>
        </>
    )
}

export default Home