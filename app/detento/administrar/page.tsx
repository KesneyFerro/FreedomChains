"use client";

import CustomNavMenu from "@/app/components/menu/CustomNavMenu";
import { useState } from "react";

export default function AdministrarDetentos() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <CustomNavMenu
        menuNames={["Add Detento", "Add Comportamento"]}
        selectIndex={selectedMenu}
        setSelectedIndex={setSelectedMenu}
      />
    </div>
  );
}
