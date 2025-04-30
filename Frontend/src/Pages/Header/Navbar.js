import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
} from "@mui/material";
import { Menu as MenuIcon, ExpandMore, ThumbDown, OpenInNew } from "@mui/icons-material";
import "../../assets/Css/Navbar.css";

import MarketMind from "../../assets/Images/MM_Logo.webp";

const landingPages = [
    { title: "Landing 1", path: "/landing-1" },
    { title: "Landing 2", path: "/landing-2" },
    { title: "Landing 3", path: "/landing-3" },
];

const pages = [
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Pricing", path: "/pricing" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [landingsAnchor, setLandingsAnchor] = useState(null);
    const [pagesAnchor, setPagesAnchor] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState({
        landings: false,
        pages: false,
    });

    const handleLandingsClick = (event) => {
        setLandingsAnchor(event.currentTarget);
    };

    const handlePagesClick = (event) => {
        setPagesAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setLandingsAnchor(null);
        setPagesAnchor(null);
    };

    const toggleMobileNav = () => {
        setMobileOpen(!mobileOpen);
    };

    const toggleMobileExpand = (section) => {
        setMobileExpanded((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <AppBar position="static" elevation={0} className="navbar">

            <Toolbar className="navbar-container">

                <IconButton className="menu-button" edge="start" onClick={toggleMobileNav}>
                    <MenuIcon />
                </IconButton>

                <div className="menu-container">

                    <div>

                        <a href="/" className="logo-container">
                            <img
                                src={MarketMind}
                                alt="Logo"
                                className="logo-image"
                            />

                        </a>

                    </div>

                    <div className="nav-links">
                        <Button href="/treands" className="nav-link">
                            Home
                        </Button>

                        <Button className="nav-link" endIcon={<ExpandMore />} onClick={handleLandingsClick}>
                            Insights
                        </Button>
                        <Menu anchorEl={landingsAnchor} open={Boolean(landingsAnchor)} onClose={handleClose}>
                            {landingPages.map((page) => (
                                <MenuItem key={page.path} onClick={handleClose} component="a" href={page.path}>
                                    {page.title}
                                </MenuItem>
                            ))}
                        </Menu>

                        <Button href="/treands" className="nav-link">
                            Treands
                        </Button>

                        <Button href="/treands" className="nav-link">
                            Companies
                        </Button>

                        <Button href="/treands" className="nav-link">
                            News
                        </Button>

                        <Button className="nav-link" endIcon={<ExpandMore />} onClick={handlePagesClick}>
                            Tools
                        </Button>

                        <Menu anchorEl={pagesAnchor} open={Boolean(pagesAnchor)} onClose={handleClose}>
                            {pages.map((page) => (
                                <MenuItem key={page.path} onClick={handleClose} component="a" href={page.path}>
                                    {page.title}
                                </MenuItem>
                            ))}
                        </Menu>

                        <Button href="/docs" className="nav-link">
                            Admin
                        </Button>

                        <Button href="/docs" className="nav-link">
                            AI
                        </Button>
                    </div>

                    <div className="action-buttons desktop-actions" >

                        <Button variant="contained" className="buy-now-button">
                            Buy Now
                        </Button>
                    </div>

                </div>

                <Drawer anchor="left" open={mobileOpen} onClose={toggleMobileNav} className="mobile-nav">
                    <List>
                        <ListItem button component="a" href="/">
                            <ListItemText primary="Home" />
                        </ListItem>

                        <ListItem button onClick={() => toggleMobileExpand("landings")}>
                            <ListItemText primary="Landings" />
                            <ExpandMore />
                        </ListItem>
                        <Collapse in={mobileExpanded.landings}>
                            <List>
                                {landingPages.map((page) => (
                                    <ListItem button key={page.path} component="a" href={page.path} style={{ paddingLeft: 32 }}>
                                        <ListItemText primary={page.title} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>

                        <ListItem button component="a" href="/blocks">
                            <ListItemText primary="Blocks" />
                        </ListItem>

                        <ListItem button component="a" href="/treands">
                            <ListItemText primary="Dashboard" />
                        </ListItem>

                        <ListItem button onClick={() => toggleMobileExpand("pages")}>
                            <ListItemText primary="Pages" />
                            <ExpandMore />
                        </ListItem>
                        <Collapse in={mobileExpanded.pages}>
                            <List>
                                {pages.map((page) => (
                                    <ListItem button key={page.path} component="a" href={page.path} style={{ paddingLeft: 32 }}>
                                        <ListItemText primary={page.title} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>

                        <ListItem button component="a" href="/docs">
                            <ListItemText
                                primary={
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        Docs
                                        <OpenInNew style={{ marginLeft: 8, fontSize: 16 }} />
                                    </div>
                                }
                            />
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar >
        </AppBar >
    );
}
