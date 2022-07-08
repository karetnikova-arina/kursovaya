import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products";
import {Routes, Route} from 'react-router-dom'
import Manufacturers from "./pages/Manufacturers";
import Categories from "./pages/Categories";
import Footer from "./components/Footer/Footer";
import {Box} from '@mui/material'
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
      <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
          }}>
<Navbar />
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/manufacturers" element={<Manufacturers />} />
            <Route path="/" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
    </Box>
  );
}

export default App;
