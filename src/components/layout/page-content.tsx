import React from 'react';
import { Layout } from './Layout';
import { ButtonBar } from './button-bar';
import { MainArea } from './main-area';

type Props = {};

export const PageContent = ({}: Props) => {
  return (
    <Layout>
      <>
        <ButtonBar>Button Bar</ButtonBar>
        <MainArea>Main Area</MainArea>
      </>
    </Layout>
  );
};
