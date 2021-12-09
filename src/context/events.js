import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listEvents } from "../api/queries";
import { processOrder } from "../api/mutations";

const EventContext = React.createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEvents = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listEvents,
        authMode: "API_KEY"
      });
      const events = data.listEvents.items;
      const featured = events.filter((event) => {
        return !!event.featured;
      });
      setEvents(events);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EventContext.Provider value={{ events, featured, loading, checkout }}>
      {children}
    </EventContext.Provider>
  );
};

export { EventContext, EventProvider };
