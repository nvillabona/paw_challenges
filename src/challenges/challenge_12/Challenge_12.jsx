import { Outlet, Route, Routes, Link } from 'react-router-dom';
import {AuthProvider} from './providers/AuthProvider';
import Login from './pages/Login';
import Home from './pages/Home';

const Challenge_12 = () => {

    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </AuthProvider>
    )
}

export default Challenge_12