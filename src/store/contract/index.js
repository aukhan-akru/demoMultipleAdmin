const { web3 } = require("../web3")

const STData = require(`./${process["env"]["REACT_APP_SERVER"]}/ST`)
const STOData = require(`./${process["env"]["REACT_APP_SERVER"]}/STO`)
const TkusdData = require(`./${process["env"]["REACT_APP_SERVER"]}/TKUSD`)
const ExchangeData = require(`./${process["env"]["REACT_APP_SERVER"]}/UniversalExchange`)
const WhitelistData = require(`./${process["env"]["REACT_APP_SERVER"]}/Whitelist`)
const aggregatorV3InterfaceABI = require(`./${process["env"]["REACT_APP_SERVER"]}/aggregatorV3InterfaceABI`)
const StableCoinData = require(`./${process["env"]["REACT_APP_SERVER"]}/StableCoin`)
const CapitalCallData = require(`./${process['env']['REACT_APP_SERVER']}/CapitalCall`)

let {
  REACT_APP_NETWORK: network,
  REACT_APP_NETWORK: networkId,
  REACT_APP_OWNER_ADDRESS: Owner,
} = process["env"]
const STABI = STData["ABI"]
const ST = new web3.eth.Contract(STABI)

const STOABI = STOData["ABI"]
const STO = new web3.eth.Contract(STOABI)

const ExchangeABI = ExchangeData["ABI"]
const Exchange = new web3.eth.Contract(ExchangeABI)
const TKUSDABI = TkusdData["ABI"]
const TKUSDAddress = TkusdData[network]["Address"]
const TKUSD = new web3.eth.Contract(TKUSDABI, TKUSDAddress)

const WhitelistABI = WhitelistData["ABI"]
const WhitelistAddress = WhitelistData[network]["Address"]
const Whitelist = new web3.eth.Contract(WhitelistABI, WhitelistAddress)

const CapitalCallABI = CapitalCallData['ABI'];
const CapitalCallAddress = CapitalCallData[network]['Address'];
const capitalCall = new web3.eth.Contract(CapitalCallABI, CapitalCallAddress);


const TKInfo = TkusdData["info"]
const TKByteCode = TkusdData["ByteCode"]

const aggregatorABI = aggregatorV3InterfaceABI["ABI"]

const StableCoinABI = StableCoinData["ABI"]

module.exports = {
  STOData,
  STData,
  ExchangeData,
  networkId,
  network,
  Owner,
  STO,
  STABI,
  ST,
  Exchange,
  ExchangeABI,
  Whitelist,
  WhitelistAddress,
  WhitelistABI,
  TKInfo,
  TKUSD,
  TKUSDABI,
  TKUSDAddress,
  TKByteCode,
  aggregatorABI,
  StableCoinABI,
  CapitalCallABI,
  CapitalCallAddress,
  capitalCall
}
