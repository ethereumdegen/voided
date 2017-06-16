function initBlockchainWallet()
{
  if(typeof web3.eth == 'undefined')
  {
    alert('Please install a web3 wallet such as Parity or Metamask to play voided.')
    console.error('web3 eth not found!');
  }else{

    console.log('found eth wallet')
    var coinbase = web3.eth.coinbase;
      console.log(coinbase);
  //  var balance = web3.eth.getBalance(coinbase);
      return web3.eth;
  }


  return null;
}
