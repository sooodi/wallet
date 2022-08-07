require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/6mMQxsrMIOq9-IeQPqSYCQX0gIoC329l',
      accounts: ['bb7cb487f87266287c68bcdb36cddc0b2a1b90c03ed76be35c0be1915bac1c9a'],
    },
  },
};