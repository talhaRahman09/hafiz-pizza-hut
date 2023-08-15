
import Layout from '../components/Layout/Layout'
import logo from '../assets/Images/Logo.png'
import './main.css';
import { useState } from 'react';
import { toast } from 'react-toastify'
import restaurantImage from '../assets/Images/Logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/auth/register`, {
                name,
                email,
                password,
                phone
            });
            console.log(res.data.message)
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/sign-in")
            }
        } catch (error) {
            toast.error('Something Went Wrong😞');
        }
    };

    return (

        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="View100 col-md-6 col-lg-6  bgImgSignUp flex-column d-lg-flex align-items-center justify-content-center d-none">
                    <img src={restaurantImage} className="img-fluid LoginLogo" alt="" />
                </div>
                <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                    <div className="card w-75 p-4">

                        <div className="card-body p-0">
                            <div className="text-center">
                                <img className='logo' src={logo} alt="" />
                                <h3>Sign Up</h3>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn submitBtn w-100">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp