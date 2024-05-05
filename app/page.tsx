"use client";

import { useEffect, useState } from "react";
import Profile from "./components/profile/profile";
import { WalletOptions } from "./components/profile/wallet-option";
import { Account } from "./components/profile/account";
import { BaseError, useAccount, useReadContract } from "wagmi";
import { abiData } from "./abis/abi";
import { parseUnits } from "viem";
import Navbar from "./components/nav/nav";
import SearchBar from "./components/nav/seachBar";
import CustomNavMenu from "./components/menu/CustomNavMenu";
import UserCard from "./components/users/userCard";
import { PiSpinner } from "react-icons/pi";

export default function Home() {
  const {
    data: idsPrisioneiro,
    error,
    isPending,
  } = useReadContract({
    abi: abiData,
    address: "0xE6480Bd963438fc845eFaA7497e8Fc0C5ab93516",
    functionName: "getAllPrisonerIDs",
    chainId: 534351,
    args: [],
  });
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <main className="flex w-full flex-col ">
      <SearchBar />
      <CustomNavMenu
        menuNames={["Todos", "Próximo", "Liberados"]}
        selectIndex={selectedMenu}
        setSelectedIndex={setSelectedMenu}
      />
      {isPending && (
        <div className="mt-10 w-full flex justify-center items-center">
          <PiSpinner className="text-2xl text-[#9006a7] animate-spin" />
        </div>
      )}
      <section className="w-full flex flex-col gap-y-4 mt-5">
        {(idsPrisioneiro as BigInt[])?.map((id) => {
          return (
            <UserCard
              key={id.toString()}
              prisonerId={id}
              selectedMenu={selectedMenu}
            />
          );
        })}
      </section>
    </main>
  );
}
