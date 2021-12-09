import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { EventContext } from '../context/events';


const Events = () => {
    const { events } = useContext(EventContext);

    if (!events.length) {
        return <h3>No Events Available</h3>
    }

    return (
        <section className="events">
            {events.map(({ image: image, id, title }) => (
                <article key={id} className="event">
                    <div className="event-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`events/${id}`} className="btn event-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Events
