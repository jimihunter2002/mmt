To run the tests in this project follow the instructions below

1. `git clone repo`

2. install `node` on your machine if its not installed

3. Install Cypress
run the command below  in the root of the project folder
`npm install`

4. Add appropriate credentials to env section of the `cypress.json` file

5. Replace the pdf fileName on line 6 in jobApplication.js file with desired pdf file and the file to the folder `fixtures`

6. Open cypress app by running: npm run e2e

7. Click on the `jobApplication.js` test file and watch cypress do its magic.