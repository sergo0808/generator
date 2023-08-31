const BASE_URL = "https://api.adviceslip.com";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const getAdvice = () => {
  return fetch(`${BASE_URL}/advice`, {
    method: "GET",
  }).then((res) => handleResponse(res));
};
