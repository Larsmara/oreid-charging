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

export const ChargerExpand = ({ chargerInfo }: ChargerExpandProps): ReactElement => {
    return (
        <details className="p-2 border-2 rounded-md border-cyan-600">
            <summary>{chargerInfo.id}</summary>
            {chargerInfo.entries.map((item) => (
                <EntryInfo key={item.totalEnergyUsage} entry={item} />
            ))}
        </details>
    );
};
