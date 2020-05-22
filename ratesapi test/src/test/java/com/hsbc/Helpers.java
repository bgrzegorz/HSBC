package com.hsbc;

import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

public class Helpers {
    public static String formattedCurrentDate(String dateFormat) {
        DateTime dateTime = new DateTime(DateTimeZone.forID("Europe/Warsaw"));
        DateTimeFormatter formatter = DateTimeFormat.forPattern(dateFormat);
        return formatter.print(dateTime);
    }

    public static String formattedOtherDate(int days, String dateFormat) {
        return formattedDateByTimeZoneId(days, dateFormat, "Europe/Warsaw");
    }

    public static String formattedDateByTimeZoneId(int days, String dateFormat, String  zoneId) {
        DateTime dateTime = new DateTime(DateTimeZone.forID(zoneId));
        DateTimeFormatter formatter = DateTimeFormat.forPattern(dateFormat);
        return days < 0 ? formatter.print(dateTime.minusDays(Math.abs(days))) : formatter.print(dateTime.plusDays(Math.abs(days)));
    }
}
