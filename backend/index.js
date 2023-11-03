
import express from 'express';
import { json } from 'express';
import pokemonRoute from './routes/pokemonRoute.js';
import chalkMsg from './lib/chalk.js';
import errorHandler from './middleware/errorHandler.js'
import userRoute from './routes/userRoute.js';
import './db/mongooseClient.js';


const app = express();
app.use(json());
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    console.log('\n📍Connection event:\n👀🐰 Client requested root')
    return res.json({ "🟢🐰": "Success!" });
});

app.use('/pokefight', pokemonRoute);

app.use('/user', userRoute);

app.use(errorHandler);

app.listen(PORT, () => chalkMsg(`green`,`\n🟢🐰 Server up on port ${PORT}!`)); 