import * as React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Tooltip,
    MenuItem,
    Button,
} from "@mui/material";
import {Link} from 'react-router-dom'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {ROUTES} from "../../utils/routes";
import user from "../../store/user";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const Navbar = observer(() => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const settings = toJS(user.getUser()) ? [
        {name: `Привет, ${user.getUser().first_name}`, link: "/"}
    ] : [
    {name: "Войти", link: "/login"},
    {name: "Зарегистрироваться", link: "/register"}
    ]


    return (
        <AppBar position="static" style={{marginBottom: '50px'}} color="secondary">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "none", md: "flex"},
                        }}
                    >
                        {ROUTES.map((route) => (
                            <Button
                                key={route.link}
                                component={Link}
                                to={route.link}
                                onClick={() => {
                                    setAnchorElNav(null);
                                }}
                                sx={{my: 2, color: "white", display: "block"}}
                            >
                                {route.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{p: 0}}
                            >
                                <AccountCircleIcon fontSize="large" color="primary" style={{'color': "#fff"}}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map(({link, name}) => (
                                <MenuItem
                                    key={link}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center" component={Link} to={link}
                                                style={{color: '#000', textDecoration: 'none'}}>
                                        {name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
});
export default Navbar;
