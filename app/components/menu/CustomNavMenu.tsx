export default function CustomNavMenu({
  menuNames,
  selectIndex,
  setSelectedIndex,
}: {
  menuNames: string[];
  selectIndex: number;
  setSelectedIndex: (index: number) => void;
}) {
  return (
    <div className="mt-5 w-full flex flex-col shadow-lg overflow-hidden border-4 bg-[#f7f6f7]  border-white rounded-xl">
      <div className="z-[2] w-full flex gap-x-5 drop-shadow-md justify-between items-center rounded-t-lg  rounded-b-lg bg-white px-6 py-5">
        <div className="flex  flex-col">
          <h3 className="font-semibold text-black">8943</h3>
          <span className="text-gray-500">Detentos Registrados</span>
        </div>
        <div className="flex  flex-col">
          <h3 className="font-semibold text-black">349</h3>
          <span className="text-gray-500">Próximos Liberados</span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-black">2</h3>
          <span className="text-gray-500">Detentos Liberados</span>
        </div>
      </div>
      <div className="z-[1] bg-[#f7f6f7] px-2 gap-x-5 py-2 rounded-b-xl flex w-full justify-between">
        {menuNames.map((name, index) => (
          <button
            onClick={() => setSelectedIndex(index)}
            key={index}
            className={`flex w-full justify-center items-center gap-x-4 px-4 py-3 rounded-lg cursor-pointer hover:bg-white transition-colors ${
              selectIndex === index ? "bg-white drop-shadow-md" : ""
            }`}
          >
            <span
              className={`${
                selectIndex === index
                  ? "text-[#7d2b8a] font-semibold"
                  : "text-gray-500 font-medium"
              } `}
            >
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
