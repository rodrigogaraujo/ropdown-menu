import styled, { css } from 'styled-components';

export const MenuContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  position: relative;
  display: inline-block;
  padding: 10px;
  border-radius: 8px;
  color: grey;
  background-color: beige;
  margin-right: 8px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const DropdownMenu = styled.ul<{isOpen?: boolean}>`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: grey;
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;

export const DropdownMenuItem = styled.li<{isFirstChild?: boolean}>`
  list-style: none;
  margin-top: 8px;
  width: 100px;
  border-radius: 8px;
  padding: 10px;
  &:hover {
    background-color: lightgray;
  }
  ${({isFirstChild}) =>
    isFirstChild &&
        css`
        margin-top: 0;
        `}
`;
