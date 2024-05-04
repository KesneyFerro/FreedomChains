"use client";

import { useState } from "react";
import Profile from "./components/profile/profile";
import { WalletOptions } from "./components/profile/wallet-option";
import { Account } from "./components/profile/account";
import { BaseError, useAccount, useReadContract } from "wagmi";
import { abi } from "./abis/abi";
import { parseUnits } from "viem";

export default function Home() {
  const [dados, setDados] = useState<any>(null);
  const { isConnected } = useAccount();

  const {
    data: dadosPrisoneiro,
    error,
    isPending,
  } = useReadContract({
    abi: [
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
    ],
    address: "0xdF0e1E6101ec169Bd9d7D30ADFfB9a28cE6E2B41",
    functionName: "getPrisonerInfo",
    chainId: 534351,
    args: [1234n],
  });

  console.log(dadosPrisoneiro ? dadosPrisoneiro : "No result");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-5 ">
      <div className="w-full max-w-[800px] flex items-center justify-between">
        <h1 className="text-2xl font-medium">Teste Web3</h1>
        {isConnected ? <Account /> : <WalletOptions />}
      </div>
      <h4>
        {isPending
          ? "Carregando..."
          : error
          ? "Erro ao carregar"
          : "Dados do Prisioneiro"}
      </h4>

      {error && (
        <div>
          Error: {(error as unknown as BaseError).shortMessage || error.message}
        </div>
      )}
      <h3>{dadosPrisoneiro?.toString()}</h3>
    </main>
  );
}
