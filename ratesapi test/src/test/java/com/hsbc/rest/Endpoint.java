package com.hsbc.rest;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum Endpoint {

    HOME("/"),
    LATEST("/latest"),
    INVALID("/invalid");

    @Getter
    public String endpointName;
}
