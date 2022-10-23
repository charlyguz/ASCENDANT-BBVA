require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const apiKey = process.env.ETHERSCAN_API_KEY;
const key = process.env.PRIVATE_KEY;
const key2 = process.env.PRIVATE_KEY2;
const mnemonic = process.env.MNEMONIC;

if (!mnemonic || mnemonic.split(' ').length !== 12) {
  throw new Error('unable to retrieve mnemonic from .secret');
}
module.exports = {
  solidity: "0.8.17",

  networks: {
    goreli: {
      url: `https://goerli.infura.io/v3/${apiKey}`,
      accounts: [key2]
    },
    localhost:{
      url: 'HTTP://127.0.0.1:7545',
      chainId: 1337,
      accounts: {
        mnemonic,
        initialIndex: 0,
        path: "m/44'/60'/0'/0",
        count: 10,
      },
      // accounts: [key]
    }
  },

  etherscan: {
    apiKey: 'MSV9PH9SH128GIBNEHW7IGP2WU2TN26RSU'
  }

};
 