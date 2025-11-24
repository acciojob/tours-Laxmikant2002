import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import "../styles/App.css";

const TOURS_API = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(TOURS_API);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="title">
          <h2>Failed to load tours. Please try again later.</h2>
        </div>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="title">
        <h1>Tours</h1>
        <div className="underline"></div>
      </div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
