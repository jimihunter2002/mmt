import CareersPage from "./CareersPage";

let admin = Cypress.env();
const CANDIDATE_FIRSTNAME = `#candidate_firstname`;
const CANDIDATE_LASTNAME = `#candidate_lastname`;
const CANDIDATE_EMAIL = `#candidate_email`;
const CANDIDATE_PHONE = `#candidate_phone`;
const RESUME_UPLOAD_LINK = `[data-toggle=modal]`;
const RESUME_MODAL = `#resume-modal`;
const RESUME_FILE_PICKER = `#file.js-resume-picker`;
const COVER_LETTER = `#candidate_cover_letter`;
const RIGHT_TO_WORK_RADIO_YES = `#candidate_answers_attributes_1_checked_true`;
const RIGHT_TO_WORK_TEXTAREA = `#candidate_answers_attributes_0_body`;
const CONSENT_BOX = `#candidate_gdpr_consent`;
const APPLICATION_SUBMIT = `[data-ui=submit-application-form]`;
const FILEINPUT = 'input[class=js-resume-picker]';

class ApplicationForm extends CareersPage {

    visit() {
        cy.visit(this.getFormUrl());
    }

    getFirstName() {
        return cy.get(CANDIDATE_FIRSTNAME);
    }

    getLastName() {
        return cy.get(CANDIDATE_LASTNAME);
    }

    getEmail() {
        return cy.get(CANDIDATE_EMAIL);
    }

    getPhone() {
        return cy.get(CANDIDATE_PHONE);
    }

    getUploadLink() {
        return cy.get(RESUME_UPLOAD_LINK);
    }

    getResumeModal() {
        return cy.get(RESUME_MODAL);
    }

    getResumeFilePicker() {
        return cy.get(RESUME_FILE_PICKER);
    }

    getCoverLetterTextArea() {
        return cy.get(COVER_LETTER);
    }

    getYesBox() {
        return cy.get(RIGHT_TO_WORK_RADIO_YES);
    }

    getWorkEligibilityTextArea() {
        return cy.get(RIGHT_TO_WORK_TEXTAREA);
    }

    getConsentBox() {
        return cy.get(CONSENT_BOX);
    }

    getSubmitApplication() {
        return cy.get(APPLICATION_SUBMIT);
    }

    fillFirstName(value) {
        this.getFirstName()
            .clear()
            .type(admin.firstName)
            .should('have.value', admin.firstName);
        return this;
    }

    fillLastName(value) {
        this.getLastName()
            .clear()
            .type(admin.lastName)
            .should('have.value', admin.lastName);
        return this;
    }

    fillEmail(value) {
        this.getEmail()
            .clear()
            .type(admin.email)
            .should('have.value', admin.email);
        return this;
    }

    fillPhoneNumber(value) {
        this.getPhone()
            .clear()
            .type(admin.phone)
            .should('have.value', admin.phone);
        return this;
    }

    uploadCV(fileName, fileType) {
        this.getUploadLink().click();
        this.getResumeModal().should('be.hidden').invoke('show').should('be.visible');
        this.getResumeFilePicker().focus();
        cy.upload_file(fileName, fileType, FILEINPUT)
        cy.wait(5000);
    }

    addCoverLetter(letter) {
        this.getCoverLetterTextArea()
            .focus()
            .type(letter)
            .should('have.value', letter);
        return this;
    }

    selectWorkEligibility() {
        this.getYesBox()
            .click({
                force: true
            });
        return this;
    }

    addWorkEligibilityText(status) {
        this.getWorkEligibilityTextArea()
            .focus()
            .type(status)
        return this;
    }
    addConsentCheckBox() {
        this.getConsentBox()
            .check()
        return this;
    }

    submitApplication() {
        this.getSubmitApplication()
            .click();
        return this;
    }

    verifySubmission(verificationText) {
        cy.contains(verificationText).should('be.visible');
    }
}

export default ApplicationForm;