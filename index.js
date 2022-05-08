const express = require("express");
const messagesRouter = require("./routers/messagesRouter");
const booksRouter = require("./routers/booksRouter");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

app.use("/messages", messagesRouter);
app.use("/books", booksRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

// const {
//     detectLanguage,
//     translateText,
// } = require("./utils/translateFunctions.js");
// const { LANGUAGE_ISO_CODE } = require("./utils/dictionaries.js");

// const processLanguage = async (text) => {
//     const languageDetection = await detectLanguage(text);
//     const translatedText = await translateText(
//         text,
//         LANGUAGE_ISO_CODE.ROMANIAN
//     );
//     console.log(languageDetection);
//     console.log(translatedText);
// };

// processLanguage(
//     "Hello world! This is my first time using Google Translate API!"
// );

// const { bookSearch } = require("./utils/booksFunctions.js");
// // const books = await bookSearch("Professional JavaScript for Web Developers");

// const getBooks = (title) => {
//     const res = bookSearch(title);
//     console.log(res);
// };

// getBooks("Professional JavaScript for Web Developers");

// console.log(books);
// var books = require("google-books-search");

// var data = [];
// books
//     .search(
//         "Professional JavaScript for Web Developers",
//         function (error, results) {
//             if (!error) {
//                 data = { ...results };
//                 return results;
//             } else {
//                 console.log(error);
//             }
//         }
//     )
//     .then((data) => {
//         return data;
//     });

// console.log(data);
