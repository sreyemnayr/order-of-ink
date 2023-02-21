import './App.css';
import { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './components/pages/Home'


import { RainbowKitProvider, connectorsForWallets, DisclaimerComponent } from '@rainbow-me/rainbowkit';
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
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [goerli] : []),
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
      rainbowWallet({chains})
    ]
  }
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const disclaimer = ({Text, Link}) => (
  <Text>
    By connecting your wallet, you agree to the {' '}
      <Link href="https://www.theorderofink.com/terms-conditions">Terms and Conditions</Link> {' '}
      and acknowledge that you have read and understand the {' '}
      <Link href="https://www.theorderofink.com/privacypolicy">Privacy Policy</Link>
  </Text>
)

const appInfo = {
  appName: 'Order of Ink Mint',
  disclaimer
}


function App() {

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
    {ready ? (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} appInfo={appInfo} >
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
