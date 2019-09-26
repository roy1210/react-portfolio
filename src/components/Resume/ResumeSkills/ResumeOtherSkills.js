import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class ResumeOtherBackendSkills extends Component {
  skillsets = [
    {
      skill: "SSH",
      description: "Remote linux server and generate ssh keys (DigitalOcean)"
    },
    {
      skill: "Website Optimization",
      description:
        "Picture resize, Code splitting, Load balancing, Caching and Code optimizations"
    },
    {
      skill: "Progressive Web App",
      description: "Create PWA that works offline like a native mobile app"
    },
    {
      skill: "Secure",
      description:
        "HTTPS, Code secrets (.gitignore), Secure headers (Helmet), Encrypt"
    },
    {
      skill: "Docker",
      description:
        "Use dockerfile and docker-compose to create containers for services"
    }
  ];
  render() {
    return (
      <div className="Resume-other-than-that">
        <h5 className="Resume-backend-other">Other than above</h5>
        <div style={{ fontSize: "1.1rem", margin: "0.3rem" }}>
          <Table celled inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={4}>Skill</Table.HeaderCell>
                <Table.HeaderCell width={12}>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.skillsets.map(skillset => (
                <Table.Row>
                  <Table.Cell>{skillset.skill}</Table.Cell>
                  <Table.Cell>{skillset.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default ResumeOtherBackendSkills;
