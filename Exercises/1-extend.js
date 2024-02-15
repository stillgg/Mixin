const extend = (obj, ...objects) => {
  for (const object of objects) {
    const keys = Object.keys(object);

    for (const key of keys) {
      obj[key] = object[key];
    }
  }
};

const ex1 = {};

extend(ex1, { name: "Egor" }, { age: 21, height: 180 });

console.log(ex1);
