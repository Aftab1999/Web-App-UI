import { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { drawerItems } from '../../Components/Drawer/drawerItems'
import appLogo from '../../assets/Images/MM_Logo.webp'
import DashboardRoutes from '../../routes/DashboardRoutes'
import avatar1 from '../../assets/avatars/image-29.png'

const drawerWidth = 240

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
})

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    border: 'none',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}))

function Dashboard() {
    const theme = useTheme()
    const [open, setOpen] = useState(true)
    const [currentUserTitle, setCurrentUserTitle] = useState('Joanne Pierce')

    const toggleDrawerOpen = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="transparent"
                elevation={0}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: 'white',
                    border: 0,
                    borderBottom: '1px solid #e5e5e5',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 4,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                        <img
                            src={appLogo}
                            draggable={false}
                            style={{ width: '9rem', height: '1.5rem' }}
                            alt="app logo"
                        />
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    '& .MuiDrawer-paper': { borderWidth: 0 },
                }}
            >
                <DrawerHeader />
                <Box
                    style={{
                        display: 'flex',
                        color: '#fff',
                        borderBottom: '1px solid #e5e5e5',
                        alignItems: 'center',
                        padding: '1rem',
                    }}
                >
                    <Box
                        style={{
                            display: 'flex',
                            width: '2rem',
                            height: '2rem',
                            flexShrink: 0,
                            overflow: 'hidden',
                            alignItems: 'center',
                            color: '#000',
                            border: '1px solid #e5e5e5',
                            justifyContent: 'center',
                            borderRadius: '100%',
                        }}
                    >
                        <img src={avatar1} style={{ width: '100%', height: '100%' }} />
                    </Box>
                    <Box style={{ paddingLeft: '1rem' }}>
                        <Typography
                            variant="subtitle2"
                            style={{
                                color: '#000',
                                userSelect: 'none',
                                opacity: open ? 1 : 0,
                            }}
                        >
                            {currentUserTitle}
                        </Typography>
                    </Box>
                </Box>
                <List>
                    {drawerItems &&
                        drawerItems.map((item, index) => (
                            <Link
                                to={item.path}
                                key={`drawerItem${index}`}
                                style={{ color: 'inherit', textDecoration: 'inherit' }}
                            >
                                <ListItem disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 45,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 3,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                color: theme.palette.primary.main,
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.title}
                                            primaryTypographyProps={{ style: { fontSize: '0.9rem' } }}
                                            sx={{ opacity: open ? 1 : 0 }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, height: '100%', background: '#fafafa' }}
            >
                <DrawerHeader />
                <Box
                    sx={{
                        height: '100%',
                        padding: '0 3rem 3rem 3rem',
                    }}
                >
                    <Grid container maxWidth="lg">
                        <DashboardRoutes />
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard
