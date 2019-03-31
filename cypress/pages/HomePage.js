import CareersPage from './CareersPage';

class HomePage {
    constructor() {

    }

    visit() {
        cy.visit('/');
    }

    getNavigationMenu() {
        return cy.get(`.hamburger-box`);
    }

    goToDesiredPage(page) {
        cy.get(`a[title=${page}]`).click();
        const careersPage = new CareersPage();
        return careersPage;        
    }

}

export default HomePage;