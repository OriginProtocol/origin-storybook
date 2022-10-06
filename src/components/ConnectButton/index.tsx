import { useState } from 'react'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'
import { Button } from '../Button'
import Modal from '../Modal'

/**
 * Default starting prop passed through to state, for testing / component Storybook
 */
export interface ConnectButtonProps {
  startOpen?: boolean
}

export const ConnectButton = ({
  startOpen = false
}: ConnectButtonProps) => {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()
  const [open, setOpen] = useState(startOpen)

  if (isConnected && connector) {
    return (
      <div>
        <img src={ensAvatar?.toString()} alt="ENS Avatar" />
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector.name}</div>
        <Button webProperty='story' onClick={() => disconnect()}>Disconnect</Button>
      </div>
    )
  }


  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        Connect Wallet
      </Button>
      <Modal open={open} setOpen={setOpen} closeButtonLabel='Close'>
        <div className='flex flex-col space-y-2 items-start'>
          {connectors.map((connector) => (
            <Button
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => connect({ connector })}
              className='w-96 text-center py-4'
              size='medium'
              webProperty='story'
            >
              {connector.name}
              {!connector.ready && ' (unsupported)'}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                ' (connecting)'}
            </Button>
          ))}
          <span className='text-red-300'>
            {error && <div>{error.message}</div>}
          </span>
        </div>
      </Modal>
    </div>
  )
}
