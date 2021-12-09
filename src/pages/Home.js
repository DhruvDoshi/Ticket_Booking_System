import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { EventContext } from "../context/events";

const Home = () => {
    const { featured } = useContext(EventContext);
    if (!featured.length) {
        return <h3>No Featured Events</h3>
    }
    return (
        <>
            <Hero />
            <section className="featured">
                <header className="featured-head">
                    <h3>Featured Collection</h3>
                </header>
                <div className="events featured-list">
                    {featured.map(({ id, image, title }) => (
                        <article key={id} className="event featured-event">
                            <div className="event-image">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`events/${id}`} className="btn event-link">details</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;