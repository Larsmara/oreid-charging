import { ChargerReportInfo, ChargerInfo } from "../components/ChargerReportInfo";
import { useChargerData } from "../hooks/useChargerData";

export const Report = () => {
    const { totalChargerData, getTotalPrice } = useChargerData();

    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-lg text-center border-b-2 border-b-stone-700">Lader rapport</h4>
            <div>
                {totalChargerData.map((item: ChargerInfo) => (
                    <ChargerReportInfo key={item.id} chargerInfo={item} />
                ))}
            </div>

            <div>{getTotalPrice()} NOK</div>
        </div>
    );
};

