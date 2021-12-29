require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/hqejT0gquMBqgSsi6tFr1296aukWKsO_',
      accounts: ['b932e50140354245957a39967fd94a308f54e955e71666a8d549132f09334508']
    }
  }
}