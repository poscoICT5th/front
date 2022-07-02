import React, { } from 'react'
import { Routes, Route }
    from 'react-router-dom'
import Login from "./components/Account/Login";
import LogisticsExport from "./components/Pages/LogisticsExport";
import LogisticsImport from "./components/Pages/LogisticsImport";
import LosgisticsMove from "./components/Pages/LosgisticsMove";
import Inventory from "./components/Pages/Inventory";
import Warehouse from "./components/Pages/Warehouse";
import Dashboard from "./components/Pages/Dashboard";
import Mypage from "./components/Pages/Mypage";
import TrendInventory from "./components/Trend/TrendInventory";
import Tracking from './components/Pages/Tracking';
import ChartTreemap from './components/Map/ChartTreemap';
import CreateAccount from './components/Pages/CreateAccount';
function Router(props) {
    return (
        <Routes>
            <Route
                index
                element={
                    <Login
                        alertSucOpen={props.alertSucOpen}
                        setAlertSucOpen={props.setAlertSucOpen}
                        alertFailedOpen={props.alertFailedOpen}
                        setAlertFailedOpen={props.setAlertFailedOpen}
                        setAlertMessage={props.setAlertMessage}
                    />}
            />
            <Route
                path="/Dashboard"
                element={<Dashboard alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/LogisticsImport"
                element={<LogisticsImport alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/LogisticsExport"
                element={<LogisticsExport alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/LosgisticsMove"
                element={<LosgisticsMove alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/Inventory"
                element={<Inventory alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/Warehouse"
                element={<Warehouse alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/Mypage"
                element={<Mypage alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/TrendInventory"
                element={<TrendInventory alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/Tracking"
                element={<Tracking alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/ChartTreemap"
                element={<ChartTreemap alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/CreateAccount"
                element={<CreateAccount alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
        </Routes>

    )
}

export default Router