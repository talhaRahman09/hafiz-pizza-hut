import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const Spinner = () => {
    const [count, setCount] = useState(2)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        count === 0 && navigate('/sign-in', {
            state: location.pathname,
        })
        return () => clearInterval(interval)
    }, [count, navigate, location])
    return (
        <div className="d-flex justify-content-center vh-100 align-items-center">
            <h3 className='me-3'>redirecting you in {count} seconds</h3>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    );
};

export default Spinner;
