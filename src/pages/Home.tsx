import { useEffect, useState } from "react";
import { ChargerDataInfo } from "../components/ChargerDataInfo";
import { ChargerCard } from "../components/ChargerCard";
import { useChargerData } from "../hooks/useChargerData";
import {
    ECG7Y3AX,
    ECNLHCXD,
    ECHWB4YP,
    ECRSW7ME,
    yearlyECG,
    yearlyECN,
    yearlyECH,
    yearlyECR,
    chargers
} from "../data/chargers.js";

export const HomePage = () => {
    const [selected, setSelected] = useState("");
    const { setData, setTotalData } = useChargerData();

    useEffect(() => {
        setData([
            { id: "ECG7Y3AX", entries: ECG7Y3AX },
            { id: "ECNLHCXD", entries: ECNLHCXD },
            { id: "ECHWB4YP", entries: ECHWB4YP },
            { id: "ECRSW7ME", entries: ECRSW7ME }
        ]);
        setTotalData([
            { id: "ECG7Y3AX", entries: yearlyECG },
            { id: "ECNLHCXD", entries: yearlyECN },
            { id: "ECHWB4YP", entries: yearlyECH },
            { id: "ECRSW7ME", entries: yearlyECR }
        ]);
    }, []);

    const selectCharger = (id: string) => {
        setSelected(id);
    };

    return (
        <div className="flex flex-row gap-10">
            <nav className="flex flex-col w-1/5">
                <h4 className="text-lg text-center border-b-2 border-b-stone-700">Ladere</h4>
                {chargers.map(({ id, name }: { id: string; name: string }) => (
                    <ChargerCard key={id} id={id} name={name} handleChargerSelect={selectCharger} />
                ))}
            </nav>
            <div className="w-full">
                <ChargerDataInfo selectedId={selected} />
            </div>
        </div>
    );
};
