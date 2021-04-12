// имитация запроса
export const request = (data) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
