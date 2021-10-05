const express = require('express');
const app = express();
app.disable('x-powered-by');
app.use(express.json());

app.listen(3000, () => {
	console.log(`app running on 127.0.0.1:3000`);
});
