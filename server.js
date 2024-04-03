const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// define the ping route

app.get('/ping', (req, res)=>{
    res.send("pong");
})

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 server running on PORT: ${PORT}`);
  });
}

module.exports = app;