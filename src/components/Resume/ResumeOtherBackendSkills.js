import React from "react";
import { Table } from "semantic-ui-react";

const ResumeOtherBackendSkills = () => (
  <div style={{ fontSize: "1.15rem", margin: "0.6rem" }}>
    <Table celled inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={4}>Skills</Table.HeaderCell>
          <Table.HeaderCell width={12}>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>SSH</Table.Cell>
          <Table.Cell>
            Remote linux server and generate ssh keys (DigitalOcean)
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Optimize web application</Table.Cell>
          <Table.Cell>
            Picture resize, Code splitting, Load balancing, Caching and Code
            optimizations
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default ResumeOtherBackendSkills;
