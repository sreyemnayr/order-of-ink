import {
  Chain,
  Wallet,
  getWalletConnectConnector,
} from '@rainbow-me/rainbowkit';

export interface MyWalletOptions {
  chains: Chain[];
}

export const zenGoWallet = ({ chains }: MyWalletOptions): Wallet => ({
  id: 'zen-go',
  name: 'ZenGo',
  iconUrl: `${process.env.PUBLIC_URL}/images/zengo.png`,
  iconBackground: '#F0EBFE',
  downloadUrls: {
    android: 'https://go.zengo.com/uCxL/2gmira9n',
    ios: 'https://go.zengo.com/uCxL/2gmira9n',
    browserExtension: 'https://go.zengo.com/uCxL/2gmira9n',
  },
  createConnector: () => {
    const connector = getWalletConnectConnector({ chains });

    return {
      connector,
      mobile: {
        getUri: async () => {
          const { uri } = (await connector.getProvider()).connector;
          return uri;
        },
      },
      qrCode: {
        getUri: async () =>
          (await connector.getProvider()).connector.uri,
        instructions: {
          learnMoreUrl: 'https://zengo.com/',
          steps: [
            {
              description:
                'A crypto-wallet is the place where you can safely store all your cryptocurrencies, NFTs and tokens. No funds are required in the wallet to create an account and log in. FREE to sign-up.',
              step: 'install',
              title: 'Install/Open the ZenGo app',
            },
            {
              description:
                'After you scan, a connection prompt will appear for you to connect your wallet.',
              step: 'scan',
              title: 'Tap the scan button',
            },
          ],
        },
      },
    };
  },
});

export default zenGoWallet;