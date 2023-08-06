import React from 'react';
import { TitleBar } from './title-bar';
import { FooterBar } from './footer-bar';

type Props = { children: React.ReactElement };

export const Layout = ({ children }: Props) => {
  return (
    <div className="layout-container">
      <TitleBar />
      {children}
      <FooterBar />
    </div>
  );
};
