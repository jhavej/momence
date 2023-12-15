import { styled } from "styled-components";

export const Table = styled.table`
  width: 100%;
  border: 1px solid #f8f8f9;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #f8f8f9;
`;

export const TableBody = styled.tbody`
  & > tr:hover {
    background-color: #f8f8f9;
  }
`;

export const TableRow = styled.tr`
  transition: background-color 0.3s;
`;

export const TableHead = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: bold;
`;

export const TableCell = styled.td`
  padding: 1rem;
`;

export const TableCaption = styled.caption`
  font-size: 0.8rem;
  padding: 1rem 0;
  color: #737373;
`;
