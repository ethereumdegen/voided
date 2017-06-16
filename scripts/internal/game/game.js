
requirejs([
  "vendor/web3.min",
  "vendor/socket.io.min",
  "internal/game/blockchain",
  "internal/game/client-socket"
], function(_web,_socket,_blockchain,_clientSocket) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    console.log('starting game logic')


    var blockchainWalletData = initBlockchainWallet()

    if(blockchainWalletData!= null)
    {
      initClientSocketConnection();
    }



});
