import { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import './ProductScreen.css';
import CategorySlider from '../../components/CategorySlider';
import LoadingComponent from '../../components/LoadingComponent';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Alert } from '../../components/Alert';
import { getError } from '../utils';
import { Store } from '../Store';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, product: action.payload };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Index = () => {
    const params = useParams();
    const { slug } = params;
    const [{ product, loading, error }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });


    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
            }
        };
        fetchData();
    }, [slug]);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const addToCartHandler = () => {
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...product, quantity: 1 },
        });
    };
    return (
        <div>
            {loading ? (
                <LoadingComponent />
            ) : error || !product ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <>
                    <CategorySlider />
                    <div className='productDetailCard my-4'>
                        <div className="row">
                            <div className="col-lg-5 col-md-8 ">
                                <img className='productDetailImage img-fluid' src={product.image} alt={product.name} />
                            </div>
                            <div className="col-lg-7 col-md-12 d-flex flex-column justify-content-center position-relative">
                                <h3 className="productDetailCardPrice">${product.price}</h3>
                                <div className='d-flex flex-column justify-content-center'>
                                    <div className="m-2 p-2">
                                        <Helmet>
                                            <title>{product.name}</title>
                                        </Helmet>
                                        <h4 className='productDetailTitle'>{product.name}</h4>
                                        {product.countInStock > 0 ? (
                                            <span className='badge bg-success'>in stock</span>
                                        ) : (
                                            <span className='badge'>out of stock</span>
                                        )}
                                        <p>{product.description}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button onClick={addToCartHandler} className="btn productDetailCardBtn">Add to Bucket</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Index;