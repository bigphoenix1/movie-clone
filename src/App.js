import React from "react";
import PropTypes from "prop-types";

const foods = [
  {
    id: 1,
    name: "kimchi",
    image: "https://cdn.imweb.me/upload/S201905105cd4e5325582d/0b667240284bd.jpg",
    rating: 2.4,
  },
  {
    id: 2,
    name: "ramyeon",
    image: "http://newsimg.hankookilbo.com/2014/11/13/201411130948240783_1.jpg",
    rating: 2.1,
  },
  {
    id: 3,
    name: "samgyeopsal",
    image:
      "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 1.6,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foods.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
