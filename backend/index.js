const express = require(`express`);
const cors = require(`cors`);
const app = express();
const port = process.env.PORT || 8989;

app.use(express.json());
app.use(cors({ origin: `*` }));

app.route(`/`).get((req, res) => {
  console.log(`\n📍Connection event:\n👀🐰 Client requested root`);
  return res.json({ "🟢🐰": "Success!" });
});

app.listen(port, () => console.log(`\n🟢🐰 Server up on port ${port}!`));
//TODO Refactor it into ES6 syntax if you can, please!
