# MMT Digital

## To run the tests in this project follow the instructions below

<dl>
    <dt>1. Clone repo with command below</dt>
    <dd>`git clone repo`</dd>
    <dt>2. Install node</dt>
    <dd>Install `node` on your machine if its not installed</dd>
    <dt>3. Install Cypress and other dependencies</dt>
    <dd>Run the command `npm install` in the root of the project folder</dd>
    <dt>4. Add credentials</dt>
    <dd>Add appropriate credentials to env section of the `cypress.json` file.</dd>
    <dt>5. Replace pdf file</dt>
    <dd>Replace the pdf fileName on line 6 in jobApplication.js file with desired pdf file and the file to the folder `fixtures`.</dd>
    <dt>6. Run Cypress app</dt>
    <dd> Open cypress app by running: npm run e2e.</dd> 
    <dt>7. Run test in a browser</dt>
    <dd> Click on the `jobApplication.js` test file and watch cypress do its magic.</dd>
</dl>