import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 30%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const THead = styled.thead`
  background-color: #ddd;
`;

const TH = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TD = styled.td`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
  width: 55%;
`;

function CurrentRemotes({
  remotes
}: {
  remotes: { name: string; type: string }[];
}) {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Name</TH>
          <TH>Type</TH>
        </TR>
      </THead>
      <tbody>
        {remotes.map((remote) => (
          <TR key={remote.name}>
            <TD>{remote.name}</TD>
            <TD>{remote.type}</TD>
          </TR>
        ))}
      </tbody>
    </Table>
  );
}

export default CurrentRemotes;
