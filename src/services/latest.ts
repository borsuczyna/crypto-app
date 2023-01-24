import type Latest from '@/types/Latest';
import uris from './uris';

export async function getLatestListings(): Promise<Latest[]> {
    let result = await fetch(uris.latest, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': '0f18e676-e4b7-4e71-8fd0-32a77ef5ab5d',
        }
    });
    if(result.status != 200) {
        return [];
    }

    return (await result.json()).data;
}