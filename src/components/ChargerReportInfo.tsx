import { ReactElement } from "react";
import { EntryInfo } from "./EntryInfo";

export interface EntryData {
    authTokensUsage: string[];
    currencyId: string;
    month: Number;
    totalCost: Number;
    totalEnergyUsage: Number;
    year: Number;
}

export interface ChargerInfo {
    id: string;
    entries: EntryData[];
}

export interface ChargerExpandProps {
    chargerInfo: ChargerInfo;
}

export const ChargerReportInfo = ({ chargerInfo }: ChargerExpandProps): ReactElement => {
    return (
        <div className="mb-2">
            <div className="flex flex-row border-b-2 border-cyan-900">
                <p className="grow">{chargerInfo.id}</p>
                <p className="w-1/5 text-end">Sum</p>
                <p className="w-1/5 text-end">Forbruk</p>
            </div>
            {chargerInfo.entries.map((item) => (
                <EntryInfo key={item.totalEnergyUsage.toString()} entry={item} id={chargerInfo.id} />
            ))}
        </div>
    );
};
