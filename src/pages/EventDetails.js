import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { EventContext } from "../context/events";
import { CartContext } from "../context/cart";

const EventDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { events } = useContext(EventContext);
  const { addToCart } = useContext(CartContext);

  const event = events.find((event) => {
    return event.id === id;
  });
  if (!event) {
    return <h3>Loading...</h3>;
  }

  const { image: url, title, description, author, price } = event;

  return (
    <section className="event-details">
      <div className="detail-image">
        <img src={url} alt="10x Rule" />
      </div>
      <div className="detail-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{author}</h3>
        <h4>Price - $ {price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...event, id });
            history.push("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default EventDetails;
