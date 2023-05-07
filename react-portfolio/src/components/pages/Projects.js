import React from "react";
import projects from "../../projects.json";
import { Segment, Card, Icon } from "semantic-ui-react";

export default function Project() {
  return (
    <div style={{ backgroundColor: '#2d283e'}}>
    <Segment basic>
      <div className="ui very padded segment" style={{ backgroundColor: '#d1d7e0'}}>
        <h2>My Projects</h2>
        <Card.Group>
          {projects.map((project) => (
            <Card key={project.id} raised >
              <div className="image">
                <img alt={project.name} src={project.image} />
              </div>
              <Card.Content>
                <Card.Header>{project.name}</Card.Header>
                <Card.Description>{project.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <a
                    className="ui basic blue button"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon name="github" />
                    GitHub
                  </a>
                  {project.deployedapp && (
                    <a
                      className="ui basic green button"
                      href={project.deployedapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="external" />
                      Live Demo
                    </a>
                  )}
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    </Segment>
    </div>
  );
}
