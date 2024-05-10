const express = require("express");
const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("./Utils/utils");
const appForVoters = require("./Routes/voters");
const config = require("config");
const app = express();
const port = config.get("portno");
const secretkey = config.get("encryptionKey");

app.use(express.json());

app.use((request, response, next) => {

  if (request.url.includes("/voter/login")) {
    next(); 
    return;
  }

  const authHeader = request.headers.authorization;
  if (!authHeader) {
    errorResponse(response, "Auth Token is required!", 500); 
    return;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    errorResponse(response, "Auth Token is not valid!!", 401); 
    return;
  }
  console.log("Auth Token "+token);
  jwt.verify(token, secretkey, (err, decoded) => {
    if (err) {
        errorResponse(response, "Unauthorized!!", 401); 
      return; 
    }
    request.voter = decoded;
    console.log(request.voter);
    next();
  });
});

app.use("/voter", appForVoters);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
