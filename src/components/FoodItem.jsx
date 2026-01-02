import React from "react";
import { Navigate, useParams } from "react-router-dom"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FoodItem = ({ items, cantFind }) => {
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

export default FoodItem;