import { styled } from "styled-components";

export const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
  background-color: #f8f9fa;
  padding: 0.75rem;
  font-size: 0.875rem;
  outline: none;
  background-clip: padding-box;
  color: #212529;
  font-weight: 500;

  &::placeholder {
    color: #6c757d;
  }
`;
