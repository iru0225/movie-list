import styled from "styled-components";

export const TableComponent = styled.table`
  width: 100%;
  background: white;
`

export const THead = styled.thead`
  font-weight: 700;

  th {
    font-size: 16px;
    text-align: right;
  }
`

export const TBody = styled.tbody`
  tr {
    background: white;
    &:nth-child(even) {
      background: #D2D2D2;
    }
  }

  td {
    font-size: 16px;
  }
`