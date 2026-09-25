import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.a`
  font-weight: 700;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  color: tomato;
  margin: 20px;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;

  &.active {
    color: green;
  }
`;
