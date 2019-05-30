import CareersPage from './CareersPage';
const MAIN_NAV_MENU = '.hamburger-box'
class HomePage {
    constructor() {}

    visit() {
        cy.visit('/');
    }

    getNavigationMenu() {
        return cy.get(MAIN_NAV_MENU);
    }

    goToDesiredPage(page, callback) {
        page = callback(page);
        cy.log(page);
        switch (page) {
            case 'Careers':
                cy.get(`a[title=${page}]`).click();
                return new CareersPage();
            default:
                cy.log(`${page} do not exist or implemented yet`);
        }

    }

    pageTitleTransformer(pageName) {
        pageName = pageName.toLowerCase();
        return pageName.charAt(0)
            .toUpperCase()
            .concat('', pageName.slice(1));
    }

}

export default HomePage;