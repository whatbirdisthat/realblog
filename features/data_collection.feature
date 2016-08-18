@typescript @data_collection
Feature: Data Collection
  Estimated Sample Sizes to pre-format storage.

  Scenario: 100 Survey Samples
    Given I have 100 samples to take
    When I collect the data
    When I store it into an unformatted database
    When I store it into a preformatted database
    Then storing in a pre-populated database is faster than an unpopulated one
