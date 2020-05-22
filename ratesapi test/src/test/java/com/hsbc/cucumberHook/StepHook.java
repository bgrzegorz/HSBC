package com.hsbc.cucumberHook;

import com.hsbc.ScenarioContext;
import cucumber.api.Scenario;
import cucumber.api.java8.En;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

//@Slf4j
@ContextConfiguration("/cucumber-context.xml")
public class StepHook implements En {

    @Autowired
    private ScenarioContext scenarioContext;

    public StepHook() {
        Before((Scenario scenario) -> {
//            log.info("Scenario Setup.");
            scenarioContext.setScenario(scenario);
        });

        After((Scenario scenario) -> {
//            log.info("Scenario '" + "' variables:" + scenarioContext.getScenarioVariables().toString());
            scenarioContext.clear();
        });
    }
}
