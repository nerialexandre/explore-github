import React, { useState } from 'react';

import {
  Title, Repositories, Form, DisplayError,
} from './styles';

import Card from '../../components/cardsRepository/index';
import axios from '../../services/GitHubService';

import logoImg from '../../assets/Logo.svg';

const Dashboard = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [inputError, setInputError] = useState('');

  function handleAddRepository(event) {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o nome do usuarios.');
      return;
    }

    axios.get(`/repos/${newRepo}`).then(async (res) => {
      const repository = res.data;
      const prevRepositoryes = repositories;
      await setRepositories(prevRepositoryes.concat(repository));

      console.log(repositories);
      setNewRepo('');
      setInputError('');
    }).catch(() => {
      setInputError('Usuario nao localizado.');
    });
  }

  return (
    <>
      <img src={logoImg} alt="git logo" />
      <Title>Explore repositórios no Github.</Title>
      <Form
        hasError={!!inputError}
        onSubmit={handleAddRepository}
      >
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <DisplayError>{inputError}</DisplayError>}

      <Repositories>
        {repositories.map((item) => (
          <Card
            key={item.full_name}
            fullName={item.full_name}
            avatar={item.owner.avatar_url}
            description={item.description}
            user={`Repositories/${item.owner.login}`}
          />
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
