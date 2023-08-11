
import Layout from '../components/Layout/Layout'
import logo from '../assets/Images/Logo.png'
import './main.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser } = useAuth();
    const navigate = useNavigate()

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
                    ...user,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate("/")
            }
        } catch (error) {
            toast.error('Something Went Wrong😞');
        }
    };

    return (
        <Layout>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <img src="" alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="card p-4">

                            <div className="card-body p-2">
                                <div className="text-center">
                                    <img className='logo' src={logo} alt="" />
                                    <h3>Sign In</h3>
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
                                        Sign In
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default SignIn