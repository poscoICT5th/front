import React, { } from 'react'
import { Routes, Route }
    from 'react-router-dom'
import Login from "./components/Pages/Login";
import LogisticsExport from "./components/Pages/LogisticsExport";
import LogisticsImport from "./components/Pages/LogisticsImport";
import LosgisticsMove from "./components/Pages/LosgisticsMove";
import Inventory from "./components/Pages/Inventory";
import Warehouse from "./components/Pages/Warehouse";
import Dashboard from "./components/Pages/Dashboard";
import Mypage from "./components/Pages/Mypage";
import TrendInventory from "./components/Pages/TrendInventory";
import Tracking from './components/Pages/Tracking';
import CreateAccount from './components/Pages/CreateAccount';
import WarehouseMap from './components/Pages/WarehouseMap';
import Board from './components/Pages/Board';
import BoardDetail from './components/Pages/BoardDetail';
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
                path="/CreateAccount"
                element={<CreateAccount alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/WarehouseMap"
                element={<WarehouseMap alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/Board"
                element={<Board alertSucOpen={props.alertSucOpen}
                    setAlertSucOpen={props.setAlertSucOpen}
                    alertFailedOpen={props.alertFailedOpen}
                    setAlertFailedOpen={props.setAlertFailedOpen}
                    setAlertMessage={props.setAlertMessage}
                />}
            />
            <Route
                path="/BoardDetail/:hotline_id"
                element={<BoardDetail alertSucOpen={props.alertSucOpen}
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