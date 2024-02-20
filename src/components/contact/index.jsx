import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../animatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const strArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'gmail',
            'template_YeJhZkgb',
            form.current,
            'token'
        ).then(() => {
            alert('Email sent successfully')
            window.location.reload(false)
        }).catch(() => {
            alert('Email sent unsuccessful, please try again')
        });
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={strArray}
                            idx={15} />
                    </h1>
                    <p>I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.</p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="text" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="info-map">
                    Phnom Penh,
                    <br />
                    Cambodia,
                    <br />
                    No 09, St. 168
                    <br />
                    <span>lengtith@gmail.com</span>
                </div>

                <div className="map-wrap">
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Contact