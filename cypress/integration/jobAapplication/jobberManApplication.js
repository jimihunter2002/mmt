import HomePage from '../../pages/HomePage';
import ApplicationForm from '../../pages/ApplicationForm';
import Chance from 'chance';

let admin = Cypress.env();
const fileName = 'OgunjimiYusufTestEngineerLux.pdf';
const fileType = 'application/pdf';


describe('MMT Digital Job Application', () => {

    it('Valid application should be successfully', () => {
        const home = new HomePage();
        home.visit();

        home
            .getNavigationMenu()
            .should('be.visible')
            .click();

        const careersPage = home.goToDesiredPage('Careers');
        careersPage.url().should('contain', '/careers');
        careersPage.scrollIntoViewLatestOpportunities();
        careersPage.clickOnAJobToApply('Test Engineer Contract', 'London');

        const applicationForm = new ApplicationForm();
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
        applicationForm.addConsentCheckBox();
        applicationForm.submitApplication();

        applicationForm.verifySubmission('Your job application has been submitted')

    });

    it.only('Should show an error message on empty required field', () => {
        const home = new HomePage();
        home.visit();

        home
            .getNavigationMenu()
            .should('be.visible')
            .click();

        const careersPage = home.goToDesiredPage('Careers');
        careersPage.url().should('contain', '/careers');
        careersPage.scrollIntoViewLatestOpportunities();
        careersPage.clickOnAJobToApply('Test Engineer Contract', 'London');

        const applicationForm = new ApplicationForm();
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
        applicationForm.verifySubmission('To submit an application, read and agree to the terms of the Privacy Notice')
    });

});