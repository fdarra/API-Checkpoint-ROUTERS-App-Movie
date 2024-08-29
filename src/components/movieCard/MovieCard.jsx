import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import RatedMovie from "../filterByRate/Rating.jsx";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "15px" }}>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title> {movie.title} </Card.Title>
          <Card.Text>
            <RatedMovie RateInput={movie.rate} israting={false} />
          </Card.Text>
          <Link to={`/movie/${movie.id}`}>
            <Button variant="primary"> Description </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
