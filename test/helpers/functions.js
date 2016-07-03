export const setupOutput = (count) => {
    let output = {};
    for (let i = 0; i < count; i++) {
        output[i] = false;
    }
    return output;
};
