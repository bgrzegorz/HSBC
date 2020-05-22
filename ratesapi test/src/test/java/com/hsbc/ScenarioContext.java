package com.hsbc;

import cucumber.api.Scenario;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import static java.util.Objects.isNull;

//@Slf4j
@Component
@Data
@RequiredArgsConstructor
public class ScenarioContext {

    private final Map<String, Object> scenarioVariables = new HashMap<>();
    private Scenario scenario;


    public  ScenarioContext setVariable(String variableName, Object variableValue) {
        String info = String.format("Registering context variable, name: %s, value: %s",
                variableName, isNull(variableValue) ? StringUtils.EMPTY : variableValue.toString());
//        log.info(info);
        scenario.write(info);
        this.scenarioVariables.put(variableName, variableValue);
        return this;
    }

    public void clear() {
        this.scenarioVariables.clear();
    }

    public <T> T getVariable(String variableName) {
        try {
            String formattedVariable = StringUtils.substringBetween(variableName, "${", "}");
            Object variableObject = isNull(formattedVariable) ? (T) variableName : (T) scenarioVariables.get(formattedVariable);
            if (variableObject instanceof String) {
                String variableValue = getValueFromVariable(variableName);
                //TODO Resolve maven library conflict to allow logging
//                log.debug(String.format("Variable name: %s, value: %%s", variableName, variableValue));
                return (T) variableValue;
            } else  {
                return (T) variableObject;
            }
        } catch (NullPointerException e) {
            return null;
        }
    }

    private String getValueFromVariable(String variableName) {
        return Arrays.asList(variableName.split("(?<=})")).stream().map(vn -> {
            String formattedVariable = StringUtils.substringBetween(vn, "${", "}");
            String variableValue = (String) scenarioVariables.get(formattedVariable);
            return StringUtils.replace(vn, String.format("${%s}", formattedVariable), variableValue);
        }).collect(Collectors.joining());
    }
}
