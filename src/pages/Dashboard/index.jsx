import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

      setNewRepo('');
      setInputError('');
    }).catch(() => {
      setInputError('Usuario nao localizado.');
    });
  }

  console.log(repositories);

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
          <Link to={`Repositories/${item.full_name}`}>
            <Card
              key={item.full_name}
              fullName={item.full_name}
              avatar={item.owner.avatar_url}
              description={item.description}
              user={`Repositories/${item.owner.login}`}
            />
          </Link>

        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
