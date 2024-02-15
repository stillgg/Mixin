// implement mixin for prototypes (not instances)

const mixin = (obj, mixin) => {
  for (const key of Object.keys(mixin)) {
    obj.prototype[key] = mixin[key];
  }
};

function Log() {}

mixin(Log, {
  fullName: "Egor",
  logName() {
    console.log(this.fullName);
  },
});

const log = new Log();

log.logName();
