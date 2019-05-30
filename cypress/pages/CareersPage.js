const LATEST_OPPORTUNITIES = '.maxed-width > h2';
const LOCATION_TOGGLE = '.select-toggle';
const APPLY_BUTTON = '#Apply-Btn';
const LOCATION_MAIN_OPTION = '#select-option';
const LONDON_LOCATION = `#LndOp > a`;

class CareersPage {
    visit() {
        cy.visit('/careers');
    }

    url() {
        return cy.url();
    }

    scrollIntoViewLatestOpportunities() {
        cy.get(LATEST_OPPORTUNITIES).first().scrollIntoView()
    }

    getLocationSelectToggle() {
        return cy.get(LOCATION_TOGGLE);
    }

    getApplyButton() {
        return cy.get(APPLY_BUTTON);
    }

    clickOnAJobToApply(jobName, page) {
        jobName = jobName.toLowerCase()
        page = page.toLowerCase();
        let jobTitle = jobName.replace(/ /g, '-')
        cy.get(`a[href="/${page}/${jobTitle}"]`).click();
        cy.get(LOCATION_MAIN_OPTION).first().scrollIntoView();
    }

    selectLocationAndApply(location) {
        this.getLocationSelectToggle().click();
        this.selectLocation(location);
        this.getApplyButton().click();

    }

    getFormUrl() {
        return this.url();
    }

    selectLocation(location) {
        switch (location) {
            case 'London':
                cy.get(LONDON_LOCATION).click();
                break;
            default:
                cy.log(`${location} is not available for selection`);

        }
    }
}

export default CareersPage;