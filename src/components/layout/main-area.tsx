import React from 'react';

type Props = { children: React.ReactNode };

export const MainArea = ({ children }: Props) => {
  return (
    <div className="main-area" >
      <div style={{  padding: '1em' }}>{children}</div>
    </div>
  );
};
