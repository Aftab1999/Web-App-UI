import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Container,
    Grid,
    Avatar,
    Link,
    Box,
    TextField,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    IconButton,
    TableBody,
    MenuItem,
    Divider,
    Collapse,
    Tabs,
    Tab,
    Menu,
    Paper,
    InputAdornment
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Header from "../Header/Navbar";
import MailIcon from "@mui/icons-material/Mail";

import "../../assets/Css/Trends.css";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Checkbox,
    FormControlLabel,
    Select,
    FormControl
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Pagination from '@mui/material/Pagination';

import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import TreandsChat from "../../Components/Charts/Treands-chat"
import HightgrowthmarketList from "../../Components/Table/Hight-growth-market"
import Breadcrumbs from '@mui/material/Breadcrumbs';



function Dashboard() {

    // const [expanded, setExpanded] = useState('amc');

    // const handleChange = (panel) => (event, isExpanded) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };




    const [sortBy, setSortBy] = React.useState('popularity');

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const [expandedSection, setExpandedSection] = useState(null);
    const [checkboxState, setCheckboxState] = useState({
        Debt: { parent: false, children: [false, false] },
        Equity: { parent: false, children: [false, false] },
        Hybrid: { parent: false, children: [false, false] },
        Other: { parent: true, children: [false, false] },
    });

    // Handlers for expanding and collapsing sections
    const handleAccordionChange = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    // Handlers for parent checkbox toggles
    const handleParentCheckboxChange = (section) => {
        const newChildrenState = checkboxState[section].children.map(
            () => !checkboxState[section].parent
        );
        setCheckboxState({
            ...checkboxState,
            [section]: { parent: !checkboxState[section].parent, children: newChildrenState },
        });
    };

    // Handlers for child checkbox toggles
    const handleChildCheckboxChange = (section, index) => {
        const newChildrenState = [...checkboxState[section].children];
        newChildrenState[index] = !newChildrenState[index];
        const newParentState = newChildrenState.every((state) => state);
        setCheckboxState({
            ...checkboxState,
            [section]: { parent: newParentState, children: newChildrenState },
        });
    };

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <>
            <Header />

            <div className="wrapper">

                <Grid container>

                    <Grid item xs={12} md={12} sx={{ mb: 4 }}>
                        <Box className="mt-10">
                            {/* <Typography >  Home  {">"} Treands </Typography> */}
                            <div role="presentation" onClick={handleClick}>
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link underline="hover" color="inherit" href="/">
                                        Trends
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="inherit"
                                        href="/material-ui/getting-started/installation/"
                                    >
                                        Mega Trends
                                    </Link>
                                    <Typography sx={{ color: 'text.primary' }}> Artificial intelligence </Typography>
                                </Breadcrumbs>
                            </div>
                        </Box>
                    </Grid>

                    {/* <Grid item xs={12} md={12} sx={{ mb: 3 }}>
                        <Box >
                            <Typography variant='h4' className='mutual-header-text'>  Treands </Typography>
                        </Box>
                    </Grid> */}

                </Grid>

                <Grid container spacing={3}>

                    <Grid item xs={12} md={4} mb={2}>

                        <div className="mf_filters_container">
                            <div className="mf_filters_header">
                                <Typography variant="h6" className="mf_filters_title">Lorem</Typography>
                                <button className="mf_clear_btn">CLEAR</button>
                            </div>

                            <Accordion defaultExpanded className="mf_accordion">
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className='mutual-summary-text'>Lorem</Typography>
                                </AccordionSummary>

                                <AccordionDetails>



                                    <div className="mf_checkbox_group">
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Divider />

                            {/* ---------------- */}

                            {/* <Accordion defaultExpanded className="mf_accordion">
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className="mutual-summary-text">Lorem</Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <div className="mf_checkbox_group">
                                    
                                        <Accordion
                                            className="mf_nested_accordion"
                                            expanded={expandedSection === "Debt"}
                                            onChange={() => handleAccordionChange("Debt")}
                                        >
                                            <AccordionSummary
                                                expandIcon={expandedSection === "Debt" ? <MinimizeIcon /> : <AddIcon />}
                                            >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={checkboxState.Debt.parent}
                                                            onChange={() => handleParentCheckboxChange("Debt")}
                                                        />
                                                    }
                                                    label="Lorem"
                                                    className="mf_checkbox_label"
                                                />
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className="nested-checkbox-group mf_nested_checkbox-mt">
                                                    {["Lorem Lorem", "Lorem"].map((label, index) => (
                                                        <FormControlLabel
                                                            key={index}
                                                            control={
                                                                <Checkbox
                                                                    checked={checkboxState.Debt.children[index]}
                                                                    onChange={() => handleChildCheckboxChange("Debt", index)}
                                                                />
                                                            }
                                                            label={label}
                                                            className="mf_checkbox_label mf_nested_checkbox"
                                                        />
                                                    ))}
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>

                                    
                                        <Accordion
                                            className="mf_nested_accordion"
                                            expanded={expandedSection === "Equity"}
                                            onChange={() => handleAccordionChange("Equity")}
                                        >
                                            <AccordionSummary
                                                expandIcon={expandedSection === "Equity" ? <MinimizeIcon /> : <AddIcon />}
                                            >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={checkboxState.Equity.parent}
                                                            onChange={() => handleParentCheckboxChange("Equity")}
                                                        />
                                                    }
                                                    label="Lorem"
                                                    className="mf_checkbox_label"
                                                />
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className="nested-checkbox-group mf_nested_checkbox-mt">
                                                    {["FoF Overseas/Domestic", "Index"].map((label, index) => (
                                                        <FormControlLabel
                                                            key={index}
                                                            control={
                                                                <Checkbox
                                                                    checked={checkboxState.Equity.children[index]}
                                                                    onChange={() => handleChildCheckboxChange("Equity", index)}
                                                                />
                                                            }
                                                            label={label}
                                                            className="mf_checkbox_label mf_nested_checkbox"
                                                        />
                                                    ))}
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>

                                    
                                        <Accordion
                                            className="mf_nested_accordion"
                                            expanded={expandedSection === "Hybrid"}
                                            onChange={() => handleAccordionChange("Hybrid")}
                                        >
                                            <AccordionSummary
                                                expandIcon={expandedSection === "Hybrid" ? <MinimizeIcon /> : <AddIcon />}
                                            >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={checkboxState.Hybrid.parent}
                                                            onChange={() => handleParentCheckboxChange("Hybrid")}
                                                        />
                                                    }
                                                    label="Lorem"
                                                    className="mf_checkbox_label"
                                                />
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className="nested-checkbox-group mf_nested_checkbox-mt">
                                                    {["Lorem Lorem", "Lorem"].map((label, index) => (
                                                        <FormControlLabel
                                                            key={index}
                                                            control={
                                                                <Checkbox
                                                                    checked={checkboxState.Hybrid.children[index]}
                                                                    onChange={() => handleChildCheckboxChange("Hybrid", index)}
                                                                />
                                                            }
                                                            label={label}
                                                            className="mf_checkbox_label mf_nested_checkbox"
                                                        />
                                                    ))}
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>



                                        <Accordion
                                            className="mf_nested_accordion"
                                            expanded={expandedSection === "Other"}
                                            onChange={() => handleAccordionChange("Other")}
                                        >
                                            <AccordionSummary
                                                expandIcon={expandedSection === "Other" ? <MinimizeIcon /> : <AddIcon />}
                                            >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={checkboxState.Other.parent}
                                                            onChange={() => handleParentCheckboxChange("Other")}
                                                        />
                                                    }
                                                    label="Lorem"
                                                    className="mf_checkbox_label"
                                                />
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className="nested-checkbox-group">
                                                    {["FoF Overseas/Domestic", "Index"].map((label, index) => (
                                                        <FormControlLabel
                                                            key={index}
                                                            control={
                                                                <Checkbox
                                                                    checked={checkboxState.Other.children[index]}
                                                                    onChange={() => handleChildCheckboxChange("Other", index)}
                                                                />
                                                            }
                                                            label={label}
                                                            className="mf_checkbox_label mf_nested_checkbox"
                                                        />
                                                    ))}
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>


                                    </div>

                                </AccordionDetails>
                            </Accordion>
                            <Divider /> */}

                            {/* ---------------- */}

                            <Accordion defaultExpanded className="mf_accordion">
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className='mutual-summary-text'>Lorem</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="mf_checkbox_group">
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Low"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Divider />
                            <Accordion defaultExpanded className="mf_accordion">
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className='mutual-summary-text'>Lorem</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="mf_checkbox_group">
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Divider />
                            <Accordion defaultExpanded className="mf_accordion">
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className='mutual-summary-text'>Lorem</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="mf_checkbox_group">
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Lorem"
                                            className="mf_checkbox_label"
                                        />
                                    </div>
                                </AccordionDetails>
                            </Accordion>

                        </div>


                    </Grid>

                    <Grid item xs={12} md={8}>

                        <Typography className='trends-header'> High Growth Markets </Typography>

                        <Box>
                            <TreandsChat />
                        </Box>

                        <Box>
                            <HightgrowthmarketList />
                        </Box>
                    </Grid>


                </Grid>


            </div>
        </>
    );
}

export default Dashboard;
