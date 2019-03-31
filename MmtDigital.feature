Feature: Feature name

   Feature Description: MMT digital Application

   Scenario 1: Valid Job Application
        Given I am a potential user "TEST"
        When I visit MMT digital web page "https://www.mmtdigital.co.uk"
        And I navigate to MMT Digital "careers" page by clicking on the hamburger menu on the top right hand side
        And I Scroll down to the job section on the career page with the title "LATEST OPPORTUNITIES"
        And I click on the a desired job vacancy "Test Engineer Contract"
        And I select the city of my choice "London" and click "Apply"
        And I completed All the required fields
        And I submit the application
        Then the application should be successful with text on page "Your job application has been submitted"

    Scenario 2: Invalid Job Application due to empty required field
        Given I am a potential user "TEST"
        When I visit MMT digital web page "https://www.mmtdigital.co.uk"
        And I navigate to MMT Digital "careers" page by clicking on the hamburger menu on the top right hand side
        And I Scroll down to the job section on the career page with the title "LATEST OPPORTUNITIES"
        And I click on the a desired job vacancy "Test Engineer Contract"
        And I select the city of my choice "London" and click "Apply"
        And I completed All the required fields except the consent checkbox
        And I submit the application
        Then the application should not be successful with text on page "To submit an application, read and agree to the terms of the Privacy Notice"