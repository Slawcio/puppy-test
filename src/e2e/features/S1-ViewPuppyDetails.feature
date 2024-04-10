@puppy @s1
Feature: Puppy List -> Puppy Details: View Hanna details

  Scenario: View details for the puppy Hanna
    Given I am on puppy list page
    When I click "view details for the puppy named Hanna"
    Then I see "puppy details"
    When I click "return to list"
    Then I see "puppy list"
