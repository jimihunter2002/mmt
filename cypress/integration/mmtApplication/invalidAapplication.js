import {
    Given,
    Then,
    When,
    And
} from 'cypress-cucumber-preprocessor/steps';


import ApplicationForm from '../../pages/ApplicationForm';
import Chance from 'chance';
import HomePage from '../../pages/HomePage';

let admin = Cypress.env();
const fileName = 'OgunjimiYusufTestEngineerLux.pdf';
const fileType = 'application/pdf';

let home, careersPage, applicationForm;
beforeEach(`setUp before tests`, function () {
    home = new HomePage();
    home.visit();
})

Given(`user opens mmt digital page`, function () {
    home.getNavigationMenu()
        .should('be.visible')
        .click();
    careersPage = home.goToDesiredPage('Careers', home.pageTitleTransformer);

})

When('user applies for job {string} on page {string}', function (job, page) {
    careersPage.url().should('contain', `/${page}`);
    careersPage.scrollIntoViewLatestOpportunities();
    careersPage.clickOnAJobToApply(job, page);
})

And(`user selects location {string} to apply`, function (location) {
    careersPage.selectLocationAndApply(location)
})

And(`user submits an application with unfilled required field`, function () {
    applicationForm = new ApplicationForm();
    applicationForm.fillFirstName(admin.firstName);
    applicationForm.fillLastName(admin.lastName);
    applicationForm.fillEmail(admin.email);
    applicationForm.fillPhoneNumber(admin.phone);
    applicationForm.uploadCV(fileName, fileType);

    const chance = new Chance();
    const coverLetter = chance.paragraph({
        sentences: 5
    });
    const workEligibility = chance.sentence({
        words: 5
    });

    applicationForm.addCoverLetter(coverLetter);
    applicationForm.selectWorkEligibility();
    applicationForm.addWorkEligibilityText(workEligibility);
    applicationForm.submitApplication();

})

Then(`user application should not be successful with text on page {string}`, function (displayMsg) {
    applicationForm.verifySubmission(displayMsg);
})