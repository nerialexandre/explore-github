import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import Header from './styles';

import logoImg from '../../assets/Logo.svg';

const Repository = () => {
  const { params } = useRouteMatch();

  return (
    <h1>
      <Header>
        <img src={logoImg} alt="git logo" />
        <Link to="/">voltar</Link>
      </Header>
      <span>
        Repository:
        {params.user}
      </span>

    </h1>
  );
};

export default Repository;
