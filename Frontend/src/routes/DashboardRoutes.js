import { Routes, Route, Navigate } from 'react-router-dom'

import Settings from '../Pages/Dashboard/Settings';

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/coming-soon" element={<Settings />} />
            <Route path="/coming-soon" element={<Settings />} />
            <Route path="/coming-soon" element={<Settings />} />
            <Route path="/coming-soon" element={<Settings />} />
            <Route path="/coming-soon" element={<Settings />} />
            <Route path="/coming-soon" element={<Settings />} />
            <Route path="/coming-soon" element={<Settings />} />
            <Route path="/coming-soon" element={<Navigate replace to="/home" />} />
        </Routes>
    )
}

export default DashboardRoutes
