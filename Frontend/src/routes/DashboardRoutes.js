import { Routes, Route, Navigate } from 'react-router-dom'

import Settings from '../Pages/Dashboard/Settings';

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Settings />} />
            <Route path="/home" element={<Settings />} />
            <Route path="/home" element={<Settings />} />
            <Route path="/home" element={<Settings />} />
            <Route path="/home" element={<Settings />} />
            <Route path="/home" element={<Settings />} />
            <Route path="/home" element={<Settings />} />
            <Route path="/home" element={<Navigate replace to="/home" />} />
        </Routes>
    )
}

export default DashboardRoutes
