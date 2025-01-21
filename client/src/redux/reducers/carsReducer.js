const initialData = {
    cars: [], // Array to store cars
    loading: false, // Flag to indicate loading state
    error: null,    // To handle any errors
  };
  
  export const carsReducer = (state = initialData, action) => {
    switch (action.type) {
      case 'FETCH_CARS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case 'FETCH_CARS_SUCCESS':
        return {
          ...state,
          cars: action.payload, // Payload contains fetched cars
          loading: false,
        };
  
      case 'FETCH_CARS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload, // Payload contains error message
        };
  
      default:
        return state; // Return the current state for unhandled actions
    }
  };
  