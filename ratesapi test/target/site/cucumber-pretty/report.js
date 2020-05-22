$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/backend/ratesapi.feature");
formatter.feature({
  "name": "Ratesapi tests",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Latest rates - verify positive status of response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates is available",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiSteps.rates_API_for_Latest_Foreign_Exchange_rates_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send request for the Latest Foreign Exchange rates",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiSteps.i_send_request_for_the_Foreign_Exchange_rates()"
});
formatter.write("Registering context variable, name: responseStatusCode, value: 200");
formatter.write("Registering context variable, name: responseBody, value: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.89563,\"HKD\":8.4571,\"IDR\":16249.14,\"ILS\":3.8459,\"DKK\":7.4578,\"INR\":82.7265,\"CHF\":1.0591,\"MXN\":25.045,\"CZK\":27.21,\"SGD\":1.5521,\"THB\":34.778,\"HRK\":7.5845,\"MYR\":4.7569,\"NOK\":10.9078,\"CNY\":7.7797,\"BGN\":1.9558,\"PHP\":55.349,\"SEK\":10.5373,\"PLN\":4.5209,\"ZAR\":19.2476,\"CAD\":1.5273,\"ISK\":156.3,\"BRL\":6.0857,\"RON\":4.8435,\"NZD\":1.787,\"TRY\":7.4227,\"JPY\":117.26,\"RUB\":77.9139,\"KRW\":1353.51,\"USD\":1.0904,\"HUF\":349.4,\"AUD\":1.6694},\"date\":\"2020-05-22\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that response status is positive",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiSteps.verify_that_response_status_is_positive()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Latest rates - verify positive response body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates is available",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiSteps.rates_API_for_Latest_Foreign_Exchange_rates_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send request for the Latest Foreign Exchange rates",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiSteps.i_send_request_for_the_Foreign_Exchange_rates()"
});
formatter.write("Registering context variable, name: responseStatusCode, value: 200");
formatter.write("Registering context variable, name: responseBody, value: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.89563,\"HKD\":8.4571,\"IDR\":16249.14,\"ILS\":3.8459,\"DKK\":7.4578,\"INR\":82.7265,\"CHF\":1.0591,\"MXN\":25.045,\"CZK\":27.21,\"SGD\":1.5521,\"THB\":34.778,\"HRK\":7.5845,\"MYR\":4.7569,\"NOK\":10.9078,\"CNY\":7.7797,\"BGN\":1.9558,\"PHP\":55.349,\"SEK\":10.5373,\"PLN\":4.5209,\"ZAR\":19.2476,\"CAD\":1.5273,\"ISK\":156.3,\"BRL\":6.0857,\"RON\":4.8435,\"NZD\":1.787,\"TRY\":7.4227,\"JPY\":117.26,\"RUB\":77.9139,\"KRW\":1353.51,\"USD\":1.0904,\"HUF\":349.4,\"AUD\":1.6694},\"date\":\"2020-05-22\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that response body contains base, rates and date",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiSteps.verifyThatResponseBodyContainsBaseRatesAndDate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Latest rates - invalid url is provided",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates is available",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiSteps.rates_API_for_Latest_Foreign_Exchange_rates_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send request for the invalid url",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiSteps.iSendRequestForTheInvalidUrl()"
});
formatter.write("Registering context variable, name: responseStatusCode, value: 400");
formatter.write("Registering context variable, name: responseBody, value: {\"error\":\"time data \u0027invalid\u0027 does not match format \u0027%Y-%m-%d\u0027\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that response contains time data error message and status code",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiSteps.verifyThatResponseContainsProperErrorMessageAndStatusCode()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Rates for specific date - positive status of response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates is available",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiSteps.rates_API_for_Latest_Foreign_Exchange_rates_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send request for the particular date of Foreign Exchange rates",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiSteps.iSendRequestForTheParticularDateOfForeignExchangeRates()"
});
formatter.write("Registering context variable, name: responseStatusCode, value: 200");
formatter.write("Registering context variable, name: responseBody, value: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.86905,\"HKD\":8.43,\"IDR\":16178.05,\"ILS\":3.8069,\"DKK\":7.4584,\"INR\":81.6108,\"CHF\":1.0558,\"MXN\":25.7953,\"CZK\":27.097,\"SGD\":1.5324,\"THB\":35.216,\"HRK\":7.579,\"MYR\":4.6767,\"NOK\":11.184,\"CNY\":7.6665,\"BGN\":1.9558,\"PHP\":54.772,\"SEK\":10.6639,\"PLN\":4.5336,\"ZAR\":19.6572,\"CAD\":1.5077,\"ISK\":159.3,\"BRL\":5.8565,\"RON\":4.8431,\"NZD\":1.7705,\"TRY\":7.5979,\"JPY\":115.87,\"RUB\":79.892,\"KRW\":1313.09,\"USD\":1.0876,\"HUF\":352.72,\"AUD\":1.6598},\"date\":\"2020-04-30\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that response status is positive",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiSteps.verify_that_response_status_is_positive()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Rates for specific date - positive response body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates is available",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiSteps.rates_API_for_Latest_Foreign_Exchange_rates_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send request for the particular date of Foreign Exchange rates",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiSteps.iSendRequestForTheParticularDateOfForeignExchangeRates()"
});
formatter.write("Registering context variable, name: responseStatusCode, value: 200");
formatter.write("Registering context variable, name: responseBody, value: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.86905,\"HKD\":8.43,\"IDR\":16178.05,\"ILS\":3.8069,\"DKK\":7.4584,\"INR\":81.6108,\"CHF\":1.0558,\"MXN\":25.7953,\"CZK\":27.097,\"SGD\":1.5324,\"THB\":35.216,\"HRK\":7.579,\"MYR\":4.6767,\"NOK\":11.184,\"CNY\":7.6665,\"BGN\":1.9558,\"PHP\":54.772,\"SEK\":10.6639,\"PLN\":4.5336,\"ZAR\":19.6572,\"CAD\":1.5077,\"ISK\":159.3,\"BRL\":5.8565,\"RON\":4.8431,\"NZD\":1.7705,\"TRY\":7.5979,\"JPY\":115.87,\"RUB\":79.892,\"KRW\":1313.09,\"USD\":1.0876,\"HUF\":352.72,\"AUD\":1.6598},\"date\":\"2020-04-30\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify values of rate for test date",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiSteps.verifyValuesOfRate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Rates for future date - positive response body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Rates API for Latest Foreign Exchange rates is available",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiSteps.rates_API_for_Latest_Foreign_Exchange_rates_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send request for the future date of Foreign Exchange rates",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiSteps.iSendRequestForTheFutureDateOfForeignExchangeRates()"
});
formatter.write("Registering context variable, name: responseStatusCode, value: 200");
formatter.write("Registering context variable, name: responseBody, value: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.89563,\"HKD\":8.4571,\"IDR\":16249.14,\"ILS\":3.8459,\"DKK\":7.4578,\"INR\":82.7265,\"CHF\":1.0591,\"MXN\":25.045,\"CZK\":27.21,\"SGD\":1.5521,\"THB\":34.778,\"HRK\":7.5845,\"MYR\":4.7569,\"NOK\":10.9078,\"CNY\":7.7797,\"BGN\":1.9558,\"PHP\":55.349,\"SEK\":10.5373,\"PLN\":4.5209,\"ZAR\":19.2476,\"CAD\":1.5273,\"ISK\":156.3,\"BRL\":6.0857,\"RON\":4.8435,\"NZD\":1.787,\"TRY\":7.4227,\"JPY\":117.26,\"RUB\":77.9139,\"KRW\":1353.51,\"USD\":1.0904,\"HUF\":349.4,\"AUD\":1.6694},\"date\":\"2020-05-22\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that response contains current date successful status code",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiSteps.verifyThatResponseContainsFutureDateErrorMessageAndStatusCode()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});