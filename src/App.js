import React, {useEffect} from "react"
import Switch from "./Components/Switch/Switch"
import { BrowserRouter } from 'react-router-dom';
import { fillFavorites, getAllDogs, matchFavorite } from "./Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch()
  const FavCopy = useSelector(state => state.FavoritesCopy)

  useEffect(() => {
    dispatch(fillFavorites());
    if (!FavCopy.lenght) {
      dispatch(getAllDogs()).then(() => dispatch(matchFavorite()));
    }
  }, [dispatch])
  
    
  
  return (
    <BrowserRouter>
      <main>
        <Switch />
      </main>
    </BrowserRouter>
  );
}

export default App;
