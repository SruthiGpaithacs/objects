function deepDiff(obj1, obj2) {
    let result = {};
    for (let key in obj2) {
        if (
            typeof obj2[key] === "object" &&
            obj2[key] !== null &&
            typeof obj1[key] === "object" &&
            obj1[key] !== null
        ) {
            let nestedDiff = deepDiff(obj1[key], obj2[key]);
            if (Object.keys(nestedDiff).length > 0) {
                result[key] = nestedDiff;
            }
        }
        else if (obj1[key] !== obj2[key]) {
            result[key] = {
                from: obj1[key],
                to: obj2[key]
            };
        }
    }
    for (let key in obj1) {
        if (!(key in obj2)) {
            result[key] = {
                removed: obj1[key]
            };
        }
    }
    for (let key in obj2) {
        if (!(key in obj1)) {
            result[key] = {
                added: obj2[key]
            };
        }
    }
    return result;
}
const obj1 = {
    x: 1,
    y: {
        z: 2
    }
};
const obj2 = {
    x: 1,
    y: {
        z: 3
    },
    w: 4
};
console.log(deepDiff(obj1, obj2));