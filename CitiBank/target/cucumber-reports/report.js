$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/myfeatures/openaccount.feature");
formatter.feature({
  "name": "open an account link",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "open an account test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user lunch browser \"chrome\" and navigate to citi bank home page \"https://online.citi.com/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click on open an account",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});