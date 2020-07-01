package step_definitions;


import common.WebAPI;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.io.IOException;

import static home.HomePgFindBy.homePgFindBy;
import static home.HomePgFindBy.init;

public class HomePgStepDefinitions extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "os", "x", "chrome", "83", "https://www.aetna.com/");
    }

    @Given("user is landed in aetna home page")
    public void user_is_landed_in_aetna_home_page()
    {
        init();
    }

    @Then("user should be able to click on shop for a plan")
    public void user_should_be_able_to_click_on_shop_for_a_plan() throws InterruptedException {
        init();
        homePgFindBy.shoopPlan();
    }

    @And("user should see and able to click on medicare")
    public void user_should_see_and_able_to_click_on_medicare() throws InterruptedException {
        init();
        homePgFindBy.setMedicare();
    }

//    @Then("user should be able to find a plan")
//    public void user_should_be_able_to_find_a_plan() throws InterruptedException {
//        init();
//        homePgFindBy.findPlan();
//    }
//
//    @And("user should be able to select choice")
//    public void user_should_be_able_to_select_choice() throws InterruptedException {
//        init();
//        homePgFindBy.selectChoice();
//    }

//
//    @Given("user is at aetna home page")
//    public void user_is_at_aetna_home_page() {
//    }
//
//    @When("user clicks on shop a plan")
//    public void user_clicks_on_shop_a_plan() {
//    }
//
//    @And("should be able to choose health coverage")
//    public void should_be_able_to_choose_health_coverage() {
//    }
//
//    @And("could go for international plans")
//    public void could_go_for_international_plans() {
//    }
//
//    @Then("you have to fill up the form")
//    public void you_have_to_fill_up_the_form() {
//    }
}

