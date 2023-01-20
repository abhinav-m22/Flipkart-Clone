import Header from './components/header/Header';
import Home from './components/Home/Home';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import { Box } from '@mui/material';

import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 65 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes> 
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
