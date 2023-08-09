import React from 'react';
import Header from "../Header/Index"
import Footer from '../Footer/Index';
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify'

const Layout = ({ children, title }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <Header />
            <ToastContainer />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
Layout.defaultProps = {
    title: "Hafiz Pizza Hut"
}
export default Layout;
