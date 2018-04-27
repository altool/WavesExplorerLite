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
            url: 'https://ninjastar.ninjaturtle.co.za',
            maintainer: 'https://twitter.com/gordobsa'
        },{
            url: 'https://turtlenode.dsalab.de',
            maintainer: 'Hawky'
        },{
            url: 'https://maplenode.net',
            maintainer: 'MapleNode'
        }
        ],
        gatewayTN: {
            url: 'https://gateway.blackturtle.eu',
            title: 'Gateway TurtleNode-TurtleNetwork'
        },
        gatewayLTC: {
            url: 'https://litecoingw.blackturtle.eu',
            title: 'Gateway LTC-tLTC'
        },
        website: {
            url: 'https://waves.blackturtle.eu',
            title: 'TurtleNode website'
        },
        wallet: {
            url: 'https://turtlenetwork.blackturtle.eu/',
            title: 'Wallet'
        },
        nodeCheck:{
            url: ' https://turtlenode.dsalab.de/nodechecker/',
            title: 'Node checker'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'mainnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'L',
        INITIAL_NONCE: 0
    });
})();
