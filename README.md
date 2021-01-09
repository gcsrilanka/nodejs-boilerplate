# Node, Express, Mongo Boilerplate

> Boilerplate for the Node, Express, Mongo.
## Prerequisites
- Node.js
- NPM - Node package manager
- MongoDB - Cloud Atlas(URI)

## Setting UP Environment
- git clone https://github.com/ezioguga/nodejs-boilerplate.git
- cd Node_Express_Mongo_boilerplate
- go to config -> config.env (edit it with your cloud atlas uri information)

## Install Dependancies
```
npm install
```
## Run App
```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```
## Added Basic Security Packages to Improve API Security
```
1. express-mongo-sanitize - To Prevent NoSQL Injections.
2. helmet - Security Headers
3. xss-clean - XSS Protection
4. express-rate-limit - To Limit the No of Reqs
5. hpp - To Prevent HTTP Parameter Pollution
6. CORS - To Avoid Cross-Origin Resource Sharing Issues
```
For Detailed Information Visit: 
[Click Me](https://medium.com/javascript-in-plain-english/common-nodejs-mongo-api-security-problems-and-how-to-overcome-them-548d0137984c)
- Version: 1.0.1
- License: MIT
