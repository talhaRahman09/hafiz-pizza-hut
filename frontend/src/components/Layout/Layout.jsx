import React from 'react';
import Header from "../Header/Index"
import Footer from '../Footer/Index';
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast'

const Layout = ({ children, title }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <Header />
            <Toaster />
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
