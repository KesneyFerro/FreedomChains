/* eslint-disable import/no-anonymous-default-export */
export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "prisonerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "behavior",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "comment",
        type: "string",
      },
    ],
    name: "BehaviorRecordAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "prisonerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prisonDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "releaseDate",
        type: "uint256",
      },
    ],
    name: "PrisonerInfoRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_behavior",
        type: "string",
      },
      {
        internalType: "string",
        name: "_comment",
        type: "string",
      },
    ],
    name: "addBehaviorRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "behaviorRecords",
    outputs: [
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "behavior",
        type: "string",
      },
      {
        internalType: "string",
        name: "comment",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getBehaviorRecords",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "behavior",
            type: "string",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
        ],
        internalType: "struct PrisonerManagementSystem.BehaviorRecord[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPrisonerInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "prisonDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "releaseDate",
            type: "uint256",
          },
        ],
        internalType: "struct PrisonerManagementSystem.PrisonerInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "prisonerInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prisonDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseDate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prisonDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_releaseDate",
        type: "uint256",
      },
    ],
    name: "registerPrisonerInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
