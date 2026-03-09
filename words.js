const express = require("express");
const router = express.Router();

const words = require("../data/words");

/* Word of the Day */
router.get("/", (req, res) => {

    const randomWord = words[Math.floor(Math.random() * words.length)];

    res.send(randomWord);

});


/* NEW REQUIRED FEATURE */
router.get("/allwords", (req, res) => {

    const sortedWords = words.sort((a, b) =>
        a.word.localeCompare(b.word)
    );

    res.render("allwords", { words: sortedWords });

});

module.exports = router;
