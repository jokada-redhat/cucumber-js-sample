Feature: Hello buttons

  Scenario: Display "Hello World" when the hello button is clicked
    Given I am on the index page
    When I click on the "hello" button
    Then I should see "Hello World" text

  Scenario: Display "Hello World 2" when the hello2 button is clicked
    Given I am on the index page
    When I click on the "hello2" button
    Then I should see "Hello World 2" text