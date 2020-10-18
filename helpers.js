function mean(numbers) {
    return numbers.reduce((sum, next) => sum + next) / numbers.length;
}

function median(numbers) {
    const mid = Math.floor(numbers.length / 2);
    let sorted = [...numbers].sort((a,b) => a - b);
    return numbers.length % 2 !== 0 ? sorted[mid] : (sorted[mid] + sorted[mid - 1]) / 2;
}

function mode(numbers) {
    let histogram = {};
    for (let n of numbers) {
        if (histogram[n]) {
            histogram[n] += 1;
        } else {
            histogram[n] = 1;
        }
    }
    let mode = [];
    let modeCount = Math.max(...Object.values(histogram));
    for ([key, value] of Object.entries(histogram)) {
        if (value === modeCount) {
            mode.push(key);
        }
    }
    return mode.length > 1 ? mode.map(Number) : mode.map(Number)[0];
}

module.exports = {
    mean,
    median,
    mode
}