export function randomChartData(amount: number = 7, min: number = 0, max: number = 30000): [number[], string[], boolean, number] {
    let data: number[] = [];
    let labels: string[] = [];
    let descending: boolean = false;

    for(let i = 0; i < amount; i++) {
        let rnd: number = min + Math.random()*(max - min);
        data.push(rnd);
        labels.push('');
    }
    
    let minValue: number = Math.min(...data);
    let maxValue: number = Math.max(...data);
    let diff: number = maxValue - minValue;
    descending = data[data.length-1] > data[data.length-2];

    return [data, labels, descending, (data[data.length-1] - data[data.length-2])/diff];
}