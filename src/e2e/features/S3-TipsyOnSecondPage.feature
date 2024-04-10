@puppy @s3
Feature: Puppy List: Verify Tipsy on Second Page

  Scenario: Verify Maggie May is on the first page
    Given I am on puppy list page
    When I click 'second page pagination number'
    Then I see elements 'puppies names on list' contains text 'Tipsy'