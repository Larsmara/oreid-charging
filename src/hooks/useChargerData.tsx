import { createContext, ReactElement, useContext, useMemo, useState } from "react";
import { prices } from "../data/prices";
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

    const setData = (data: any): void => {
        setChargerData(data);
    };
    const setTotalData = (data: any): void => {
        setTotalChargerData(data);
    };

    const getDataWithId = (id: string): ChargerData => {
        const filtered = chargerData?.filter((e) => e.id === id);
        return filtered[0];
    };

    const getTotalDataWithId = (id: string): ChargerData => {
        const filtered = totalChargerData?.filter((e) => e.id === id);
        return filtered[0];
    };

    const getTotalPriceByYear = (id: string, year: number): string => {
        let totalPrice = 0;

        const data = chargerData.filter((item) => item.id === id);
        data[0].entries.forEach((item) => {
            if (item.year === year) {
                totalPrice += (item.totalEnergyUsage * prices[year][item.month]) / 60;
            }
        });

        return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 6 }).format(totalPrice);
    };

    const getTotalPrice = (): string => {
        let totalPrice = 0;

        chargerData.forEach((charger) => {
            charger.entries.forEach(
                (item) => (totalPrice += (item.totalEnergyUsage * prices[item.year][item.month]) / 60)
            );
        });

        return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 6 }).format(totalPrice);
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
            getTotalDataWithId,
            getTotalPriceByYear,
            getTotalPrice
        }),
        [chargerData, totalChargerData]
    );

    return <ChargerContext.Provider value={value}>{children}</ChargerContext.Provider>;
};

export const useChargerData = () => {
    return useContext(ChargerContext);
};
