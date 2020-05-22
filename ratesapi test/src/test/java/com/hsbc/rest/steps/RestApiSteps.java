package com.hsbc.rest.steps;

import com.hsbc.ScenarioContext;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.hamcrest.core.StringContains;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Assert;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONCompareMode;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.Map;

import static com.hsbc.Helpers.formattedCurrentDate;
import static com.hsbc.Helpers.formattedOtherDate;
import static com.hsbc.rest.Endpoint.*;
import static com.hsbc.rest.config.TestRestConfiguration.TEST_URL;
import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

@Getter
@RequiredArgsConstructor
public class RestApiSteps {

    @Autowired
    private ScenarioContext scenarioContext;

    @Given("Rates API for Latest Foreign Exchange rates is available")
    public void rates_API_for_Latest_Foreign_Exchange_rates_is_available() {
        given().
        when().
                get(TEST_URL.concat(HOME.getEndpointName())).
        then().
                statusCode(200);
    }

    @When("I send request for the Latest Foreign Exchange rates")
    public void i_send_request_for_the_Foreign_Exchange_rates() {
        Response response = given().
                when().
                get(TEST_URL.concat(LATEST.getEndpointName()));
        final Map<String, Object> scenarioVar = new HashMap<>();

        scenarioContext.setVariable("responseStatusCode", response.statusCode());
        scenarioContext.setVariable("responseBody", response.getBody().asString());
    }

    @Then("Verify that response status is positive")
    public void verify_that_response_status_is_positive() {
        Object responseStatusCode = scenarioContext.getScenarioVariables().get("responseStatusCode");

        assertEquals("Invalid response status code!", 200, responseStatusCode);
    }

    @Then("Verify that response body contains base, rates and date")
    public void verifyThatResponseBodyContainsBaseRatesAndDate() throws JSONException {
        String responseBody = (String) scenarioContext.getScenarioVariables().get("responseBody");
        String today = formattedCurrentDate("yyyy-MM-dd");
        String yesterday = formattedOtherDate(-1, "yyyy-MM-dd");

        try {
            JSONObject jsonObject = new JSONObject(responseBody);
            assertEquals("Invalid currency!", "EUR", jsonObject.get("base"));
            //TODO Support weekends (latest date might be DATE-3 at Mondays!)
            Assert.assertThat("Invalid date!", today.concat(yesterday),  StringContains.containsString((String) jsonObject.get("date")));
            Assert.assertTrue("Empty rates list!", jsonObject.getJSONObject("rates").length() > 0);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @When("I send request for the invalid url")
    public void iSendRequestForTheInvalidUrl() {
        Response response = given().
                when().
                get(TEST_URL.concat(INVALID.getEndpointName()));
        final Map<String, Object> scenarioVar = new HashMap<>();

        scenarioContext.setVariable("responseStatusCode", response.statusCode());
        scenarioContext.setVariable("responseBody", response.getBody().asString());
    }

    @Then("Verify that response contains time data error message and status code")
    public void verifyThatResponseContainsProperErrorMessageAndStatusCode() {
        try {
            String responseBody = (String) scenarioContext.getScenarioVariables().get("responseBody");
            Object responseStatusCode = scenarioContext.getScenarioVariables().get("responseStatusCode");
            JSONObject jsonObject = new JSONObject(responseBody);

            assertEquals("Invalid response status code!", 400, responseStatusCode);
            assertEquals("Invalid error message!", "time data 'invalid' does not match format '%Y-%m-%d'", jsonObject.get("error"));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @When("I send request for the particular date of Foreign Exchange rates")
    public void iSendRequestForTheParticularDateOfForeignExchangeRates() {
        String testDate = "2020-05-01";
        Response response = given().
                when().
                get(TEST_URL.concat("/").concat(testDate));
        final Map<String, Object> scenarioVar = new HashMap<>();

        scenarioContext.setVariable("responseStatusCode", response.statusCode());
        scenarioContext.setVariable("responseBody", response.getBody().asString());
    }

    @And("Verify values of rate for test date")
    public void verifyValuesOfRate() {
        try {
            String responseBody = (String) scenarioContext.getScenarioVariables().get("responseBody");
            JSONObject jsonObject = new JSONObject(responseBody);
            JSONObject responseRates = jsonObject.getJSONObject("rates");
            String ExpectedRatesForTestDate = "{\"GBP\":0.86905,\"HKD\":8.43,\"IDR\":16178.05,\"ILS\":3.8069,\"DKK\"" +
                    ":7.4584,\"INR\":81.6108,\"CHF\":1.0558,\"MXN\":25.7953,\"CZK\":27.097,\"SGD\":1.5324,\"THB\"" +
                    ":35.216,\"HRK\":7.579,\"MYR\":4.6767,\"NOK\":11.184,\"CNY\":7.6665,\"BGN\":1.9558,\"PHP\"" +
                    ":54.772,\"SEK\":10.6639,\"PLN\":4.5336,\"ZAR\":19.6572,\"CAD\":1.5077,\"ISK\":159.3,\"BRL\"" +
                    ":5.8565,\"RON\":4.8431,\"NZD\":1.7705,\"TRY\":7.5979,\"JPY\":115.87,\"RUB\":79.892,\"KRW\"" +
                    ":1313.09,\"USD\":1.0876,\"HUF\":352.72,\"AUD\":1.6598}";

            JSONAssert.assertEquals(ExpectedRatesForTestDate, responseRates, JSONCompareMode.LENIENT);
        }catch (JSONException e){
            e.printStackTrace();
        }
    }

    @When("I send request for the future date of Foreign Exchange rates")
    public void iSendRequestForTheFutureDateOfForeignExchangeRates() {
        String tomorrow = formattedOtherDate(1, "yyyy-MM-dd");
        Response response = given().
                when().
                get(TEST_URL.concat("/").concat(tomorrow));
        final Map<String, Object> scenarioVar = new HashMap<>();

        scenarioContext.setVariable("responseStatusCode", response.statusCode());
        scenarioContext.setVariable("responseBody", response.getBody().asString());
    }

    @Then("Verify that response contains current date successful status code")
    public void verifyThatResponseContainsFutureDateErrorMessageAndStatusCode() {
        try {
            String responseBody = (String) scenarioContext.getScenarioVariables().get("responseBody");
            Object responseStatusCode = scenarioContext.getScenarioVariables().get("responseStatusCode");
            JSONObject jsonObject = new JSONObject(responseBody);
            String today = formattedCurrentDate("yyyy-MM-dd");


            assertEquals("Invalid response status code!", 200, responseStatusCode);
            assertEquals("Should display current date!", today, jsonObject.get("date"));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
