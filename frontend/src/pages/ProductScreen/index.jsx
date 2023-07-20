
import React from 'react';
import CategorySlider from '../../components/CategorySlider'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import './ProductScreen.css'
import image from '../../assets/Images/Rectangle 40.png';

const Index = () => {
    const params = useParams();
    const { slug } = params;
    console.log(slug);

    return (
        <div>
            <Header />
            <div className="container">
                <CategorySlider />
                <div className='productDetailCard my-4'>
                    <div className="row">
                        <div className="col-lg-5 col-md-8 ">
                            <img className='productDetailImage img-fluid' src={image} alt="" />
                        </div>
                        <div className="col-lg-7 col-md-12 d-flex flex-column justify-content-center position-relative">
                            <h3 class="productDetailCardPrice">Price</h3>
                            <div className='d-flex flex-column justify-content-center'>
                                <div className="m-2 p-2">
                                    <h4 className='productDetailTitle'>Krunch Burger</h4>
                                    <p>Description goes here</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button class="btn productDetailCardBtn">Add to Bucket</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Index;