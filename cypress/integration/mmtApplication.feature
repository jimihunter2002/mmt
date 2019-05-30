Feature: Feature name

  Feature Description: MMT digital Application

  Scenario: Valid Job Application
    Given user opens mmt digital page
    When user applies for job "Test Engineer" on page "careers"
    And user selects location "London" to apply
    And user completes and submit job application correctly
    Then user application should be successful with text displayed "Your job application has been submitted"

  Scenario: Invalid Job Application due to empty required field
    Given user opens mmt digital page
    When user applies for job "Test Engineer" on page "careers"
    And user selects location "London" to apply
    And user submits an application with unfilled required field
    Then user application should not be successful with text on page "To submit an application, read and agree to the terms of the Privacy Notice"
