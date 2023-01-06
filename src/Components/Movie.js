import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { changeState, deleteMovie } from '../Store/movieSlice';
import UpDate from './UpDate';
import { useNavigate } from 'react-router-dom';

function Movie({movie}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete =(e)=>{
    e.preventDefault();
    dispatch(deleteMovie(movie.id))
  }
 

  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Rating name="read-only" max={10} value={movie.rating} readOnly />
        <Button variant="primary" onClick={()=>navigate(`/movie/${movie.id}`)}  >update</Button>
        <Button variant="primary" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Movie