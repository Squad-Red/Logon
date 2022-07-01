import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
