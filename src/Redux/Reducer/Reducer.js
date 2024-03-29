import {
  GET_TEMPERAMENTS,
  GET_ALL_DOGS,
  GET_QUERY,
  CLEAN_DETAIL,
  SEARCH_REQ,
  SUCCESSFUL_REQ,
  PAGINATION_VALUES,
  GET_ONE_DOG,
  FILTER,
  NO_FOUND_DOG,
  COPY_DOGS,
  ADD_FAVORITE,
  FILL_FAVORITES,
  POST_DOG,
  MATCH_FAVORITE,
} from "../Actions/Actions";

const initialState = {
  dogs: [],
  copyDogs: [],
  dog: {},
  newDog: {},
  loading: false,
  pagination: {},
  query: "",
  changeNumber: 1,
  UpdateFavorite: 1,
  temps: [],
  filtered: [],
  filter: false,
  apiOrDb: "ALL",
  Favorites: [],
  FavoritesCopy: [],
  FavoriteBoolean: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS: {
      return {
        ...state,
        dogs: action.payload,
        copyDogs: action.payload,
      };
    }
    case GET_ONE_DOG: {
      return {
        ...state,
        dog: action.payload,
      };
    }
    case GET_QUERY: {
      return {
        ...state,
        filter: true,
        changeNumber: state.changeNumber + 1,
        filtered: action.payload,
      };
    }
    case GET_TEMPERAMENTS: {
      return {
        ...state,
        temps: action.payload,
      };
    }
    case FILTER: {
      state.dogs = state.copyDogs;
      const { name, value } = action.payload;
      switch (name) {
        case "Dogs": {
          switch (value) {
            case "All Dogs": {
              return {
                ...state,
                filtered: [],
                filter: false,
                apiOrDb: "ALL",
              };
            }
            case "API Dogs": {
              const dogs = state.dogs;
              return {
                ...state,
                filtered: dogs.filter((dog) => !isNaN(dog.id)),
                filter: true,
                apiOrDb: "API",
              };
            }
            case "Created Dogs": {
              const dogs = state.dogs;
              return {
                ...state,
                filtered: dogs.filter((dog) => isNaN(dog.id)),
                filter: true,
                apiOrDb: "DB",
              };
            }
          }
        }
        case "Order": {
          const dogs = state.dogs;
          const filtered = state.filtered;

          if (filtered.length > 0) {
            let finalValue =
              value === "A to Z"
                ? filtered.sort((first, second) => {
                    if (first.name > second.name) return 1;
                    if (first.name < second.name) return -1;
                    return 0;
                  })
                : filtered.sort((first, second) => {
                    if (first.name > second.name) return -1;
                    if (first.name < second.name) return 0;
                    return 0;
                  });

            return {
              ...state,
              filter: true,
              changeNumber: state.changeNumber + 1,
              filtered: finalValue,
            };
          }

          let finalValue =
            value === "A to Z"
              ? dogs.sort((first, second) => {
                  if (first.name > second.name) return 1;
                  if (first.name < second.name) return -1;
                  return 0;
                })
              : dogs.sort((first, second) => {
                  if (first.name > second.name) return -1;
                  if (first.name < second.name) return 0;
                  return 0;
                });

          return {
            ...state,
            filter: true,
            filtered: finalValue,
          };
        }
        case "Weight": {
          const filtered = state.filtered;
          const dogs = state.dogs;

          if (filtered.length > 0) {
            let weight =
              value === "Min Weight"
                ? filtered.sort((a, b) => {
                    if (isNaN(a.min_weight) || isNaN(b.min_weight)) {
                      return -1;
                    }
                    if (parseInt(a.min_weight) > parseInt(b.min_weight)) {
                      return 1;
                    }
                    if (parseInt(a.min_weight) < parseInt(b.min_weight)) {
                      return -1;
                    }
                    return 0;
                  })
                : filtered.sort((a, b) => {
                    if (isNaN(a.max_weight) || isNaN(b.max_weight)) {
                      return -1;
                    }
                    if (parseInt(a.max_weight) > parseInt(b.max_weight)) {
                      return -1;
                    }
                    if (parseInt(a.max_weight) < parseInt(b.max_weight)) {
                      return 1;
                    }
                    return 0;
                  });

            return {
              ...state,
              filter: true,
              changeNumber: state.changeNumber + 1,
              filtered: weight,
            };
          }
          const weight =
            value === "Min Weight"
              ? dogs.sort((a, b) => {
                  if (isNaN(a.min_weight) || isNaN(b.min_weight)) {
                    return -1;
                  }
                  if (parseInt(a.min_weight) > parseInt(b.min_weight)) {
                    return 1;
                  }
                  if (parseInt(a.min_weight) < parseInt(b.min_weight)) {
                    return -1;
                  }
                  return 0;
                })
              : dogs.sort((a, b) => {
                  if (isNaN(a.max_weight) || isNaN(b.max_weight)) {
                    return -1;
                  }
                  if (parseInt(a.max_weight) > parseInt(b.max_weight)) {
                    return -1;
                  }
                  if (parseInt(a.max_weight) < parseInt(b.max_weight)) {
                    return 1;
                  }
                  return 0;
                });

          return {
            ...state,
            filter: true,
            filtered: weight,
          };
        }
        case "Temperaments": {
          const dogs = state.dogs;
          const filtered = state.filtered;

          if (filtered.length > 0) {
            const filteredDogs = filtered.filter((filterDog) =>
              filterDog.temperaments !== undefined
                ? filterDog.temperaments.includes(value.toLowerCase())
                : null
            );

            return {
              ...state,
              filter: true,
              changeNumber: state.changeNumber + 1,
              filtered: filteredDogs,
            };
          }

          const dogFilter = dogs.filter((dog) =>
            dog.temperaments !== undefined
              ? dog.temperaments.includes(value.toLowerCase())
              : null
          );

          console.log(dogFilter);

          return {
            ...state,
            filter: true,
            changeNumber: state.changeNumber + 1,
            filtered: dogFilter,
          };
        }

        default:
          console.log("hola");
      }
      break;
    }
    case ADD_FAVORITE: {
      let totalFavorites = [...state.Favorites];

      if (state.Favorites.includes(action.payload)) {
        totalFavorites = totalFavorites.filter(
          (unFavorito) => unFavorito !== action.payload
        );
      } else {
        totalFavorites.push(action.payload);
      }
      if (state.Favorites.length === 1) localStorage.removeItem("favorites");

      return {
        ...state,
        Favorites: totalFavorites,
        UpdateFavorite: state.UpdateFavorite + 1,
      };
    }
    case FILL_FAVORITES: {
      const myLocalStorage = localStorage.getItem("favorites");
      if (myLocalStorage && myLocalStorage.length) {
        for (let i = 0; i < myLocalStorage.length; i++) {
          if (!state.Favorites.includes(parseInt(myLocalStorage[i]))) {
            state.Favorites.push(parseInt(myLocalStorage[i]));
          }
        }
      }

      return {
        ...state,
      };
    }
    case MATCH_FAVORITE: {
      const allDogs = state.dogs;
      const favorites =
        allDogs &&
        allDogs.length &&
        state.Favorites?.map((fav) => {
          return allDogs?.find((p) => p.id === fav);
        });

      return {
        ...state,
        FavoritesCopy: favorites,
        FavoriteBoolean: true,
      };
    }
    case SEARCH_REQ: {
      return {
        ...state,
        loading: true,
      };
    }
    case SUCCESSFUL_REQ: {
      return {
        ...state,
        loading: false,
      };
    }
    case PAGINATION_VALUES: {
      return {
        ...state,
        pagination: action.payload,
      };
    }
    case CLEAN_DETAIL: {
      return {
        ...state,
        dog: {},
      };
    }
    case NO_FOUND_DOG: {
      return {
        ...state,
        filter: true,
        filtered: ["The searched dog was not found"],
      };
    }
    case POST_DOG: {
      return {
        ...state,
        newDog: action.payload,
      };
    }
    case COPY_DOGS: {
      return {
        ...state,
        filtered: [],
        filter: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
