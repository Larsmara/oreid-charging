import { ReactElement } from "react";
import { useChargerData } from "../hooks/useChargerData";
import { EntryData } from "./ChargerReportInfo";

interface EntryInfoProps {
    entry: EntryData;
    id: string;
}

export const EntryInfo = ({ entry, id }: EntryInfoProps): ReactElement => {
    const { getTotalPriceByYear } = useChargerData();
    return (
        <div className="flex flex-row">
            <p className="grow">{entry.year}</p>
            <p className="w-1/5 text-end">{getTotalPriceByYear(id, entry.year)} NOK</p>
            <p className="w-1/5 text-end">
                {new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 6 }).format(entry.totalEnergyUsage)} kWh
            </p>
        </div>
    );
};
