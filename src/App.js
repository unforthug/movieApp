
import './App.css';
import MovieList from './Components/MovieList';
import { useSelector } from 'react-redux';
import Add from './Components/Add';

function App() {
  const {movies} = useSelector((state)=>state.movie)
  console.log(movies)
  return (
    <div className="App">
      <Add/>
      <MovieList data = {movies}/>

    </div>
  );
}

export default App;
