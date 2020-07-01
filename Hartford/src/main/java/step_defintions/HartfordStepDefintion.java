package step_defintions;


import common.WebAPI;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import java.io.IOException;

import static home.HartfordHomePage.homePage;
import static home.HartfordHomePage.init;

public class HartfordStepDefintion extends WebAPI {


    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "os", "x", "chrome", "83", "https://www.aetna.com/");
    }

    @Given("iam at hartford home page")
    public void iam_at_hartford_home_page() {
        init();
    }

    @Then("as user i want to to click on auto")
    public void as_user_i_want_to_to_click_on_auto() {
        init();
        homePage.goAuto();
    }

}