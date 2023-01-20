import React from 'react';
import { useState } from 'react';

import { AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, List} from '@mui/material';

import { Menu } from '@mui/icons-material';

import Search from './Search';
import CustomButtons from './CustomButtons';

import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #2974f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImg = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonWrapper = styled('span')(({theme}) => ({
    margin: '0 2% 0 auto',
    [theme.breakpoints.down('md')] : {
        display: 'none',
    }
}));

const MenuButton = styled(IconButton)(({theme}) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))

const Header = () => {

    const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subUrl = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style={{width: 250}} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

  return (
    <StyledHeader position='fixed'>
        <Toolbar style={{minHeight: 55}}>
            <MenuButton aria-label='delete' color='inherit' onClick={handleOpen}>
                <Menu />
            </MenuButton>

            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>

            <Component to='/'>
                <img src={logoUrl} alt='logo' style={{ width: 75 }}/>
                <Box style={{ display: 'flex' }}>
                    <SubHeading>Explore <Box component="span" style={{ color: '#FFE500' }} >Plus</Box> </SubHeading>
                    <PlusImg src={subUrl} alt='subLogo' />
                </Box>
            </Component>
            <Search />
            <CustomButtonWrapper>
                <CustomButtons />
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header
