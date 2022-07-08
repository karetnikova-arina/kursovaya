import React, {useState} from 'react';
import ProductCard from "../components/ProductCard";
import {Container, Typography, Grid, PaginationItem, Pagination} from "@mui/material";
import axios from 'axios'
import {Link, useSearchParams} from 'react-router-dom'

const Products = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const [count, setCount] = React.useState()


    React.useEffect(()=>{
        setLoading(true)
        let url = searchParams.get('page') ? `/api/product/?limit=6&offset=${searchParams.get('page') * 6 - 6}` : '/api/product/'
            axios.get(`${process.env.REACT_APP_API_URL}${url}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(resp => resp.data)
                .then(data => {
                    console.log(data?.results)
                    setProducts(data?.results)
                    setCount(data?.count)
                    setLoading(false)
                })
                .catch(() => setLoading(true))
        }, [searchParams]
    )

    if (loading) return <Container style={{textAlign: 'center'}}><Typography variant="h3">Загрузка...</Typography></Container>

    return (
        <Container style={{marginBottom: '20px'}}>
            <Typography variant="h1" gutterBottom textAlign="center">Товары</Typography>
            <Grid container spacing={2}>
            {products?.map(prod => (
                <Grid key={prod.id} item xs={4}>
                <ProductCard name={prod.name} description={prod.description} photo={prod.photo} />
                </Grid>

            ))}
            </Grid>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
            >
                <Pagination style={{marginTop: '50px'}} count={Math.floor(count / 6) + 1}
                            defaultPage={searchParams.get('page') ? parseInt(searchParams.get('page')) : 1}
                            renderItem={(item) => (
                                <PaginationItem
                                    component={Link}
                                    to={`/products${item.page === 1 ? '' : `?page=${item.page}`}`}
                                    {...item}
                                />
                            )}
                />
            </Grid>
        </Container>
    );
};

export default Products;