import { ConnectButton } from '@rainbow-me/rainbowkit';

export const CustomConnectButton = ({className="", buttonClassName=""}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted;
        const connected =
          ready &&
          account &&
          chain ;
        return (
          <div className={`${className}`}
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button style={{
                    fontFamily: 'Alternate Gothic',
                  }}
                   onClick={openConnectModal} type="button" className={`${buttonClassName} bg-zinc-500 text-2xl text-zinc-50 p-3 rounded-md inline text-gabe-black hover:text-flame-yellow hover:stroke-flame-orange hover:stroke-2`}>
                    CONNECT WALLET
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button style={{
                    fontFamily: 'Alternate Gothic',
                  }}
                   onClick={openChainModal} type="button" className={`${buttonClassName} bg-zinc-500 text-2xl text-zinc-50 p-3 rounded-md inline text-gabe-black hover:text-flame-yellow hover:stroke-flame-orange hover:stroke-2`}>
                    WRONG NETWORK
                  </button>
                  
                );
              }
              return (
                <button style={{
                  fontFamily: 'Alternate Gothic',
                }}
                 onClick={openAccountModal} type="button" className={`${buttonClassName} bg-zinc-500 text-2xl text-zinc-50 p-3 rounded-md inline text-gabe-black hover:text-flame-yellow hover:stroke-flame-orange hover:stroke-2`}>
                  {account?.ensName || account.address}
                </button>
                
              );

            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};