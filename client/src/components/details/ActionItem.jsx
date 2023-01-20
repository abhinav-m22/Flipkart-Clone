import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
    padding: '15px 20px',
    // border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '46%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '44%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '46%'
    }
}));

const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%' }}>
                <Image src={product.detailUrl} alt='product-img' />
            </Box>
            <StyledButton variant='contained' onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00', fontWeight: 'bold' }}><Cart /> Add to Cart</StyledButton>
            <StyledButton variant='contained' style={{ marginRight: 10, background: '#fb641b', fontWeight: 'bold' }}><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;