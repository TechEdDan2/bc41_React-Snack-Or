import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Home = () => {
    return (
        <section className="col-md-8">
            <Card>
                <CardContent style={{ textAlign: "center" }}>
                    <Typography variant="h5" component="div" gutterBottom>
                        Welcome to Silicon Valley's premier dive cafe!
                    </Typography>
                </CardContent>
            </Card>
        </section>
    );
};

export default Home;
