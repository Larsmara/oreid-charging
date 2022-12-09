import { ReactElement, useEffect, useState } from "react";
import { ChargerData, useChargerData } from "../hooks/useChargerData";
import { prices } from "../data/prices";
interface ChargerDataInfoProps {
    selectedId: string;
}
const month: any = {
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

export const ChargerDataInfo = ({ selectedId }: ChargerDataInfoProps): ReactElement => {
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

    const getTotalSum = () => {
        let totalPrice = 0;

        data?.entries.forEach((item) => (totalPrice += (item.totalEnergyUsage * prices[item.year][item.month]) / 60));
        return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 6 }).format(totalPrice);
    };

    return (
        <div className="flex flex-col">
            <h2 className="mb-4 text-center text-xl">{data?.id}</h2>
            {data ? (
                <div className="flex flex-row justify-between mb-4 text-center text-lg">
                    <h4>
                        Total pris: <span className="text-red-500">{getTotalSum()}</span>
                    </h4>
                    <h5>
                        Totalt forbruk: <span className="text-green-500">{getTotalEnergy(data?.entries)}</span>
                    </h5>
                </div>
            ) : null}
            {data?.entries.map((item) => (
                <div key={item.totalEnergyUsage} className="flex flex-row justify gap-4 mb-4 border-2 rounded-md p-2">
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
                    <p className="ml-auto text-green-700">
                        Pris:{" "}
                        <span className="text-orange-50">
                            {new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 6 }).format(
                                (item.totalEnergyUsage * prices[item.year][item.month]) / 60
                            )}
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
};
