import { Typography } from "@mui/material";
import styled from "styled-components";

export const TabPanelFoods = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(3, 1fr);
  
    @media (max-width: 768px) {
     grid-template-columns : 1fr;
     gap: 8px;
    }
`;

export const TypographyStyle = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  width: 24px;
  margin-right: 12px;
`;
