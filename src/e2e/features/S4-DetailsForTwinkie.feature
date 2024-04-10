@puppy @s4
Feature: Puppy List -> Puppy Details: Verify Twinkie

Scenario: Verify Adoption Fee for Twinkie
  Given I am on puppy list page
  When I navigate through the pages to find 'Twinkie' for max 4 pages
   And I click 'view details button for the puppy called Twinkie'
  Then I see element 'adoption fee' displays text '£22.50'