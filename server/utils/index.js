const sortByHttpCode = (arr) => arr.sort((a, b) => a.http_code - b.http_code);

module.exports = { sortByHttpCode };
