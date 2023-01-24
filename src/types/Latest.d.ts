interface Latest { 
    id: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs: number;
    date_added: Date;
    tags: string[];
    max_supply: number;
    circulating_supply: number;
    total_supply: number;
    platform: null;
    cmc_rank: number;
    self_reported_circulating_supply: null;
    self_reported_market_cap: null;
    tvl_ratio: null;
    last_updated: Date;
    quote: {
        USD: {
            price: number;
            volume_24h: number;
            volume_change_24h: number;
            percent_change_1h: number;
            percent_change_24h: number;
            percent_change_7d: number;
            percent_change_30d: number;
            percent_change_60d: number;
            percent_change_90d: number;
            market_cap: number;
            market_cap_dominance: number;
            fully_diluted_market_cap: number;
            tvl: null;
            last_updated: Date;
        }
    }
};

export default Latest;