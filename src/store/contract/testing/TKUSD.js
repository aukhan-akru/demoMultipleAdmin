module.exports = {
  info: {
    symbol: "TKUSD",
    name: "Tokenism",
    logo: `https://akru.co/favicon.png`,
  },
  rinkeby: {
    NetwordId: 4,
    Network: "Rinkeby",
    Address: "0x159788E8Ca4Aa69E925BaA324769fe5488Ba503E",
  },
  kovan: {
    NetwordId: 42,
    Network: "Kovan",
    Address: "0x671C9640dB31880Cc0659D55Eea9a04492e6a1c6",
  },
  Owner: process["env"]["REACT_APP_OWNER_ADDRESS"],
  privateKey: process["env"]["REACT_APP_PRIVATE_KEY"],
  ABI: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "spender",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "from",
          type: "address",
        },
        {
          name: "to",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "spender",
          type: "address",
        },
        {
          name: "addedValue",
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        {
          name: "success",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "unpause",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "account",
          type: "address",
        },
      ],
      name: "isPauser",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "paused",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renouncePauser",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "account",
          type: "address",
        },
      ],
      name: "addPauser",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "pause",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "whitelist",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "account",
          type: "address",
        },
      ],
      name: "addMinter",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renounceMinter",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "spender",
          type: "address",
        },
        {
          name: "subtractedValue",
          type: "uint256",
        },
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          name: "success",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "account",
          type: "address",
        },
      ],
      name: "isMinter",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "msgSender",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "owner",
          type: "address",
        },
        {
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "_name",
          type: "string",
        },
        {
          name: "_symbol",
          type: "string",
        },
        {
          name: "_decimals",
          type: "uint8",
        },
        {
          name: "_whitelist",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "account",
          type: "address",
        },
      ],
      name: "MinterAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "account",
          type: "address",
        },
      ],
      name: "MinterRemoved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "account",
          type: "address",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "account",
          type: "address",
        },
      ],
      name: "Unpaused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "account",
          type: "address",
        },
      ],
      name: "PauserAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "account",
          type: "address",
        },
      ],
      name: "PauserRemoved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_account",
          type: "address",
        },
        {
          name: "_amount",
          type: "uint256",
        },
        {
          name: "_data",
          type: "bytes",
        },
      ],
      name: "transferWithData",
      outputs: [
        {
          name: "success",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_account",
          type: "address",
        },
        {
          name: "_amount",
          type: "uint256",
        },
        {
          name: "_investor",
          type: "address",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "success",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "to",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_account",
          type: "address",
        },
        {
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "burnFrom",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_account",
          type: "address",
        },
        {
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "mint",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_whitelist",
          type: "address",
        },
      ],
      name: "changeWhitelist",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_investor",
          type: "address",
        },
        {
          name: "_from",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferDividends",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getInvestorAddress",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "transferedCalled",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
  ByteCode:
    "0x60806040523480156200001157600080fd5b5060405162001cf838038062001cf8833981810160405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b50506020820151604090920151909350909150838383620000f5336001600160e01b03620001a316565b6004805460ff1916905562000113336001600160e01b03620001f516565b825162000128906006906020860190620002db565b5081516200013e906007906020850190620002db565b506008805460ff191660ff929092169190911790555062000160905062000247565b60088054610100600160a81b0319166101006001600160a01b0393841602179055600980546001600160a01b03191692909116919091179055506200037d915050565b620001be8160036200024c60201b6200189b1790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b620002108160056200024c60201b6200189b1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b335b90565b6001600160a01b0381166200026057600080fd5b6200027582826001600160e01b03620002a516565b156200028057600080fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620002bb57600080fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200031e57805160ff19168380011785556200034e565b828001600101855582156200034e579182015b828111156200034e57825182559160200191906001019062000331565b506200035c92915062000360565b5090565b6200024991905b808211156200035c576000815560010162000367565b61196b806200038d6000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806379cc67901161011a578063a457c2d7116100ad578063d737d0c71161007c578063d737d0c71461065f578063dbba0f0114610667578063dd62ed3e1461069d578063f1e588c8146106cb578063f2fde38b146106d3576101fb565b8063a457c2d7146105d9578063a9059cbb14610605578063aa271e1a14610631578063c92dba3314610657576101fb565b806393e59dc1116100e957806393e59dc11461059b57806395d89b41146105a3578063983b2d56146105ab57806398650275146105d1576101fb565b806379cc67901461051d57806382dc1ec4146105495780638456cb591461056f5780638da5cb5b14610577576101fb565b80633f4ba83a11610192578063597622201161016157806359762220146104b15780635c975abb146104e75780636ef8d66d146104ef57806370a08231146104f7576101fb565b80633f4ba83a1461043857806340c10f191461044257806342966c681461046e57806346fbf68e1461048b576101fb565b806323b872dd116101ce57806323b872dd146102fd5780632535f76214610333578063313ce567146103ee578063395093511461040c576101fb565b806306fdde031461020057806308d0a7cf1461027d578063095ea7b3146102b757806318160ddd146102e3575b600080fd5b6102086106f9565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024257818101518382015260200161022a565b50505050905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102a36004803603602081101561029357600080fd5b50356001600160a01b031661078f565b604080519115158252519081900360200190f35b6102a3600480360360408110156102cd57600080fd5b506001600160a01b038135169060200135610823565b6102eb610847565b60408051918252519081900360200190f35b6102a36004803603606081101561031357600080fd5b506001600160a01b0381358116916020810135909116906040013561084d565b6102a36004803603606081101561034957600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561037957600080fd5b82018360208201111561038b57600080fd5b803590602001918460018302840111640100000000831117156103ad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610873945050505050565b6103f6610a5d565b6040805160ff9092168252519081900360200190f35b6102a36004803603604081101561042257600080fd5b506001600160a01b038135169060200135610a66565b610440610a83565b005b6102a36004803603604081101561045857600080fd5b506001600160a01b038135169060200135610ae3565b6104406004803603602081101561048457600080fd5b5035610c25565b6102a3600480360360208110156104a157600080fd5b50356001600160a01b0316610ca5565b610440600480360360608110156104c757600080fd5b506001600160a01b03813581169160208101359091169060400135610cbe565b6102a3610cd2565b610440610cdb565b6102eb6004803603602081101561050d57600080fd5b50356001600160a01b0316610ce6565b6104406004803603604081101561053357600080fd5b506001600160a01b038135169060200135610d01565b6104406004803603602081101561055f57600080fd5b50356001600160a01b0316610d7b565b610440610d96565b61057f610dfa565b604080516001600160a01b039092168252519081900360200190f35b61057f610e0e565b610208610e1d565b610440600480360360208110156105c157600080fd5b50356001600160a01b0316610e7e565b610440610e99565b6102a3600480360360408110156105ef57600080fd5b506001600160a01b038135169060200135610ea2565b6102a36004803603604081101561061b57600080fd5b506001600160a01b038135169060200135610ebf565b6102a36004803603602081101561064757600080fd5b50356001600160a01b0316610edc565b61057f610eef565b61057f610efe565b6102a36004803603606081101561067d57600080fd5b506001600160a01b03813581169160208101359160409091013516610f0d565b6102eb600480360360408110156106b357600080fd5b506001600160a01b038135811691602001351661111e565b61057f611149565b6102a3600480360360208110156106e957600080fd5b50356001600160a01b031661114e565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107855780601f1061075a57610100808354040283529160200191610785565b820191906000526020600020905b81548152906001019060200180831161076857829003601f168201915b5050505050905090565b60085460009061010090046001600160a01b03166107ab6111e7565b6001600160a01b0316146107fe576040805162461bcd60e51b815260206004820152601560248201527413db9b1e481bdddb995c881a5cc8185b1b1bddd959605a1b604482015290519081900360640190fd5b50600980546001600160a01b0383166001600160a01b03199091161790556001919050565b60045460009060ff161561083657600080fd5b61084083836111eb565b9392505050565b60025490565b60045460009060ff161561086057600080fd5b61086b848484611255565b949350505050565b60095460408051636c46138f60e11b81526001600160a01b03868116600483015291516000938493169163d88c271e916024808301926020929190829003018186803b1580156108c257600080fd5b505afa1580156108d6573d6000803e3d6000fd5b505050506040513d60208110156108ec57600080fd5b5051905060c98111156109305760405162461bcd60e51b815260040180806020018281038252602f8152602001806118e8602f913960400191505060405180910390fd5b6109398561130c565b15610a40578461095161094a6111e7565b8787611312565b806001600160a01b031663c0ee0b8a6109686111e7565b87876040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156109d45781810151838201526020016109bc565b50505050905090810190601f168015610a015780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610a2257600080fd5b505af1158015610a36573d6000803e3d6000fd5b5050505050610a52565b610a52610a4b6111e7565b8686611312565b506001949350505050565b60085460ff1690565b60045460009060ff1615610a7957600080fd5b61084083836113dd565b610a8c33610ca5565b610a9557600080fd5b60045460ff16610aa457600080fd5b6004805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b60085460009061010090046001600160a01b0316610aff6111e7565b6001600160a01b031614610b52576040805162461bcd60e51b815260206004820152601560248201527413db9b1e481bdddb995c881a5cc8185b1b1bddd959605a1b604482015290519081900360640190fd5b60095460408051636c46138f60e11b81526001600160a01b0386811660048301529151600093929092169163d88c271e91602480820192602092909190829003018186803b158015610ba357600080fd5b505afa158015610bb7573d6000803e3d6000fd5b505050506040513d6020811015610bcd57600080fd5b5051905060c9811115610c115760405162461bcd60e51b815260040180806020018281038252602f8152602001806118e8602f913960400191505060405180910390fd5b610c1b8484611479565b5060019392505050565b60085461010090046001600160a01b0316610c3e6111e7565b6001600160a01b031614610c91576040805162461bcd60e51b815260206004820152601560248201527413db9b1e481bdddb995c881a5cc8185b1b1bddd959605a1b604482015290519081900360640190fd5b610ca2610c9c6111e7565b82611521565b50565b6000610cb860038363ffffffff6115c816565b92915050565b6001610ccb838584611255565b5050505050565b60045460ff1690565b610ce4336115fd565b565b6001600160a01b031660009081526020819052604090205490565b60085461010090046001600160a01b0316610d1a6111e7565b6001600160a01b031614610d6d576040805162461bcd60e51b815260206004820152601560248201527413db9b1e481bdddb995c881a5cc8185b1b1bddd959605a1b604482015290519081900360640190fd5b610d778282611645565b5050565b610d8433610ca5565b610d8d57600080fd5b610ca2816116f5565b610d9f33610ca5565b610da857600080fd5b60045460ff1615610db857600080fd5b6004805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b60085461010090046001600160a01b031681565b6009546001600160a01b031681565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107855780601f1061075a57610100808354040283529160200191610785565b610e8733610edc565b610e9057600080fd5b610ca28161173d565b610ce433611785565b60045460009060ff1615610eb557600080fd5b61084083836117cd565b60045460009060ff1615610ed257600080fd5b6108408383611816565b6000610cb860058363ffffffff6115c816565b600b546001600160a01b031690565b600b546001600160a01b031681565b600b80546001600160a01b0319166001600160a01b038381169190911790915560095460408051636c46138f60e11b8152868416600482015290516000938493169163d88c271e916024808301926020929190829003018186803b158015610f7457600080fd5b505afa158015610f88573d6000803e3d6000fd5b505050506040513d6020811015610f9e57600080fd5b5051905060c9811115610fe25760405162461bcd60e51b815260040180806020018281038252602f8152602001806118e8602f913960400191505060405180910390fd5b6040805180820190915260048152600060208201526110008661130c565b1561110757856110186110116111e7565b8888611312565b806001600160a01b031663c0ee0b8a61102f6111e7565b88856040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561109b578181015183820152602001611083565b50505050905090810190601f1680156110c85780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156110e957600080fd5b505af11580156110fd573d6000803e3d6000fd5b5050505050611112565b61111261094a6111e7565b50600195945050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600090565b60085460009061010090046001600160a01b031661116a6111e7565b6001600160a01b0316146111bd576040805162461bcd60e51b815260206004820152601560248201527413db9b1e481bdddb995c881a5cc8185b1b1bddd959605a1b604482015290519081900360640190fd5b50600880546001600160a01b03831661010002610100600160a81b03199091161790556001919050565b3390565b60006001600160a01b03831661120057600080fd5b3360008181526001602090815260408083206001600160a01b0388168085529083529281902086905580518681529051929392600080516020611917833981519152929181900390910190a350600192915050565b6001600160a01b0383166000908152600160209081526040808320338452909152812054611289908363ffffffff61182c16565b6001600160a01b03851660009081526001602090815260408083203384529091529020556112b8848484611312565b6001600160a01b038416600081815260016020908152604080832033808552908352928190205481519081529051929392600080516020611917833981519152929181900390910190a35060019392505050565b3b151590565b6001600160a01b03821661132557600080fd5b6001600160a01b03831660009081526020819052604090205461134e908263ffffffff61182c16565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611383908263ffffffff61184116565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60006001600160a01b0383166113f257600080fd5b3360009081526001602090815260408083206001600160a01b0387168452909152902054611426908363ffffffff61184116565b3360008181526001602090815260408083206001600160a01b038916808552908352928190208590558051948552519193600080516020611917833981519152929081900390910190a350600192915050565b6001600160a01b03821661148c57600080fd5b60025461149f908263ffffffff61184116565b6002556001600160a01b0382166000908152602081905260409020546114cb908263ffffffff61184116565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b03821661153457600080fd5b600254611547908263ffffffff61182c16565b6002556001600160a01b038216600090815260208190526040902054611573908263ffffffff61182c16565b6001600160a01b038316600081815260208181526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b60006001600160a01b0382166115dd57600080fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61160e60038263ffffffff61185316565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b6001600160a01b0382166000908152600160209081526040808320338452909152902054611679908263ffffffff61182c16565b6001600160a01b03831660009081526001602090815260408083203384529091529020556116a78282611521565b6001600160a01b038216600081815260016020908152604080832033808552908352928190205481519081529051929392600080516020611917833981519152929181900390910190a35050565b61170660038263ffffffff61189b16565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b61174e60058263ffffffff61189b16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b61179660058263ffffffff61185316565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b60006001600160a01b0383166117e257600080fd5b3360009081526001602090815260408083206001600160a01b0387168452909152902054611426908363ffffffff61182c16565b6000611823338484611312565b50600192915050565b60008282111561183b57600080fd5b50900390565b60008282018381101561084057600080fd5b6001600160a01b03811661186657600080fd5b61187082826115c8565b61187957600080fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b0381166118ae57600080fd5b6118b882826115c8565b156118c257600080fd5b6001600160a01b0316600090815260209190915260409020805460ff1916600117905556fe537461626c65436f696e3a2043616e6e6f742073656e6420746f6b656e73206f75747369646520546f6b656e69736d8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a265627a7a7230582002a642954a17654f1de520c2341877c1dbb8af14c461d77db0a0209248e6433f64736f6c634300050a0032",
}