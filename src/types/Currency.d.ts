export interface Currency {
    id: number;
    name: string;
    symbol: string;
    logo: string;
};

export interface CurrencyByIndex {
    [id: number]: Currency
};