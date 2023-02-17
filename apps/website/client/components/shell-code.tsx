import React, { PropsWithChildren } from 'react';

type ShellCodeProps = PropsWithChildren<{}>;

const ShellCode = ({ children }: ShellCodeProps) => {
  return (
    <code className="text-xl! font-normal! text-devConceptsBlue-500! bg-devConceptsWhite! h-full! rounded! p-2! h-auto! shellCode">
      {children}
    </code>
  );
};

export default ShellCode;
