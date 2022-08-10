import React from 'react';
import Layout from '@modules/layout/components/layout';
import HomeView from '@views/home/home-view';

const HomePage: React.FC = (props) => {
  const {} = props;

  return (
    <Layout
      headProps={{
        title: 'Home | Shadowly',
        description: 'Shadowly is a web app for creating customizable css box shadows.',
        url: 'https://shadowly.dev',
        canonicalUrl: 'https://shadowly.dev',
      }}
    >
      <HomeView />
    </Layout>
  );
};

export default HomePage;
