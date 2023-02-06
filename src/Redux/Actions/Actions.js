import axios from "axios";

export const POST_DOG = "POST_DOG";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ONE_DOG = "GET_ONE_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_QUERY = "GET_QUERY";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const SEARCH_REQ = "SEARCH_REQ";
export const SUCCESSFUL_REQ = "SUCCESSFUL_REQ";
export const PAGINATION_VALUES = "PAGINATION_VALUES";
export const FILTER = "FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const NO_FOUND_DOG = "NO_FOUND_DOG";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const FILL_FAVORITES = "FILL_FAVORITES";
export const MATCH_FAVORITE = "MATCH_FAVORITE";
export const COPY_DOGS = "COPY_DOGS";
export const DELETE_DOG = "DELETE_DOG";

const baseUrl = "http://localhost:3001/dogs";
const baseUrlTemps = "http://localhost:3001/temperaments";
// const baseUrl = "https://pi-dogs-back-production-9a83.up.railway.app/dogs";
// const baseUrlTemps =
//   "https://pi-dogs-back-production-9a83.up.railway.app/temperaments";

export const postDog = (obj) => {
  try {
    axios.post(baseUrl, obj);
    console.log("llegue", obj);
    return { type: POST_DOG };
  } catch (e) {
    console.log(e);
  }
};

export const getAllDogs = () => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQ });
    await axios
      .get(baseUrl)
      .then((data) => dispatch({ type: GET_ALL_DOGS, payload: data.data }));
    dispatch({ type: SUCCESSFUL_REQ });
  } catch (e) {
    console.log(e);
  }
};

export const getOneDog = (id) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQ });
    await axios
      .get(`${baseUrl}/${id}`)
      .then((data) => dispatch({ type: GET_ONE_DOG, payload: data.data }));
    dispatch({ type: SUCCESSFUL_REQ });
  } catch (e) {
    console.log(e);
  }
};

export const temps = () => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQ });
    await axios
      .get(baseUrlTemps)
      .then((data) => dispatch({ type: GET_TEMPERAMENTS, payload: data.data }));
    dispatch({ type: SUCCESSFUL_REQ });
  } catch (e) {
    console.log(e);
  }
};

export const getQuery = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQ });
    const response = await axios.get(`${baseUrl}?name=${query}`);
    dispatch({ type: GET_QUERY, payload: response.data });
    dispatch({ type: SUCCESSFUL_REQ });
  } catch (error) {
    dispatch({ type: NO_FOUND_DOG });
  }
};

export const fillFavorites = (FavoritesArray) => (dispatch) => {
  return dispatch({
    type: FILL_FAVORITES,
    payload: FavoritesArray,
  });
};

export const addFavorite = (id) => (dispatch) => {
  return dispatch({ type: ADD_FAVORITE, payload: id });
};

export const matchFavorite = () => (dispatch) => {
  return dispatch({ type: MATCH_FAVORITE });
};

export const paginationValues = (obj) => (dispatch) => {
  return dispatch({ type: PAGINATION_VALUES, payload: obj });
};

export const filters = (obj) => (dispatch) => {
  return dispatch({ type: FILTER, payload: obj });
};

export const cleanDetail = () => (dispatch) => {
  return dispatch({ type: CLEAN_DETAIL });
};

export const clearFilter = () => (dispatch) => {
  return dispatch({ type: CLEAR_FILTER });
};

export const copyDogs = () => (dispatch) => {
  return dispatch({ type: COPY_DOGS });
};

export const deleteDog = (id) => {
  try {
    axios.post(`${baseUrl}/delete`, id);
    return { type: DELETE_DOG };
  } catch (e) {
    console.log(e);
  }
};
