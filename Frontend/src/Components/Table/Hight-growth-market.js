import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Box, InputAdornment, IconButton } from "@mui/material"
import "../../assets/Css/TrendsTable.css"
import SearchIcon from '@mui/icons-material/Search';

function MarketTable() {
    return (
        <Box sx={{ width: "100%", maxWidth: 1200, margin: "20px auto" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>

                <TextField
                    placeholder="Search Reports"
                    variant="outlined"
                    size="small"
                    sx={{ minWidth: 300 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Box sx={{ ml: "auto", typography: "body2" }}>All market sizes are in USD Bn</Box>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>MARKET</TableCell>
                            <TableCell align="right">2022</TableCell>
                            <TableCell align="right">2023</TableCell>
                            <TableCell align="right">2024</TableCell>
                            <TableCell align="right">2029</TableCell>
                            <TableCell align="right">CAGR</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Smart Infrastructure Market</TableCell>
                            <TableCell align="right">662.22</TableCell>
                            <TableCell align="right">781.42</TableCell>
                            <TableCell align="right">922.08</TableCell>
                            <TableCell align="right">2109.5</TableCell>
                            <TableCell align="right">18.0%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Artificial Intelligence (AI) Market</TableCell>
                            <TableCell align="right">116.46</TableCell>
                            <TableCell align="right">158.03</TableCell>
                            <TableCell align="right">214.45</TableCell>
                            <TableCell align="right">986.81</TableCell>
                            <TableCell align="right">35.7%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>AI Server Market</TableCell>
                            <TableCell align="right">79.17</TableCell>
                            <TableCell align="right">106.32</TableCell>
                            <TableCell align="right">142.79</TableCell>
                            <TableCell align="right">623.85</TableCell>
                            <TableCell align="right">34.3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Managed Services Market</TableCell>
                            <TableCell align="right">320.33</TableCell>
                            <TableCell align="right">342.43</TableCell>
                            <TableCell align="right">366.06</TableCell>
                            <TableCell align="right">511.03</TableCell>
                            <TableCell align="right">6.9%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>AI Infrastructure Market</TableCell>
                            <TableCell align="right">95.49</TableCell>
                            <TableCell align="right">114.02</TableCell>
                            <TableCell align="right">136.14</TableCell>
                            <TableCell align="right">330.37</TableCell>
                            <TableCell align="right">19.4%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default MarketTable

