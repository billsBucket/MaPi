import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { PublicKey, Connection } from '@solana/web3.js';

const SolanaWallet: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<PublicKey | null>(null);

  const connectWallet = async () => {
    // Connect to Solana wallet (Phantom, Sollet, etc.)
    const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_NETWORK!);
    const providerUrl = 'https://www.sollet.io';
    const provider = new WebBrowser.Provider(providerUrl);

    const publicKey = await provider.connect();
    setWalletAddress(publicKey);
  };

  return (
    <View>
      <Button title="Connect Wallet" onPress={connectWallet} />
      {walletAddress && (
        <Text>Connected Wallet: {walletAddress.toString()}</Text>
      )}
    </View>
  );
};

export default SolanaWallet;