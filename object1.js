function deepClone(obj) {
        if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        let arr = [];
        for (let i = 0; i < obj.length; i++) {
            arr[i] = deepClone(obj[i]);
        }
        return arr;
    }
    let clone = {};
    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}
const person = {
    name: "Puji",
    age: 20,
    address: {
        city: "Vijayawada"
    }
};
const copy = deepClone(person);
copy.address.city = "Chennai";
console.log(person);
console.log(copy);