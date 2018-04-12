(function() {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://privatenode.blackturtle.eu',
        blockchainName: 'TurtleNode Private Network',
        title: 'TurtleNode Private Network',
        nodes: [{
            url: 'https://privatenode.blackturtle.eu',
            maintainer: 'BlackTurtle'
        }],
        peerExplorer: {
            url: 'https://privatenode.blackturtle.eu',
            title: 'Public Node'
        },
        website: {
            url: 'https://waves.blackturtle.eu',
            title: 'TurtleNode website'
        },
        wallet: {
            url: 'https://privatenetwork.blackturtle.eu/',
            title: 'Wallet'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'mainnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'U',
        INITIAL_NONCE: 0
    });
})();
