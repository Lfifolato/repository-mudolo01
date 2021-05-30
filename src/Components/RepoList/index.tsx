import react from "react";
import { Container, List } from "./styles";

interface RepoListProps {
  repository: {
    name: string;
    description: string;
    language: string;
  };
}

export default function RepoList(repository: RepoListProps) {
  return (
    <Container>
      <List>
        <h3>{repository.repository.name}</h3>
        <p>{repository.repository.description}</p>
        <p>{repository.repository.language}</p>
      </List>
    </Container>
  );
}
