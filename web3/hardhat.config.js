/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: 'https://eth-sepolia.g.https://eth-mainnet.g.alchemy.com/v2/M46tAQPq0Ll3Tg-Q0MKQHjbbXxM7nxbo.com/v2/M46tAQPq0Ll3Tg-Q0MKQHjbbXxM7nxbo',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
