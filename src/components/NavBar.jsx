import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

/**
 * This component represents the navigation bar for the application.
 * It includes links to the home page, snacks menu, and drinks menu.
 * 
 * @returns - A React component displaying the navigation bar.
 */
const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Snack or Booze
                    </NavLink>
                </Typography>
                <Button color="inherit">
                    <NavLink to="/snacks" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Snacks
                    </NavLink>
                </Button>
                <Button color="inherit">
                    <NavLink to="/drinks" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Drinks
                    </NavLink>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
