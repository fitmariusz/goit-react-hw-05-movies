import styled from "styled-components";
import { NavLink} from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: black;
    background-color: green;
  }
`;

export const Nav = styled.div`
display: flex;
flex-direction: column;
` 

export const DetalisCard = styled.div`
  display: flex;
  gap: 20px;
`

export const Li = styled.li`
list-style: none;
`;
