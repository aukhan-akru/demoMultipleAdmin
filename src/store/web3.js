import Web3 from "web3"
let admin1 = "0x0809d3f9a78c7f81e7656b45d311b326a931bd51de607d3aff8eab5e9940cf48" //4d1
let admin2 = "0xca8e6ad08225592cc874008d893e2ced970cca8976acf073cca870c03f00e38e" //c99
let admin3 = "0x9809a34834a64865a2f76c49a4fd362d9610ce19056e908264bbf6475ac00b18" //3E4


let web3 = new Web3(`https://proxy.akru.co/https://api.avax-test.network/ext/bc/C/rpc`)
let web4 = new Web3(`https://proxy.akru.co/https://api.avax-test.network/ext/bc/C/rpc`)
let web5 = new Web3(`https://proxy.akru.co/https://api.avax-test.network/ext/bc/C/rpc`)

  var newAccount = web3.eth.accounts.privateKeyToAccount(admin1)
  var newAccount1 = web4.eth.accounts.privateKeyToAccount(admin2)
  var newAccount2 = web5.eth.accounts.privateKeyToAccount(admin3)

  web3.eth.accounts.wallet.add(newAccount)
  web3.eth.defaultAccount = newAccount.address
  web4.eth.accounts.wallet.add(newAccount1)
  web4.eth.defaultAccount = newAccount1.address
  web5.eth.accounts.wallet.add(newAccount2)
  web5.eth.defaultAccount = newAccount2.address
  let accounts = [
    "0x6A393b6e432c068664bc5C2341309d1FEfF244D1",
    "0xaE0443175518b16f927eEEfcDAfE0C02D23b2C99",
    "0x154ab77D6560A12955376cb66cF3fceeC7F973E4",
  ];

export { web3, web4, web5,accounts}