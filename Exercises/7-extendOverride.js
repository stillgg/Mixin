// - implement `extend` for mixins with additional `override:Boolean` flag

const extend = (obj, mixins) => {
  for (const mixin of mixins) {
    for (const key of Object.keys(mixin)) {
      if (key === "override") continue;

      Object.assign(obj, {
        [key]: mixin,
      });

      Object.defineProperty(obj, key, {
        value: mixin,
        writable: mixin.override,
      });
    }
  }
};

const mix2 = [
  {
    override: true,
    toString() {
      return `${this.name} - ${this.city} - ${this.born}`;
    },
  },
  {
    override: false,
    age() {
      const year = new Date().getFullYear();
      const born = new Date(this.born).getFullYear();
      return year - born;
    },
  },
];

const obj1 = {};

extend(obj1, mix2);

obj1.age = 1;
obj1.toString = Object.toString;

console.log(obj1);
