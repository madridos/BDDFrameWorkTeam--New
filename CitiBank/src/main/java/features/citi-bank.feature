Feature: Citi Bank home page  Feature


#test case one : verify logo
  Scenario: Citi bank home  logo
    Given user is at citi bank home page
    When logo should be visible
    And when you click on it
    Then it should redirect you to the home page
    #test case 2: search icon

  Scenario: Citi bank home search
    Given user Is at citi bank home page
    When user click on  search icon
    Then it should drop a content menu
    #test case 3: search in citi

  Scenario: Citi bank home search anything
    Given user IS at citi bank home page
    When user click on  search icon and enters the keyword
    Then user should be redirected to the search page
#test case 4:citi facebook

  Scenario: Citi bank home facebook
    Given user IS At citi bank home page
    When user scrolls down to facebook and clicks on it
    Then user should be redirected to citi facebook page
    # test case 5: citi twitter

  Scenario: Citi bank home twitter
    Given user IS At Citi bank home page
    When user scrolls down to twitter and clicks on it
    Then user should be redirected to citi twitter page
    #test case 6: citi youtube

  Scenario: Citi bank home youtube
    Given user IS AT Citi bank home page
    When user scrolls down to youtube and clicks on it
    Then user should be redirected to citi youtube page
    #test case 7: credit cards

  Scenario: Citi bank home credit cards
    Given user IS AT CIti bank home page
    When user mouse hover to credit cards
    Then user should see drop down menu
    #test case 8: banking

  Scenario: Citi bank home baking
    Given User IS AT CIti Bank home page
    When user mouse hover to banking
    Then user should see drop down banking menu
    #test case 9:landing

  Scenario: Citi bank home landing
    Given User IS AT CITi Bank home page
    When user mouse hover to landing
    Then user should see drop down landing menu
    #test case10: investing

  Scenario: Citi bank home investing
    Given User IS AT CITI Bank home page
    When user mouse hover to investing
    Then user should see drop down investing menu
    #test case 11: citi gold

  Scenario: Citi bank home citi gold
    Given User IS AT CITI BAnk home page
    When user mouse hover to citi gold
    Then user should see drop down citi gold menu
