import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color: #343437;
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;
  padding: 0.5rem 1rem;
  height: 2.5rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: #343437d6;
  }
`;
