import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ManufacturerCard = ({name, description, country}) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div" textAlign="center">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
                    {country}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ManufacturerCard;