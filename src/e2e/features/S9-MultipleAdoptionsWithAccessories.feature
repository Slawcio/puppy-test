@puppy @s9
Feature: Puppy List -> Puppy details -> Adoption Summary -> Form: Adopt puppy with accessories

  Scenario: Adopt Brook and Maggie Mae with accessories
    Given I am on puppy list page
    When I click 'view details button for the puppy called Brook'
    And I click "Adopt Me! button"
    And I click "Adopt Another Puppy button"
    And I click "view details button for the puppy called Maggie Mae"
    And I click "Adopt Me! button"
    And I click 'first vet visit for Brook checkbox'
    And I click 'collar and leash for Brook checkbox'
    And I click 'travel carrier for Maggie Mae checkbox'
    And I click 'Complete the Adoption button'
    And I type 'John' into 'name input'
    And I type '42 Primrose Street, London, EC2A 2EW, United Kingdom' into 'address input'
    And I type 'john@dot.com' into 'email input'
    And I select 'Credit card' from dropdown 'payment type dropdown'
    And I click 'Place Order button'
    Then I see element 'confirmation info' displays text 'Thank you for adopting a puppy!'