import CareersPage from "./CareersPage";

let admin = Cypress.env();

class ApplicationForm extends CareersPage {

    visit() {
        cy.visit(this.getFormUrl());
    }

    getFirstName() {
        return cy.get(`#candidate_firstname`);
    }

    getLastName() {
        return cy.get(`#candidate_lastname`);
    }

    getEmail() {
        return cy.get(`#candidate_email`);
    }

    getPhone() {
        return cy.get(`#candidate_phone`);
    }

    getUploadLink() {
        return cy.get(`[data-toggle=modal]`);
    }

    getResumeModal() {
        return cy.get(`#resume-modal`);
    }

    getResumeFilePicker() {
        return cy.get(`#file.js-resume-picker`);
    }

    getCoverLetterTextArea(){
        return cy.get(`#candidate_cover_letter`);
    }

    getYesBox(){
        return cy.get(`#candidate_answers_attributes_0_checked_true`);
    }

    getWorkEligibilityTextArea(){
        return cy.get(`#candidate_answers_attributes_1_body`);
    }

    getConsentBox() {
        return cy.get('#candidate_gdpr_consent');
    }

    getSubmitApplication() {
        return cy.get('input[value="Submit your application"]');
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
        const fileInput = 'input[class=js-resume-picker]';
        cy.upload_file(fileName, fileType, fileInput)
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
            .click({force: true});
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

    submitApplication(){
        this.getSubmitApplication()
            .click();
        return this;     
    }

    verifySubmission(verificationText) {
        cy.contains(verificationText).should('be.visible');
    }
}

export default ApplicationForm;