import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; // Para o calendario entrar na tela da esquerda para a direita
  overflow: hidden; // para nada q saia da tela apareça

  padding: 16px 20px 0 10px;
  border: 1px solid var(--border);
  border-radius: 6px;

  // Propriedade classForValue
  .wrapper {
    .scale-0 {
      fill: var(--calendar-scale-0);
    }
    .scale-1 {
      fill: var(--calendar-scale-1);
    }
    .scale-2 {
      fill: var(--calendar-scale-2);
    }
    .scale-3 {
      fill: var(--calendar-scale-3);
    }
    .scale-4 {
      fill: var(--calendar-scale-4);
    }

    width: 893px;
  }

  > span {
    font-size: 11px;
    color: var(--link);
    margin-top: -25px;
    margin-left: 7px;
    padding-bottom: 16px;

    align-self: flex-start; // P jopgar o texto p esquerda
  }
`;
