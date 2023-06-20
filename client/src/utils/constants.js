export const processRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const baseUrl = "https://api.news-explorer.twilightparadox.com"
