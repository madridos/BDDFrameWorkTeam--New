package step_definitions;

import common.WebAPI;
import home.HomePgFindBy;
import io.cucumber.java.en.*;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class HomePgStepDefinitions extends WebAPI  {
    public void openBrowser() throws IOException {

        setUp(false, "browserstack", "mac", "catalina", "chrome", "83", "https://www.aetna.com/");
    }

    static HomePgFindBy homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePgFindBy.class);
    }
        @Given("user is landed in aetna home page")
        public void user_is_landed_in_aetna_home_page() {
            getInitElements();
        }

//        @Then("user should be able to click on login")
//        public void user_should_be_able_to_click_on_login() {
//            getInitElements();
//            homePage.clickLogin();
//
//        }
    }


