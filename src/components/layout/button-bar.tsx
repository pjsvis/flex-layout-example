import React from 'react';

type Props = { children: React.ReactNode };

export const ButtonBar = ({ children }: Props) => {
  return (
    <div className="button-bar">
      <div style={{ padding: '1em' }}>{children}</div>
    </div>
  );
};