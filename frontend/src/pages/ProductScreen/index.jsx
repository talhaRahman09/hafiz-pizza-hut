
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

const Index = () => {
    const params = useParams();
    const { slug } = params;
    console.log(slug);

    return (
        <div>
            <Header />
            <h1>{slug}</h1>
        </div>
    )
};

export default Index;