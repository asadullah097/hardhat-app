/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle')

const PRIVATE_KEY = process.env.KEY
module.exports = {
  solidity: "0.7.3",

  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};
