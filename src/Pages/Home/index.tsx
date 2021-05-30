import React, { useEffect, useState } from "react";

import { Container, Header, Title, Image, ContainerRepo } from "./styles";

import TitleGit from "../../Components/TitleGit";

import RepoList from "../../Components/RepoList";

import api from "../../Services/api";

interface IRep {
  id: number;
  name: string;
  description: string;
  language: string;
}

function Home() {
  const [rep, setRep] = useState<IRep[]>([]);

  async function getRepos() {
    const { data } = await api.get<IRep[]>("/repos");
    setRep(data);
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <Container>
      <Header>
        <Image />
        <Title>Lista de repository's</Title>
      </Header>
      <TitleGit />
      <ContainerRepo>
        {rep.map((repository) => (
          <RepoList repository={repository} key={repository.id} />
        ))}
      </ContainerRepo>
    </Container>
  );
}

export default Home;
