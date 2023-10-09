export const fetchError = async (delay = 2000) => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Network Issue"));
    }, delay);
  });
};
