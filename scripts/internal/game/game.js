
requirejs(["vendor/web3.min","vendor/socket.io.min"], function(web3,socket) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    console.log('starting game logic')

    if(typeof web3.eth == 'undefined')
    {
      alert('Please install a web3 wallet such as Parity or Metamask to play voided.')
      console.error('web3 eth not found!');
    }else{
      console.log(web3);

      var coinbase = web3.eth.coinbase;
      var balance = web3.eth.getBalance(coinbase);

    }

});
