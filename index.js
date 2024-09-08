const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { connectToMongoDB } = require('./config');
const { restrictToLoggedInUserOnly, checkAuth } = require('./middlewares/auth');
const URL = require('./models/url');

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');

const app = express();
PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Error connecting to database", err);
    });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restrictToLoggedInUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.get("/url/:shortId", async (req, res) => {
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