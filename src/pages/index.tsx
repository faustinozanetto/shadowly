import React from 'react';
import Layout from '@modules/layout/components/layout';

const HomePage: React.FC = (props) => {
  const {} = props;

  return (
    <Layout
      headProps={{
        title: 'Home | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <h1>Shadowly</h1>
    </Layout>
  );
};

export default HomePage;
