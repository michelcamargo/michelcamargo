import { NextDataHooksProvider } from 'next-data-hooks';

const AppProviders = ({
  children,
  nextDataHooks,
}) => {
  return (
    <NextDataHooksProvider nextDataHooks={nextDataHooks}>
      {children}
    </NextDataHooksProvider>
  );
};

export default AppProviders;
