export const getSearchResults = async (query) => {
  try {
    const API_KEY = "c59147d9e41942efb83ca81ce8a0b1ef";
    const currentDate = new Date();
    const from = new Date();
    from.setDate(currentDate.getDate() - 7);
    const fromDate = from.toISOString().split("T")[0];
    const toDate = currentDate.toISOString().split("T")[0];

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&from=${fromDate}&to=${toDate}&pageSize=100`
    );
    const data = await response.json();

    if (response.ok) {
      const results = data.articles.map((article) => {
        const backupTitle = "Backup Article Title";
        const backupImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
        const backupText = "This is a backup article description.";
        const backupSource = "Backup Source";
        const backupLink = "https://example.com/backup-article";

        return {
          id: generateRandomId(),
          keyword: query,
          title: article.title || backupTitle,
          image: article.urlToImage || backupImage,
          text: article.description || backupText,
          date: article.publishedAt
            ? new Date(article.publishedAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : new Date().toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
          source: article.source.name || backupSource,
          link: article.url || backupLink,
        };
      });

      return results;
    } else {
      throw new Error(data.message || "Failed to fetch search results");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9); 
};