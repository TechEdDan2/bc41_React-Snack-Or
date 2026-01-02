import React from "react";
import { Link } from "react-router-dom";
// import "./FoodMenu.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const FoodMenu = ({ snacks }) => {
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
                            <Link to={`/snacks/${snack.id}`} key={snack.id} style={{ textDecoration: 'none', color: 'inherit' }}>
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
