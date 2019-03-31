class CareersPage {
    visit() {
        cy.visit('/careers');
    }

    url() {
        return cy.url();
    }

    scrollIntoViewLatestOpportunities() {
        cy.get('.maxed-width > h2').first().scrollIntoView()
    }

    getLocationSelectToggle() {
        return cy.get('.select-toggle');
    }

    getApplyButton() {
        return cy.get('#Apply-Btn');
    }

    clickOnAJobToApply(title, location) {
        title = title.toLowerCase()
        let jobTitle = title.replace(/ /g, '-')
        cy.get(`a[href="/careers/${jobTitle}"]`).click();
        cy.get('#select-option').first().scrollIntoView();
        this.getLocationSelectToggle().click();
        if (location === 'London') {
            cy.get('#LndOp > a').click();
        }
        this.getApplyButton().click();

        
       
    }

    getFormUrl() {
        return this.url();
    }
}

export default CareersPage;