import React from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles';

import ProfileData from 'components/ProfileData';
import RepoCard from 'components/RepoCard';
import RandomCalendar from 'components/RandomCalendar';

export const Profile = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">49</span>
    </div>
  );

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
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
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

          <CalendarHeading>
            Random Calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};
