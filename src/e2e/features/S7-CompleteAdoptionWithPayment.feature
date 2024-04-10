@puppy @s7
Feature: Puppy List -> Puppy details -> Adoption Summary -> Form: Adoption with credit card

  Scenario: Complete adoption with credit card
    Given I am on puppy list page
    When I click 'any view details button'
    And I click 'Adopt Me! button'
    And I click 'Complete the Adoption button'
    And I type 'John' into 'name input'
    And I type '42 Primrose Street, London, EC2A 2EW, United Kingdom' into 'address input'
    And I type 'john@dot.com' into 'email input'
    And I select 'Credit card' from dropdown 'payment type dropdown'
    And I click 'Place Order button'
    Then I see element 'confirmation info' displays text 'Thank you for adopting a puppy!'