import React from 'react';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './pages/PrivateRoute';
import Login from './pages/Login';
import AuthWrapper from './pages/AuthWrapper';
import { Error } from '@material-ui/icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard></Dashboard>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;