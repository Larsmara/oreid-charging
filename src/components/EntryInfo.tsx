import { ReactElement } from "react";
import { EntryData } from "./ChargerExpand";

interface EntryInfoProps {
    entry: EntryData;
}

export const EntryInfo = ({ entry }: EntryInfoProps): ReactElement => {
    return (
        <div>
            <p>{entry.year}</p>
        </div>
    );
};
