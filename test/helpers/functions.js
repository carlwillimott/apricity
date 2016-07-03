export const setupOutput = (count) => {
    let output = {};
    for (let i = 1; i <= count; i++) {
        output[i] = false;
    }
    return output;
};
