import React, { useEffect, useState } from "react";
import { web3, web4, web5,accounts } from "../src/store/web3";
function App() {
  let [getAccounts, setAccounst] = useState([]);
  let [count, setCount] = useState(0);
  useEffect(() => {
    (async () => {
      setAccounst(accounts);
    })();
  }, []);

  let sendTx = async (accounts, index) => {
    
    let nonce = await web3.eth.getTransactionCount(accounts[0], "latest");
    let noncePending = await web3.eth.getTransactionCount(
      accounts[0],
      "pending"
    );
    console.log("nonce: ", nonce);
    console.log("noncePending: ", noncePending);

    if (noncePending > nonce) {
      setCount(count+1)
      if (count == 3) {
        alert("Blockchain seems to be pretty slow please try again later")
      } else {
        console.log(`${accounts[index]} is busy performing a transaction.`);
        await sendTx(accounts, index == accounts.length - 1 ? 0 : index + 1); // either less than admins.length
      }
    } else {
      console.log("selected", accounts[index]);
      if (accounts[index] == getAccounts[0]) {
        web3 = web3;
      } else if (accounts[index] == getAccounts[1]) {
        web3 = web4;
      } else if (accounts[index] == getAccounts[2]) {
        web3 = web5;
      }
      await performTranstaction(accounts[index],web3)
    }
  };
  let performTranstaction = async (address,web3) => {
    try{
    let oneDollarETH = 0.000025;
    const { REACT_APP_CHAIN_ID } = process["env"];
    let toAddress = document.getElementById("input-address").value;
    let nonce = await web3.eth.getTransactionCount(address);
    web3.eth
      .sendTransaction({
        to: toAddress,
        from: address,
        nonce,
        gas: 21000,
        value: web3.utils.toWei(oneDollarETH.toString(), "ether"),
        chainId: REACT_APP_CHAIN_ID,
      })

      .on("transactionHash", async (hash) => {
        console.log(`TransferHash = ${hash}`);
      })
      .on("receipt", async (receipt) => {
        console.log("receipt", receipt);
      })
      .on("error", async(error) => {
        if(error.message.includes("nonce too low")){
          console.log("on error nonce to low:",error);
          await sendTx(getAccounts, 0);

        }
      });
    }catch(error){
      console.log("catch Error=====",error)
    }
  };
  let sendBlockChainTx = async()=>{
    await sendTx(getAccounts,0)
  }
  return (
    <div className="App">
      <input id="input-address" />
      <button onClick={sendBlockChainTx}>Click Me</button>
    </div>
  );
}

export default App;
