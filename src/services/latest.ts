import type Latest from '@/types/Latest';
import uris from './uris';

export async function getLatestListings(): Promise<Latest[]> {
    let result = await fetch(uris.latest, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': uris.apiKey,
        }
    });
    if(result.status != 200) {
        return [];
    }

    return (await result.json()).data;
}