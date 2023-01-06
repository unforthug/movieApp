import React from 'react'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addMovie } from '../Store/movieSlice';
import { v4 as uuidv4 } from 'uuid';

function Add() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const [newMovie,setNewMovie] = useState({id : uuidv4(),
        title : '' ,
        description :'' ,
        posterUrl : '',
    })

    const handleChange=(e)=>{
       setNewMovie({...newMovie, [e.target.name] : e.target.value})
    }
    const addNewMovie=(e)=>{
        e.preventDefault();
        dispatch(addMovie(newMovie))
        handleClose();
    }

     

  return (
    <div>

<>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie name</Form.Label>
              <Form.Control
                name='title'
                type="text"
                placeholder="Enter your movie name"
                autoFocus
                onChange={handleChange}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name='description'
                type="text"
                placeholder="Enter your Desc"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control
                name = 'posterUrl'
                type="text"
                placeholder="PosterUrl"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
  
          </Form>
        </Modal.Body>
        <Rating
        name="simple-controlled"
        value={null}
        max={10}
        onChange={(event, newValue) => {
          setNewMovie({...newMovie,rating : newValue})
        }}
      />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    </div>
  )
}

export default Add