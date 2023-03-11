require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ganache");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localganache: {
      url: `HTTP://127.0.0.1:7545`,
    },
  },
};
