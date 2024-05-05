"use client";

import { useParams } from "next/navigation";
import SearchBar from "@/app/components/nav/seachBar";
import { useReadContract } from "wagmi";
import { abiData } from "@/app/abis/abi";
import { PiSpinner } from "react-icons/pi";

export default function Detento({}) {
  const params = useParams<{ detento: string }>();
  console.log(params.detento);
  const {
    data: prisioneiro,
    error,
    isPending,
  } = useReadContract({
    abi: abiData,
    address: "0xE6480Bd963438fc845eFaA7497e8Fc0C5ab93516",
    functionName: "getPrisonerInfo",
    chainId: 534351,
    args: [BigInt(params.detento)],
  });

  if (isPending)
    return (
      <div className="mt-10 w-full flex justify-center items-center">
        <PiSpinner className="text-2xl text-[#9006a7] animate-spin" />
      </div>
    );

  if (
    !prisioneiro ||
    error ||
    (prisioneiro as any)?.id != BigInt(params.detento)
  ) {
    return (
      <div className="mt-10 w-full flex justify-center items-center">
        <h1 className="text-lg text-[#9006a7] font-semibold text-pretty">
          Este Detento não existe!
        </h1>
      </div>
    );
  }

  const howLongUntilRelease = () => {
    const initialDate = new Date(Number((prisioneiro as any)?.prisonDate) || 0);
    const finalDate = new Date(Number((prisioneiro as any)?.releaseDate) || 0);
    const difference = finalDate.getTime() - initialDate.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    // return only the years if it's more than 1 year, only the months if it's more than 1 month, and only the days if it's less than 1 month
    if (years > 0) {
      return [`${years} ${years === 1 ? "ano" : "anos"}`, false];
    }
    if (months > 0) {
      return [`${months} ${months === 1 ? "mês" : "meses"}`, false];
    }
    return [`${days} ${days === 1 ? "dia" : "dias"}`, days <= 0];
  };

  return (
    <>
      <SearchBar />

      <section className="mt-5 pb-5 mb-5 flex flex-col w-full rounded-lg overflow-hidden drop-shadow-lg bg-white">
        <div
          id="userCard"
          className="w-full flex items-center justify-between px-5 rounded-b-lg drop-shadow-md py-5 bg-[#b446c6]"
        >
          <div>
            <h1 className=" font-medium text-white">
              Detento {params.detento}
            </h1>
            <h3 className={`text-sm text-gray-100`}>
              {"0xb7D3F862ebBed6C5E61B76e407ce28ea16aD1289".slice(0, 16)}...
            </h3>
          </div>
          <div
            className={`flex flex-col  font-medium  px-4  py-1.5 rounded-md text-center leading-tight text-[#9006a7] ${
              howLongUntilRelease()[1] ? "bg-[#fff]" : "bg-[#f8cbff]"
            }`}
          >
            <h4>{howLongUntilRelease()[1] ? "Liberado há:" : "Saída em:"}</h4>
            <h3>{howLongUntilRelease()[0]}</h3>
          </div>
        </div>
        <div className="px-4 py-5 flex flex-col gap-y-3">
          <div className="bg-[#9a35aa] rounded-lg flex items-center justify-between px-4 py-4">
            <h2 className="text-white">Identificador do detento:</h2>
            <h3 className="text-white bg-[#b246c4] px-3 py-0.5 rounded-md">
              {(prisioneiro as any)?.id.toString()}
            </h3>
          </div>
          <div className="bg-[#9a35aa] rounded-lg flex items-center justify-between px-4 py-4">
            <h2 className="text-white">Penitenciária:</h2>
            <h3 className="text-white bg-[#b246c4] px-3 py-0.5 rounded-md">
              {"0xb7D3F862ebBed6C5E61B76e407ce28ea16aD1289".slice(0, 16)}...
            </h3>
          </div>
          <div className="bg-[#9a35aa] rounded-lg flex items-center justify-between px-4 py-4">
            <h2 className="text-white">Data de Prisão:</h2>
            <h3 className="text-white bg-[#b246c4] px-3 py-0.5 rounded-md">
              {new Date(
                Number((prisioneiro as any)?.prisonDate)
              ).toLocaleDateString()}
            </h3>
          </div>
          <div className="bg-[#9a35aa] rounded-lg flex items-center justify-between px-4 py-4">
            <h2 className="text-white">Tempo Restante:</h2>
            <h3 className="text-white bg-[#b246c4] px-3 py-0.5 rounded-md">
              {howLongUntilRelease()[0]}
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 gap-x-5 ">
          <div className="w-full bg-[#9a35aa] rounded-lg flex items-center justify-center flex-col gap-y-2 px-4 py-4">
            <h2 className="text-white text-center">Livros Lidos:</h2>
            <h3 className="text-white bg-[#b246c4] text-center px-3 py-0.5 rounded-md">
              20
            </h3>
          </div>
          <div className="w-full bg-[#9a35aa] rounded-lg flex items-center justify-center flex-col gap-y-2 px-4 py-4">
            <h2 className="text-white text-center">Tempo Estudado:</h2>
            <h3 className="text-white bg-[#b246c4] text-center px-3 py-0.5 rounded-md">
              89 horas
            </h3>
          </div>
          <div className="w-full bg-[#9a35aa] rounded-lg flex items-center justify-center flex-col gap-y-2 px-4 py-4">
            <h2 className="text-white text-center">Tempo Trabalhado:</h2>
            <h3 className="text-white bg-[#b246c4] text-center px-3 py-0.5 rounded-md">
              357 horas
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 gap-x-5 mt-5 ">
          <section className="w-full bg-[#9a35aa] rounded-lg flex p-4 flex-col gap-y-3">
            <h4 className="text-white font-medium">Histórico</h4>

            <div className="p-3 rounded-md bg-[#ca61db]">
              <button className="rounded-md bg-[#b246c4] text-white px-3 py-2 w-full uppercase ">
                Baixar Histórico Completo
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
