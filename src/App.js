import './App.css';
import { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './components/pages/Home'


import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { injectedWallet, metaMaskWallet, coinbaseWallet, walletConnectWallet, rainbowWallet, ledgerWallet, braveWallet } from '@rainbow-me/rainbowkit/wallets';
import { zenGoWallet } from './components/toolsets/zenGoWalletConnector';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

window.Buffer = window.Buffer || require("buffer").Buffer;


const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: process.env.REACT_APP_ALCHEMY_API_KEY || "",
    }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({chains}),
      zenGoWallet({chains}),
    ],
  },
  {
    groupName: 'Others',
    wallets: [
      metaMaskWallet({chains}),
      walletConnectWallet({chains}),
      braveWallet({chains}),
      ledgerWallet({chains}),
      coinbaseWallet({chains, appName: 'Order of Ink'}),
    ]
  }
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});


function App() {

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
    {ready ? (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Router>
          <Routes>
            <Route 
            element={<Home />}
            path="/"
            />
          </Routes>
      </Router>
      </RainbowKitProvider>
    </WagmiConfig>
    ) : null }
    </>
  );

}

export default App;
