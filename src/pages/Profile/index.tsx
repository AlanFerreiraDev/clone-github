import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

export const Profile = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'AlanFerreiraDev'}
            name={'Alan Bruno'}
            avatarUrl={'https://avatars.githubusercontent.com/u/46540979?v=4'}
            followers={900}
            following={200}
            company={'Pixter'}
            location={'São Paulo, Brazil'}
            email={'alanjjr83@gmail.com'}
            blog={'https://www.linkedin.com/in/alan-bruno-ferreira-53924553/'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((repo) => (
                <RepoCard
                  key={repo}
                  username={'AlanFerreiraDev'}
                  reponame={'clone-github'}
                  description={'Contains all the code for the clone-github app'}
                  language={repo % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};
