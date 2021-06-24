This repo is  code for the first project. 
i Installed and configure Webpack just as we did in the course. 

get the meaning-cloud key


set meaning-cloud credentias

-Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file

-Create a new ```.env``` file in the root of your project
-Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
-Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```
```
const dotenv = require('dotenv');
dotenv.config();
```
-Reference variables in the .env file by putting ```process.env``` in front of it.

