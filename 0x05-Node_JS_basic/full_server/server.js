import router from './routes';

const express = require('express');
const app = express();

// Use the routes defined
app.use('/', router);

// Start the server
const port = 1245;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
