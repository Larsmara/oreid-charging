import { ChargerExpand, ChargerInfo } from "../components/ChargerExpand";
import { useChargerData } from "../hooks/useChargerData";

export const Report = () => {
    const { chargerData } = useChargerData();

    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-lg text-center border-b-2 border-b-stone-700">Lader rapport</h4>
            {chargerData.map((item: ChargerInfo) => (
                <ChargerExpand key={item.id} chargerInfo={item} />
            ))}
        </div>
    );
};
