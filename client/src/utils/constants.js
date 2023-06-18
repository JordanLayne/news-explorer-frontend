export const processRes = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };
  
 
  
  export const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://api.news-explorer.twilightparadox.com'
  : 'http://localhost:3000';

  