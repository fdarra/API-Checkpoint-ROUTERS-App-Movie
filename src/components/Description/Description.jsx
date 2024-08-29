import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../../MoviesData";

const Description = () => {
  const params = useParams();
  const Navigate = useNavigate();
  //console.log(params.id)
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(moviesData.find((movie) => movie.id === +params.id));
  }, [params.id]);
  console.log(movie);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>{movie.description}</Col>
          <Col sm={4}>
            <iframe src={movie.trailer} title={movie.title} />
          </Col>
        </Row>
        <button onClick={() => Navigate("/")}>GO BACK</button>
      </Container>
    </div>
  );
};

export default Description;
