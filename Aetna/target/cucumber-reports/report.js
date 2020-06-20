$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Login.feature");
formatter.feature({
  "name": "aetna home page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": ": aetne home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is landed in aetna home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePgStepDefinitions.user_is_landed_in_aetna_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to click on login",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePgStepDefinitions.user_should_be_able_to_click_on_login()"
});
formatter.result({
  "status": "passed"
});
});