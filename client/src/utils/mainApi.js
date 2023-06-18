import { baseUrl, processRes } from "./constants";

export const getArticles = (token) => {
  return fetch(`${baseUrl}/articles`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => processRes(res));
};

export const addArticle = (article, token) => {
    const {
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
        
      } = article;
    return fetch(`${baseUrl}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
       
      }),
    }).then((res) => processRes(res));
  };

export const removeArticle = (id, token) => {
  return fetch(`${baseUrl}/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => processRes(res));
};