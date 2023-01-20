import { Box, Button, styled, ButtonGroup } from '@mui/material'
import React from 'react'

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = () => {
    return (
        <Component>
            <StyledButton>-</StyledButton>
            <StyledButton>1</StyledButton>
            <StyledButton>+</StyledButton>
        </Component>
    )
}

export default GroupedButton;