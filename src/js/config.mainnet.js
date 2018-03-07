(function() {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://privatenode.blackturtle.eu',
        blockchainName: 'Mainnet',
        title: 'TurtleNode Private Network',
        nodes: [{
            url: 'https://privatenode.blackturtle.eu',
            maintainer: 'Waves'
        }],
        peerExplorer: {
            url: 'https://privatenode.blackturtle.eu',
            title: 'Public private network node'
        },
        wallet: {
            url: 'https://privatenetwork.blackturtle.eu/',
            title: 'Wallet'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'mainnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'W',
        INITIAL_NONCE: 0
    });
})();
