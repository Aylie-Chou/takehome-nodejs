const _ = require("lodash");
const mockData = require("../data/mock.json");

const getLatestStarArticles = () => {
  const sortedArticles = _.orderBy(mockData, ["created"], ["desc"]);
  return sortedArticles[0];
};

const hi = () => {
  return "<h2>Hello World</h2><p>Go to /latestStar to see example result.</p>";
};

module.exports = {
  getLatestStarArticles,
  hi
};
