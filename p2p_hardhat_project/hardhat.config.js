// hardhat.config.js

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    hyperspace: {
      url: "https://rpc.ankr.com/filecoin_testnet",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: "0.8.17",
};

