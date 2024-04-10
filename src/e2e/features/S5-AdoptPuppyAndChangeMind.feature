@puppy @s5
Feature: Puppy List -> Puppy details: Adopt puppy and change mind

  Scenario: View details for Spud, adopt and then change mind
    Given I am on puppy list page
    When I navigate through the pages to find 'Spud' for max 4 pages
    And I click 'view details button for the puppy called Spud'
    And I click 'Adopt Me! button'
    Then I see 'adoption confirmation page'
    When I click 'Change Your Mind button'
    Then I see "puppy list page"