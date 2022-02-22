import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: var(--header);

  padding: 0.6875rem 1rem;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 2rem;
  height: 2rem;

  flex-shrink: 0; // Para não amassar a Logo quando não tiver espaço
`;

export const SearchForm = styled.form`
  padding-left: 1rem;
  width: 100%;

  > input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 0.4375rem 0.75rem;
    width: 100%;

    &:hover {
      width: 19.875rem;
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;
