import React from "react";
import { Navigate, useParams } from "react-router-dom"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

/**
 * This component displays details of a specific food item (snack or drink).
 * 
 * @param {Array} props.items - The list of food items to search from.
 * @param {string} props.type - The type of food item (e.g., "snacks" or "drinks").
 * @param {string} props.cantFind - The path to navigate to if the item is not found. 
 * @returns - A React component displaying the food / item details or redirecting if not found.
 */
const MenuItem = ({ items, type, cantFind }) => {
    const { id } = useParams();

    let snack = items.find(snack => snack.id === id);
    if (!snack) return <Navigate to={cantFind} />;

    return (
        <section>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div" align="center" gutterBottom>
                        {snack.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontStyle="italic" gutterBottom>
                        {snack.description}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        <b>Recipe:</b> {snack.recipe}
                    </Typography>
                    <Typography variant="body2">
                        <b>Serve:</b> {snack.serve}
                    </Typography>
                </CardContent>
            </Card>
        </section>
    );

}

export default MenuItem;