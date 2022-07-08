import React from "react";
import {Typography, Box} from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
            }}
            style={{
                backgroundColor: "#9C27B0",
            }}
        >
                <Typography variant="h5" style={{
                    boxShadow: 'none',
                    textAlign: 'center',
                    color: 'white',
                }}>
                    Каретникова Арина
                </Typography>
        </Box>
    );
};

export default Footer;
