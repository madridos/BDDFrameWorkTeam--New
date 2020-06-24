$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/homePage.feature");
formatter.feature({
  "name": "Aetna home page  Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Aetna search test case",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "i am at the home page of aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_am_at_the_home_page_of_aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to enter and search",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_should_be_able_to_enter_and_search()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "search list of items test case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am at the same home page of aetna",
  "keyword": "Given "
});
formatter.step({
  "name": "i click on search field",
  "keyword": "When "
});
formatter.step({
  "name": "i should be able to search \"\u003citems\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "items"
      ]
    },
    {
      "cells": [
        "medicaid"
      ]
    },
    {
      "cells": [
        "senior benefits"
      ]
    },
    {
      "cells": [
        "health insurance"
      ]
    },
    {
      "cells": [
        "retirement"
      ]
    },
    {
      "cells": [
        "retirement plan"
      ]
    },
    {
      "cells": [
        "payments"
      ]
    },
    {
      "cells": [
        "sign up"
      ]
    }
  ]
});
formatter.scenario({
  "name": "search list of items test case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am at the same home page of aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_am_at_the_same_home_page_of_aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on search field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_click_on_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to search \"medicaid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_should_be_able_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search list of items test case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am at the same home page of aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_am_at_the_same_home_page_of_aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on search field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_click_on_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to search \"senior benefits\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_should_be_able_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search list of items test case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am at the same home page of aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_am_at_the_same_home_page_of_aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on search field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_click_on_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to search \"health insurance\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_should_be_able_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search list of items test case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am at the same home page of aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_am_at_the_same_home_page_of_aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on search field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_click_on_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to search \"retirement\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_should_be_able_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search list of items test case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am at the same home page of aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_am_at_the_same_home_page_of_aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on search field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_click_on_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to search \"retirement plan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_should_be_able_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search list of items test case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am at the same home page of aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_am_at_the_same_home_page_of_aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on search field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_click_on_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to search \"payments\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_should_be_able_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search list of items test case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am at the same home page of aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_am_at_the_same_home_page_of_aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on search field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_click_on_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to search \"sign up\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.i_should_be_able_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is at home page of aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_at_home_page_of_aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to aetna apps",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_aetna_apps()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to aetna apps page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_aetna_apps_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer2 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is at home page of Aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_at_home_page_of_Aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to Faqs",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_faqs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to Faqs page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_Faqs_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer3 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is at home Page of Aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_at_home_Page_of_Aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to glossary",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_glossary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to glossary page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_glossary_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer4 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is at Home Page of Aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_at_Home_Page_of_Aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to accessibility serrvice",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_accessibility_serrvice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to accessibility service  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_accessibility_service_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer5 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is At Home Page of Aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_At_Home_Page_of_Aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to plan disclosure",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_plan_disclosure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to plan disclosure  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_plan_disclosure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer6 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is AT Home Page of Aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_AT_Home_Page_of_Aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to program provision",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_program_provision()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to program provision  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_program_provision_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer7 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is AT Home Page Of Aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_AT_Home_Page_Of_Aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to state directory",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_state_directory()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to state directory  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_state_directory_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer8 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is AT Home Page OF Aetna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_AT_Home_Page_OF_Aetna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to grieve Forms",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_grieve_Forms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to grieve Forms  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_grieve_Forms_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer9 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is AT Home Page OF AEtna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_AT_Home_Page_OF_AEtna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to Health Care Reform",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_Health_Care_Reform()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to Health Care Reform  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_Health_Care_Reform_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer10 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is AT Home Page OF AETna",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_AT_Home_Page_OF_AETna()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to News And Analysis",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_News_And_Analysis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to News And Analysis  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_News_And_Analysis_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer11 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is AT Home Page OF AETNa",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_AT_Home_Page_OF_AETNa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to investor Info",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_investor_Info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to investor Info  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_investor_Info_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer12 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is AT Home Page OF AETNA",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_is_AT_Home_Page_OF_AETNA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to site map",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_site_map()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to site map  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_site_map_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer13 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user Is AT Home Page OF AETNA",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_Is_AT_Home_Page_OF_AETNA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to terms of use",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_terms_of_use()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to terms of use  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_terms_of_use_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer14 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user IS AT Home Page OF AETNA",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_IS_AT_Home_Page_OF_AETNA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to legal notices",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_legal_notices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to legal notices  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_legal_notices_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Aetna footer15 test case",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user IS AT Home PAge OF AETNA",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_IS_AT_Home_PAge_OF_AETNA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scrolls down to privacy center",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_scrolls_down_to_privacy_center()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be redirected to privacy center  page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageStepDefinition.user_should_be_redirected_to_privacy_center_page()"
});
formatter.result({
  "status": "passed"
});
});