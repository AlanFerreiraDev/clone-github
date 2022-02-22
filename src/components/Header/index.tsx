import React from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

export const Header = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input type="text" placeholder="Enter Username or Repo ..." />
      </SearchForm>
    </Container>
  );
};
