import { Grid, Typography, Box, styled, Button } from "@mui/material"
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  // display: 'flex',
  [theme.breakpoints.down('md')]: {
    padding: '15px 0'
  }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('md')]: {
      marginBottom: 15
  }
}));

// const Container = styled(Grid)`
//   padding: 30px 135px;
// `

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

const Cart = () => {

  const { cartItems } = useSelector(state => state.cart)

  return (
    <>
      {
        cartItems.length ?
          <Component container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
              <Header>
                <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Cart ({cartItems?.length})</Typography>
              </Header>
              {cartItems.map(item => (
                <CartItem item={item} />
              ))
              }

              <ButtonWrapper>
                <StyledButton>Place Order</StyledButton>
              </ButtonWrapper>
            </LeftComponent>


            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalView cartItems={cartItems} />
            </Grid>
          </Component>
          : 
          <EmptyCart />
      }
    </>
  )
}

export default Cart