package step_definitions;


import common.WebAPI;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import java.io.IOException;

import static home.HomePgFindBy.homePgFindBy;
import static home.HomePgFindBy.init;

public class HomePgStepDefinitions extends WebAPI {

    @Before
    public void openBrowser() throws IOException { setUp(false, "browserstack", "os", "x", "chrome", "83", "https://www.aetna.com/");
    }

    @Given("user is landed in aetna home page")
    public void user_is_landed_in_aetna_home_page() {
        init();

    }

    @Then("user should be able to click on login")
    public void user_should_be_able_to_click_on_login() {
        init();
        homePgFindBy.setLoginbtn();

    }

}


