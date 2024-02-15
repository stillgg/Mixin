const emitable = (obj) => {
  const events = {};

  const methods = {
    on(event, callback) {
      events[event] = callback;
    },
    emit(event, ...args) {
      if (events[event]) events[event](...args);
    },
  };

  Object.assign(obj, methods);
};
