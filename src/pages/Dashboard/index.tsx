import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Gitub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a
          href="https://github.com/DouglasFuelber/douglas-fuelber-gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars0.githubusercontent.com/u/15067098?s=460&u=937ff779f5b702ee7cfc32da353fa97de9ecf252&v=4"
            alt="DouglasFuelber"
          />

          <div>
            <strong>douglas-fuelber-gatsby</strong>
            <p>Personal website build with Gatsby and hosted on Netlify.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a
          href="https://github.com/DouglasFuelber/douglas-fuelber-gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars0.githubusercontent.com/u/15067098?s=460&u=937ff779f5b702ee7cfc32da353fa97de9ecf252&v=4"
            alt="DouglasFuelber"
          />

          <div>
            <strong>douglas-fuelber-gatsby</strong>
            <p>Personal website build with Gatsby and hosted on Netlify.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a
          href="https://github.com/DouglasFuelber/douglas-fuelber-gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars0.githubusercontent.com/u/15067098?s=460&u=937ff779f5b702ee7cfc32da353fa97de9ecf252&v=4"
            alt="DouglasFuelber"
          />

          <div>
            <strong>douglas-fuelber-gatsby</strong>
            <p>Personal website build with Gatsby and hosted on Netlify.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
