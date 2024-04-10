@puppy @s6
Feature: Puppy List -> Puppy details: Adopt multiple puppies

  Scenario: Adopt Hanna and then Maggie Mae
    Given I am on puppy list page
    When I click "view details button for the puppy called Hanna"
    And I click "Adopt Me! button"
    And I click "Adopt Another Puppy button"
    And I click "view details button for the puppy called Maggie Mae"
    And I click "Adopt Me! button"
    Then I see elements "adoption summary puppy names" contains text "Hanna"
    And I see elements "adoption summary puppy names" contains text "Maggie Mae"