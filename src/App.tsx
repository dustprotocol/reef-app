import React from 'react';
import { useGetSigner } from './hooks/useGetSigner';
import { useReloadSelectedBalance } from './hooks/useReloadSelectedBalance';
import { useLoadPools } from './hooks/useLoadPools';
import { useLoadTokens } from './hooks/useLoadTokens';
import { useLoadSigners } from './hooks/useLoadSigners';
import ContentRouter from './pages/ContentRouter';
import Nav from './common/Nav';
import { useBindEvmAddress } from './hooks/useBindEvmAddress';
import { useAppProvider } from './hooks/useAppProvider';
import { useAppSelector } from './store';

const App = (): JSX.Element => {
  const { provider } = useAppSelector((state) => state.app);
  useAppProvider();
  const currentSigner = useGetSigner();
  useLoadSigners(provider);
  useLoadTokens();
  useLoadPools();
  useReloadSelectedBalance();
  useBindEvmAddress(currentSigner, provider);

  return (
    <div className="App d-flex w-100 h-100">
      <div className="w-100 main-content">
        <Nav />
        <ContentRouter />
      </div>
    </div>
  );
};

export default App;
