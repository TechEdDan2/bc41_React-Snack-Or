import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

/**
 * This component displays a menu of food items (snacks or drinks).
 * @param {Array} props.snacks - The list of food items to display.
 * @param {string} props.type - The type of food items (e.g., "snacks" or "drinks"). 
 * @returns - A React component displaying the food menu. 
 */
const FoodMenu = ({ snacks, type }) => {
    return (
        <section className="col-md-4">
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div" align="center" gutterBottom>
                        Food Menu
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="p">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Typography>
                    <List>
                        {snacks.map((snack) => (
                            // <Link to={`/snacks/${snack.id}`} key={snack.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Link to={`/${type}/${snack.id}`} key={snack.id} style={{ textDecoration: 'none', color: 'inherit' }} className="item-text">

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={snack.name} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </section>
    );
};

export default FoodMenu;
