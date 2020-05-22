Feature: Ratesapi tests


  @RestTest
  Scenario: Latest rates - verify positive status of response

    Given Rates API for Latest Foreign Exchange rates is available
    When I send request for the Latest Foreign Exchange rates
    Then Verify that response status is positive


  @RestTest
  Scenario: Latest rates - verify positive response body

    Given Rates API for Latest Foreign Exchange rates is available
    When I send request for the Latest Foreign Exchange rates
    Then Verify that response body contains base, rates and date


  @RestTest
  Scenario: Latest rates - invalid url is provided

    Given Rates API for Latest Foreign Exchange rates is available
    When I send request for the invalid url
    Then Verify that response contains time data error message and status code


  @RestTest
  Scenario: Rates for specific date - positive status of response

    Given Rates API for Latest Foreign Exchange rates is available
    When I send request for the particular date of Foreign Exchange rates
    Then Verify that response status is positive


  @RestTest
  Scenario: Rates for specific date - positive response body

    Given Rates API for Latest Foreign Exchange rates is available
    When I send request for the particular date of Foreign Exchange rates
    Then Verify values of rate for test date


  @RestTest
  Scenario: Rates for future date - positive response body

    Given Rates API for Latest Foreign Exchange rates is available
    When I send request for the future date of Foreign Exchange rates
    Then Verify that response contains current date successful status code