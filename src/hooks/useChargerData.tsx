import { createContext, ReactElement, useContext, useMemo, useState } from "react";

const ChargerContext = createContext<any | null>(null);

interface DataEntries {
    authTokensUsage: string[];
    currencyId: string;
    month: number;
    totalCost: number;
    totalEnergyUsage: number;
    year: number;
}

export interface ChargerData {
    id: string;
    entries: DataEntries[];
}

export interface TotalChargeData {
    id: string;
    entries: DataEntries[];
}

export const ChargerDataProvider = ({ children }: { children: ReactElement }) => {
    const [chargerData, setChargerData] = useState<ChargerData[]>([]);
    const [totalChargerData, setTotalChargerData] = useState<TotalChargeData[]>([]);

    const setData = async (data: any) => {
        setChargerData(data);
    };
    const setTotalData = async (data: any) => {
        setTotalChargerData(data);
    };

    const getDataWithId = (id: string) => {
        const filtered = chargerData?.filter((e) => e.id === id);
        return filtered[0];
    };

    const getTotalDataWithId = (id: string) => {
        const filtered = totalChargerData?.filter((e) => e.id === id);
        return filtered[0];
    };

    const clearData = () => {
        setChargerData([]);
    };

    const clearTotalData = () => {
        setChargerData([]);
    };

    const value = useMemo(
        () => ({
            chargerData,
            totalChargerData,
            setData,
            setTotalData,
            clearData,
            clearTotalData,
            getDataWithId,
            getTotalDataWithId
        }),
        [chargerData, totalChargerData]
    );

    return <ChargerContext.Provider value={value}>{children}</ChargerContext.Provider>;
};

export const useChargerData = () => {
    return useContext(ChargerContext);
};
