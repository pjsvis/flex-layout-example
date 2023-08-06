import React from 'react';
import './components/layout/layout.css';
import { Layout } from './components/layout/layout';
import { PageContent } from './components/layout/page-content';

const AppAlt = () => {
  return (
    <Layout>
      <PageContent />
    </Layout>
  );
};

export default AppAlt;
