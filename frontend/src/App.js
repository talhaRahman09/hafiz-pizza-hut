import { useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const logger = (reducer) => {
  return (state, action) => {
    console.log('Action:', action.type);
    console.log('State:', state);
    const newState = reducer(state, action);
    console.log('New State:', newState);
    return newState;
  };
};

function App() {
  const [state, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  const { loading, error, products } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const response = await axios.get('/api/products', {
          params: {
            timestamp: Date.now(),
          },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data.products });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <div key={product.slug}>
            <img src={product.image} alt={product.slug} />
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default App;
