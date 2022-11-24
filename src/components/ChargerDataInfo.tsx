import { ReactElement, useEffect, useState } from "react";
import { ChargerData, TotalChargeData, useChargerData } from "../hooks/useChargerData";

interface ChargerDataInfoProps {
    selectedId: string;
}
const month = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
};

export const ChargerDataInfo = ({ selectedId }: ChargerDataInfoProps) => {
    const { getDataWithId, getTotalDataWithId } = useChargerData();
    const [data, setData] = useState<ChargerData>();

    useEffect(() => {
        setData(getDataWithId(selectedId));
    }, [selectedId]);

    const getTotalEnergy = (energy: ChargerDataInfoProps[]): number | null => {
        let total = 0;
        energy?.forEach((item) => (total += item.totalEnergyUsage));
        return total ? total : null;
    };

    return (
        <div className="flex flex-col">
            <h2 className="mb-4 text-center text-xl">{data?.id}</h2>
            <div className="mb-4 text-center text-lg text-green-500">{getTotalEnergy(data?.entries)}</div>
            {data?.entries.map((item) => (
                <div key={item.totalEnergyUsage} className="flex flex-row gap-4 mb-4 border-2 rounded-md p-2">
                    <p>{item.year}</p>
                    <p className="text-amber-400">{month[item.month]}</p>
                    <p>
                        <span className="text-orange-400">
                            {new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 6 }).format(
                                item.totalEnergyUsage
                            )}
                        </span>
                        kWh
                    </p>
                </div>
            ))}
        </div>
    );
};
