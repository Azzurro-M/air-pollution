USER INPUT NAME 
-ADD EVENT LISTENER USER SUBMIT => INPUT
WHEN SUBMIT NAME RESULT APPEARS 
SHOW PERCENTAGE IN A BOX
STORE DATA OF USERS ON TEMPORARY BASIS

based on api url : https://api-docs.iqair.com/?version=latest

Legend to understand results

weather:
        "ts": "2017-02-01T03:00:00.000Z",  //timestamp
        "aqius": 21, //AQI value based on US EPA standard
        "aqicn": 7, //AQI value based on China MEP standard
        "tp": 8, //temperature in Celsius
        "tp_min": 6, //minimum temperature in Celsius
        "pr": 976,  //atmospheric pressure in hPa
        "hu": 100, //humidity %
        "ws": 3, //wind speed (m/s)
        "wd": 313, //wind direction, as an angle of 360° (N=0, E=90, S=180, W=270)
        "ic": "10n" //weather icon code, see below for icon index

pollution:
        "ts": "2017-02-01T01:15:00.000Z",
        "aqius": 18,
        "mainus": "p1", //main pollutant for US AQI
        "aqicn": 20,
        "maincn": "p1",  //main pollutant for Chinese AQI
        "p1": {   //pollutant details, concentration and appropriate AQIs
          "conc": 20,
          "aqius": 18,
          "aqicn": 20
      