import React from 'react';
import './components/layout/layout.css';
import { Layout } from './components/layout/layout';
import { PageContent } from './components/layout/page-content';

const App = () => {
  return (
    <Layout>
      <PageContent />
    </Layout>
  );
};

export default App;
