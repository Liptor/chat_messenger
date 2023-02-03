import { ethers } from 'ethers';

export const getEthers = () => {
  const providerUrl = "https://mainnet.infura.io/v3/3ab33af887234ec49e5219f07797c6ca"
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  
};

