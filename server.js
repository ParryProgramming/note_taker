const express = require('express');
const htmlUser = require('./routes/htmlRoutes')
const apiUser = require('./routes/apiRoutes')
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlUser)
app.use(apiUser)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});