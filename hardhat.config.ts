import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

module.exports = {
  zksolc: {
    version: "1.3.5",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkMainnet",
  networks: {
    zkMainnet: {
      url: "https://mainnet.era.zksync.io", 
      ethNetwork: "mainnet", 
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.17",
  },
};