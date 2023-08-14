import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";

export const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const { user } = useAuth()


    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/auth/user-auth')
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
    }, [])
    return ok ? <Outlet /> : 'spinner'
}