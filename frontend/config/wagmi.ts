import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia, hardhat } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Production Delta FHE',
  projectId: 'YOUR_PROJECT_ID', // Get from https://cloud.walletconnect.com
  chains: [sepolia, hardhat],
  ssr: false,
  // Disable Base Account to avoid COOP header conflict with FHEVM
  // FHEVM requires COOP: same-origin for WebAssembly threads support
});

