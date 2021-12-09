import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Event Online</h2>
            <h3>Get all the event <br />on your hend</h3>
            <Link className="btn" to="/events">View All Events</Link>
        </section>
    )
}

export default Hero
