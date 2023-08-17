
import Layout from '../components/Layout/Layout'
import logo from '../assets/Images/Logo.png'
import './main.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth';
import restaurantImage from '../assets/Images/Logo.png'
const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setUser] = useAuth();
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/auth/login`, {
                email,
                password,

            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setUser({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate(location.state || "/")
            }
        } catch (error) {
            toast.error('Something Went Wrong😞');
        }
    };

    return (

        <div className='container-fluid'>
            <div className="row" style={{ minHeight: '100vh' }}>
                <div className="View100 col-md-6 col-lg-6  bgImgSignUp flex-column d-lg-flex align-items-center justify-content-center d-none">
                    <img src={restaurantImage} className="img-fluid LoginLogo" alt="" />
                </div>
                <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center authBackground ">
                    <div className="card w-75 p-4">
                        <div className="card-body p-2">
                            <div className="text-center">
                                <img className='logo' src={logo} alt="" />
                                <h3>Login </h3>
                            </div>
                            <form onSubmit={handleSubmit}>

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

                                <button type="submit" className="btn submitBtn w-100">
                                    Login
                                </button>
                                <div className='rule m-3'>
                                    <span className='rule__text'>OR</span>
                                </div>
                                <Link to='/sign-up'><p class="btn submitBtn w-100">Register Here</p></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignIn