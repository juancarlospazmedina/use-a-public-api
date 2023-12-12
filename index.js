// Setting up a new Node.js project using Express.js
import express from "express";
// Including Axios for making HTTP requests
import axios from "axios";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    res.render("index.ejs", { content: "____________________" });
});

// Implementing a GET endpoint to interact with my chosen API.
app.post("/get-price", async (req, res) => {
  try {
    // Using Axios to send HTTP request to the API and handle response
    const result = await axios.get("https://api.poloniex.com/markets/BTC_USDT/price");
    // console.log(result.data);
    res.render("index.ejs", { content: result.data.price });
    // Error handling in place for both the application and any API requests
  } catch (error) {
    console.log("In error");
    res.render("index.ejs", { content: "Service Not Available. Please come back soon." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
