import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";
import Search from "./Search";
import ButtonComponent from "./ButtonComponent";


const Navbar = () => {
    return(
        <>
        <AppBar position="static"
         sx={{ backgroundColor: "#34C94B",
               padding:'10px 0' }}
           >   
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems:"center", flexWrap: "wrap" }}>
                <Logo />
                <Search />
                <ButtonComponent  text="Give Feedback"/>
            </Toolbar>
        </AppBar>
        
        </>
    )
}
export default Navbar;