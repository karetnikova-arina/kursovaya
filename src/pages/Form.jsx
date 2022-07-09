import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    TextField,
    Button,
    Grid,
    Link,
    Container
} from "@mui/material";
import {Link as RouterLink, Navigate} from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";

const Form = () => {
    const [name, setName] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [nameError, setNameError] = React.useState(false)
    const [descError, setDescError] = React.useState(false)
    const [redirect,setRedirest] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length < 1) {
            setNameError(true)
        } else {
            setNameError(false)
        }
        if (desc.length < 1) {
            setDescError(true)
        } else {
            setDescError(false)
        }

        if (!descError && !nameError) {
            axios.post(`${process.env.REACT_APP_API_URL}/api/category/`, {
                name, description: desc
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then(res => res.data)
                .then(() => setRedirest(true))
        }
    }

    if (redirect) return <Navigate to="/" replace={true} />

    return (
        <Container>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Добавить категорию
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                fullWidth
                                id="name"
                                label="Название"
                                name="name"
                                error={nameError}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                required
                                fullWidth
                                name="desc"
                                label="Описание"
                                id="desc"
                                error={descError}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Добавить
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Form;