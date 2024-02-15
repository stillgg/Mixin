const logable = (obj) => {
  Object.assign(obj, {
    log: (e) => {
      console.log(e);
    },
  });
};

const server = {};

logable(server);

server.log("info");
