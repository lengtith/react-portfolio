import { Link } from 'react-router-dom';
import './index.scss';
import logoTitle from './../../assets/images/logo-s.png'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../animatedLetters';
import Logo from './logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 't', 'i', 't', 'h']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'r']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={logoTitle} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Fronted Developer / Javascript Expert</h2>
                    <Link to={`/contact`} className='flat-button'>Contact Me</Link>
                </div>
                <Logo />
            </div>

            <Loader type='line-scale' />
        </>
    )
}

export default Home