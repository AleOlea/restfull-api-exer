const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  if (!logo) {
    res.status(418).send({ message: "we need a logo" });
  }
  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  });
});

app.listen(PORT, () =>
  console.log(`It is alive on port http://localhost:${PORT}`)
);

//SRC: https://www.youtube.com/watch?v=-MTSQjw5DrM
