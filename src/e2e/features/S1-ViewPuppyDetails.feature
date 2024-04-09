@puppy @s1
Feature: Puppy Details

  Scenario: View details for the puppy Hanna
    Given I am on puppy list page
    When I click "view details for the puppy named hanna"
    Then I see "puppy details"
    When I click "return to list"
    Then I see "puppy list"
