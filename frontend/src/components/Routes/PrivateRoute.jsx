import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";
import Spinner from "../Loading/Loading";

export const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth()


    useEffect(() => {

        const authCheck = async () => {
            const res = await axios.get(process.env.REACT_APP_API_KEY + '/api/v1/auth/user-auth')
            console.log(res.data)
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck();

    }, [auth?.token])


    return ok ? <Outlet /> : <Spinner />
}