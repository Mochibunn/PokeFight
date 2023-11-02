
import express from 'express';
import { json } from 'express';
import {allPokemon,
    singlePokemon} from './controllers/pokemonCon.js';

const app = express();

app.use(json());

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    console.log('\n📍Connection event:\n👀🐰 Client requested root')
    return res.json({ "🟢🐰": "Success!" });
});

app.route('/pokemon')
.get(allPokemon);

app.route('/pokemon/:id')
.get(singlePokemon);

app.route('/pokemon/:id/:info')
.get();


app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));