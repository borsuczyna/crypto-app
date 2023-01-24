export async function getFavorites(): Promise<number[]> {
    return new Promise((res, rej) => {
        res([1, 1027/*, 125, 132, 143, 130, 421, 653, 236, 124, 652, 214, 765, 247, 923, 274, 2374*/]); // BitCoin, Ethereum, odkomentuj aby zobaczyc scroll
    })
}