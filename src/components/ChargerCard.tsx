import { RiBattery2ChargeFill } from "react-icons/ri";

interface ChargerProps {
    name: string;
    id: string;
    handleChargerSelect: (id: string) => void;
}

export const ChargerCard = ({ name, id, handleChargerSelect }: ChargerProps) => {
    return (
        <div
            className="flex flex-row items-center rounded-sm hover:bg-slate-700 cursor-pointer p-2"
            onClick={() => handleChargerSelect(id)}
        >
            <RiBattery2ChargeFill className="w-12 h-12" />
            <div>
                <h3>{name ?? "Test"}</h3>
                <p>{id}</p>
            </div>
        </div>
    );
};
