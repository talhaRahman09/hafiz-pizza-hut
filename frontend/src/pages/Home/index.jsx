

import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Header from '../../components/Header'
import Cards from '../../components/Cards';


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
const Home = () => {

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
      <Header />

      <div className="container">
        <div className='row'>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : products.length > 0 ? (
            products.map((product) => (

              <div className="col-md-4">
                <div className='cardsWrapper'>
                  <div class="card">
                    <div className="imgWrapper">
                      <img src={product.image} class="card-img-top" alt="product-image" />
                    </div>
                    <div class="card-body p-2">
                      <div className='d-flex justify-content-between align-items-center'>
                        <h5 class="cardTitle">{product.name}</h5>
                        <h5 className='cardPrice text-uppercase fw-bold'>pkr {product.price}</h5>
                      </div>
                      <p class="cardText">{product.description}</p>
                      <button type='buttn' class="btn btnAddToBucket fw-bold">Add To Bucket</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Home