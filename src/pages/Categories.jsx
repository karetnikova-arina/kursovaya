import React, {useState} from 'react';
import {Container, Grid, Typography} from "@mui/material";
import ManufacturerCard from "../components/ManufacturerCard";
import axios from "axios";

const Categories = () => {
    const [loading, setLoading] = useState(false)
    const [manus, setManus] = useState([])

    React.useEffect(()=>{
            setLoading(true)
            axios.get(`${process.env.REACT_APP_API_URL}/api/category/`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(resp => resp.data)
                .then(data => {
                    console.log(data?.results)
                    setManus(data?.results)
                    setLoading(false)
                })
                .catch(() => setLoading(true))
        }, []
    )

    if (loading) return <Container style={{textAlign: 'center'}}><Typography variant="h3">Загрузка...</Typography></Container>

    return (
        <Container>
            <Typography variant="h1" gutterBottom textAlign="center">Категории</Typography>
            <Grid container spacing={2}>
                {manus?.map(prod => (
                    <Grid key={prod.id} item xs={3}>
                        <ManufacturerCard name={prod.name} description={prod.description} country={prod.country} />
                    </Grid>

                ))}
            </Grid>
        </Container>
    );
};

export default Categories;