import React from 'react';
import { ButtonBar } from './button-bar';
import { MainArea } from './main-area';
import ReactMarkdown from 'react-markdown';

type Props = {};

export const PageContent = ({}: Props) => {
  const markdown = `
   # Layout Implementation
   - Add tags where appropriate
   - Do not import layout.css until completed
   - Import layout.css
    `;
  return (
    <>
      <ButtonBar>Button Bar</ButtonBar>
      <MainArea>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </MainArea>
    </>
  );
};
