export const CONTRACT_ADDRESS = "0x52f1f9db17fd3Cc933C9eaEb5451F42B6c99033f";
export const BSC_TESTNET_CHAIN_ID = 97;
export const BSC_EXPLORER = "https://testnet.bscscan.com";

export const AAS_ABI = [
  { name: "balanceOf",       type: "function", stateMutability: "view",        inputs: [{ name: "owner",   type: "address"   }], outputs: [{ name: "balance", type: "uint256" }] },
  { name: "ownerOf",         type: "function", stateMutability: "view",        inputs: [{ name: "tokenId", type: "uint256"   }], outputs: [{ name: "owner",   type: "address" }] },
  { name: "_tokenIdCounter", type: "function", stateMutability: "view",        inputs: [],                                       outputs: [{ name: "",        type: "uint256" }] },
  { name: "invest",          type: "function", stateMutability: "payable",     inputs: [{ name: "projectId", type: "uint256" }, { name: "shares", type: "uint256" }], outputs: [] },
  { name: "multiTransfer",   type: "function", stateMutability: "nonpayable",  inputs: [{ name: "to", type: "address" }, { name: "tokenIds", type: "uint256[]" }], outputs: [] },
  { name: "mint",            type: "function", stateMutability: "nonpayable",  inputs: [{ name: "owners", type: "address[]" }, { name: "amounts", type: "uint256[]" }, { name: "name", type: "string" }, { name: "description", type: "string" }], outputs: [] },
];
