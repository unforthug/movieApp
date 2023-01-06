import React from 'react'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {upDateMovie} from '../Store/movieSlice'


function UpDate() {
const navigate = useNavigate();
const params = useParams();
const {movies} = useSelector((state)=>state.movie)
const dispatch = useDispatch()
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const myMovie = movies.filter((el)=>el.id === params.id)

const [upDatedMovie,setUpDatedMovie] = useState({id : myMovie[0].id,
title : myMovie[0].title, 
description : myMovie[0].description,
posterUrl : myMovie[0].posterUrl,
rating : myMovie[0].rating,  
 })


 const handleChange=(e)=>{
    setUpDatedMovie({...upDatedMovie,[e.target.name] : e.target.value})
 }
const upMovie=()=>{
    dispatch(upDateMovie({id : params.id, upDatedMovie : upDatedMovie }));
    navigate(`/`)
}
  return (
    <div>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie name</Form.Label>
              <Form.Control
                name='title'
                type="text"
                defaultValue={myMovie[0].title}
                autoFocus
                onChange={handleChange}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name='description'
                type="text"
                defaultValue={myMovie[0].description}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control
                name = 'posterUrl'
                type="text"
                defaultValue={myMovie[0].posterUrl}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
  
          </Form>
        <Rating
        name="simple-controlled"
        defaultValue={myMovie[0].rating}
        max={10}
        onChange={(event, newValue) => {
            setUpDatedMovie({...upDatedMovie,rating : newValue})
        }}
      />

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={upMovie}>
            Save Changes
          </Button>



    </div>
  )
}

export default UpDate