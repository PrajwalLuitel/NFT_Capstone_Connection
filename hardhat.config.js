require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ganache");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localganache: {
      url: `HTTP://127.0.0.1:7545`,
    },
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/qp8Zn9X89DjxWDIOgClZedV_DU7nRAEQ",
      accounts: [
        `0x6c5fd19ed2f90703a414962bec2fe54c9f27e462366c8cb918d45e496270a2ec`
      ],
    }
  },
};
