const express = require("express");

const app = express();

app.get("/welcome", function (req, res) {

    res.setHeader("Content-type", "text/plain");

    res.status(200).send("Welcome to Dominos!");
})

app.get("/contact", function (req, res) {

    res.setHeader("Content-type", "application/JSON")

    res.status(200).send(JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com "
    }));

})

app.get("*", function (req, res) {

    res.setHeader("Content-type", "text/plain")

    res.status(404).send("Request not found.");
})

app.listen(8081, () => {
    console.log("The server is up and running at port 8081.");
})