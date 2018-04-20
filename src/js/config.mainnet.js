(function() {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://privatenode.blackturtle.eu',
        blockchainName: 'TurtleNetwork',
        title: 'TurtleNetwork',
        nodes: [{
            url: 'https://privatenode.blackturtle.eu',
            maintainer: 'https://t.me/blackturtlenode'
        },{
            url: 'https://privatenode2.blackturtle.eu',
            maintainer: 'https://t.me/blackturtlenode'
        },{
            url: 'http://173.212.247.37:8000',
            maintainer: 'https://t.me/wavestipping'
        }],
        peerExplorer: {
            url: 'https://gateway.blackturtle.eu',
            title: 'Gateway'
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
        NETWORK_CODE: 'L',
        INITIAL_NONCE: 0
    });
})();
