import uris from './uris';
import type { Currency } from "@/types/Currency";

export async function getCurrencyInfo(id: number): Promise<Currency> {
    let result = await fetch(uris.info.replace('<id>', id+''), {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': uris.apiKey,
        }
    });
    if(result.status != 200) {
        return {
            id: id,
            name: 'Loading',
            symbol: '',
            logo: ''
        };
    }

    return (await result.json()).data[id] as Currency;
}