const Author = require("../models/Author");

const createAuthorService = async data => {
	const author = await Author.create(data);
	return author;
};

module.exports = { createAuthorService };
