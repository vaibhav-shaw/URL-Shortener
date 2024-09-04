const express = require('express');
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const { connectToMongoDB } = require('./config');
const app = express();
PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Error connecting to database", err);
    });

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    }
    );
    res.redirect(entry.redirectUrl);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});