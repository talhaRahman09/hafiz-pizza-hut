import { useState, useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";
import Forbidden from "../UnathorizedAccess/Forbidden";

export const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(true);
    const [auth] = useAuth()


    useEffect(() => {
        setLoading(true);
        const authCheck = async () => {
            const res = await axios.get(process.env.REACT_APP_API_KEY + '/api/v1/auth/user-auth', {
                headers: {
                    "Authorization": auth?.token
                }
            })
            console.log(res.data)
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck();
        setLoading(false);
    }, [auth?.token])

    if (loading) {
        console.log("loading...");
        return <div>Loading ....</div>
    }
    return ok ? <Outlet /> : <div>Loading...</div>
}