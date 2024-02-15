const wrap = (obj, ...funcs) => {
  const res = [];
  for (const func of funcs) {
    if (!func.name) continue;

    res.push(() => func(obj));
  }

  return res.length === 1 ? res[0] : res;
};

const log = console.log;

const f1 = wrap({ area: 200 }, log);

f1();
