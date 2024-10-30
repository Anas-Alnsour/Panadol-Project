import React, { Fragment } from "react";
import Navbar from '../../Components/Nav/Navbar'
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";

const Layout = ()=>{
    return(
            <Fragment>            
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </Fragment>
    
        )
}

export default Layout;