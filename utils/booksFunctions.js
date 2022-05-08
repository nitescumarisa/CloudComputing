var books = require("google-books-search");

// books.search(
//     "Professional JavaScript for Web Developers",
//     function (error, results) {
//         if (!error) {
//             console.log(results);
//         } else {
//             console.log(error);
//         }
//     }
// );

function bookSearch(title) {
    let data;
    books.search(title, function (err, results, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(typeof results);
            return results;
            data = { ...results };
        }
    });

    // return data;
}

module.exports = { bookSearch };
