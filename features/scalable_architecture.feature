@scalable_architecture
Feature: Scalable Architecture
  Architectural requirements shift in accordance with demand

  Scenario: 10 Users : TINY architecture
    Given I have 10 users
    When I provision the infrastructure
    Then it will be tuned for "TINY" load

  Scenario: 100 Users : SMALL architecture
    Given I have 100 users
    When I provision the infrastructure
    Then it will be tuned for "SMALL" load
