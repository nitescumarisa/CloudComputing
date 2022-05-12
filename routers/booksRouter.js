const connection = require("../db.js");
const mysql = require("mysql");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    connection.query("SELECT * FROM books", (err, results) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            books: results,
        });
    });
});

router.post("/", (req, res) => {
    const {
        title,
        author,
        description,
        publishedDate,
        averageRating,
        imageLink,
        previewLink,
    } = req.body;

    if (
        !title ||
        !author ||
        !description ||
        !publishedDate ||
        !averageRating ||
        !imageLink ||
        !previewLink
    ) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametersssss.");
    }

    const queryString = `INSERT INTO books (title, author, description, publishedDate, averageRating, imageLink, previewLink) VALUES (${mysql.escape(
        title
    )}, ${mysql.escape(author)}, ${mysql.escape(description)}, ${mysql.escape(
        publishedDate
    )}, ${mysql.escape(averageRating)}, ${mysql.escape(
        imageLink
    )}, ${mysql.escape(previewLink)})`;

    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            data: results,
        });
    });
});

// Add get by id route
router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const queryString = `SELECT * FROM books WHERE id = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Message not found.");
        }
        return res.json({
            messages: results,
        });
    });
});

// Add delete by id route
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const queryString = `DELETE FROM books WHERE id = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Message not found.");
        }
        return res.json({
            results,
        });
    });
});

module.exports = router;
