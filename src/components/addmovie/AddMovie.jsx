import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    setRate("");
    setTitle("");
    setDescription("");
    setPosterUrl("");
  };
  const handelAddMovie = () => {
    let movie = { title, rate, description, posterUrl };
    if (title !== "" && description !== "" && posterUrl !== "") {
      add(movie);
      handleClose();
      setRate("");
      setTitle("");
      setDescription("");
      setPosterUrl("");
    } else alert("un champ est vide");
  };
  return (
    <div>
      <>
        <Button
          style={{
            backgroundColor: "red",
            borderColor: "darkred",
            margin: "15px 15px 15px 15px",
          }}
          variant="primary"
          onClick={handleShow}
        >
          ADD MOVIE
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Title"
                  autoFocus
                  aria-required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              {/* <div
                data-coreui-toggle="rating"
                data-coreui-tooltips="Very bad, Bad, Meh, Good, Very good"
                data-coreui-value="0"
              ></div> */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Post Url</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Url"
                  autoFocus
                  value={posterUrl}
                  onChange={(e) => setPosterUrl(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="Textarea"
                  placeholder="Description"
                  maxLength="500"
                  minLength="100"
                  autoFocus
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handelAddMovie}>
              Save Adds
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddMovie;
