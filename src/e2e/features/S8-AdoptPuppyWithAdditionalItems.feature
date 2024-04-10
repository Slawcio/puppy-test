@puppy @s8
Feature: Puppy List -> Puppy details -> Adoption Summary: Adopt puppy with additional items

  Scenario: Adopt Brook and add a travel carrier
    Given I am on puppy list page
    When I click 'view details button for the puppy called Brook'
    And I click 'Adopt Me! button'
    And I click 'travel carrier checkbox'
    Then I see element 'total adoption fee' displays text '£74.94'