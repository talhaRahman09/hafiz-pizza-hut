import React from 'react';
import Header from "../Header/Index"
import Footer from '../Footer/Index';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
