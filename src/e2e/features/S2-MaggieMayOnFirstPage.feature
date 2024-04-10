@puppy @s2
Feature: Puppy List: Verify Maggie Mae presence on first page

  Scenario: Verify Maggie May is on the first page
    Given I am on puppy list page
    Then I see element "current page number" displays text "1"
    Then I see elements "puppies names on list" contains text "Maggie Mae"
