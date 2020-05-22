package com.hsbc.suite.functional;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        glue = {
//                "com.hsbc.rest.steps",
//                "com.hsbc.cucumberHook",
                "com.hsbc"
        },
        features = {
                "classpath:features/backend"
        },

        plugin = {
                "pretty",
                "html:target/site/cucumber-pretty",
                "json:target/cucumber.json"
        },
        junit = "--step-notifications",
        monochrome = true,
        tags = {"@RestTest"}
)

public class BackendRunner {
}
