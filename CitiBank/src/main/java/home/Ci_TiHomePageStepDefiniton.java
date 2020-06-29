package home;

import common.WebAPI;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.io.IOException;

public class Ci_TiHomePageStepDefiniton extends WebAPI {
    Ci_Ti_BankHome ci_ti_bankHome=new Ci_Ti_BankHome();
    @Given("user is at citi bank home page")
    public void user_is_at_citi_bank_home_page() throws IOException {
        ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }
    @When("logo should be visible")
    public void logo_should_be_visible() {
        ci_ti_bankHome.validateVisibilityOfLogo();
    }
    @And("when you click on it")
    public void when_you_click_on_it() {
       ci_ti_bankHome.clickOnLogo();
    }
    @Then("it should redirect you to the home page")
    public void it_should_redirect_you_to_the_home_page() {
       ci_ti_bankHome.validateHomePageTitle();
    }
    @Given("user Is at citi bank home page")
    public void user_Is_at_citi_bank_home_page() throws IOException {
    ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }

    @When("user click on  search icon")
    public void user_click_on_search_icon() throws InterruptedException {
       ci_ti_bankHome.clickOnSearchIcon();
    }

    @Then("it should drop a content menu")
    public void it_should_drop_a_content_menu() {
       ci_ti_bankHome.getTextContentMenu();
    }
    @Given("user IS at citi bank home page")
    public void user_IS_at_citi_bank_home_page() throws IOException {
       ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }
    @When("user click on  search icon and enters the keyword")
    public void user_click_on_search_icon_and_enters_the_keyword() throws InterruptedException {
        ci_ti_bankHome.searchInCiTiBank();
    }
    @Then("user should be redirected to the search page")
    public void user_should_be_redirected_to_the_search_page() {
        ci_ti_bankHome.validateSearchTitle();
    }
    @Given("user IS At citi bank home page")
    public void user_IS_At_citi_bank_home_page() throws IOException {
        ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }
    @When("user scrolls down to facebook and clicks on it")
    public void user_scrolls_down_to_facebook_and_clicks_on_it() throws InterruptedException {
       ci_ti_bankHome.scrolldownToFacebook();
    }
    @Then("user should be redirected to citi facebook page")
    public void user_should_be_redirected_to_citi_facebook_page() throws InterruptedException {
      ci_ti_bankHome.validateCiTiFbTitle();
    }
    @Given("user IS At Citi bank home page")
    public void user_IS_At_Citi_bank_home_page() throws IOException {
        ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }
    @When("user scrolls down to twitter and clicks on it")
    public void user_scrolls_down_to_twitter_and_clicks_on_it() throws InterruptedException {
        ci_ti_bankHome.scrollDownToTwitter();
    }
    @Then("user should be redirected to citi twitter page")
    public void user_should_be_redirected_to_citi_twitter_page() {
        ci_ti_bankHome.validateCiTiTwitterTitle();
    }
    @Given("user IS AT Citi bank home page")
    public void user_IS_AT_Citi_bank_home_page() throws IOException {
        ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }
    @When("user scrolls down to youtube and clicks on it")
    public void user_scrolls_down_to_youtube_and_clicks_on_it() throws InterruptedException {
        ci_ti_bankHome.scrollDownToYoutube();
    }
    @Then("user should be redirected to citi youtube page")
    public void user_should_be_redirected_to_citi_youtube_page(){
        ci_ti_bankHome.validateCiTiYoutubeTitle();
    }
    @Given("user IS AT CIti bank home page")
    public void user_IS_AT_CIti_bank_home_page() throws IOException {
        ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }
    @When("user mouse hover to credit cards")
    public void user_mouse_hover_to_credit_cards() throws InterruptedException {
       ci_ti_bankHome.mouseHoverToCreditCards();
    }
    @Then("user should see drop down menu")
    public void user_should_see_drop_down_menu() throws InterruptedException {
        ci_ti_bankHome.getCreditCardMenuText();
    }
    @Given("User IS AT CIti Bank home page")
    public void user_IS_AT_CIti_Bank_home_page() throws IOException {
       ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }
    @When("user mouse hover to banking")
    public void user_mouse_hover_to_banking() throws InterruptedException {
        ci_ti_bankHome.mouseHoverToBanking();
    }
    @Then("user should see drop down banking menu")
    public void user_should_see_drop_down_banking_menu() throws InterruptedException {
        ci_ti_bankHome.getBankingMenuText();
    }
    @Given("User IS AT CITi Bank home page")
    public void user_IS_AT_CITi_Bank_home_page() throws IOException {
       ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }
    @When("user mouse hover to landing")
    public void user_mouse_hover_to_landing() throws InterruptedException {
       ci_ti_bankHome.mouseHoverToLanding();
    }
    @Then("user should see drop down landing menu")
    public void user_should_see_drop_down_landing_menu() throws InterruptedException {
       ci_ti_bankHome.getLandingMenuText();
    }
    @Given("User IS AT CITI Bank home page")
    public void user_IS_AT_CITI_Bank_home_page() throws IOException {
       ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }
    @When("user mouse hover to investing")
    public void user_mouse_hover_to_investing() throws InterruptedException {
        ci_ti_bankHome.mouseHoverToInvesting();
    }
    @Then("user should see drop down investing menu")
    public void user_should_see_drop_down_investing_menu() throws InterruptedException {
        ci_ti_bankHome.getInvestingMenuText();
    }
    @Given("User IS AT CITI BAnk home page")
    public void user_IS_AT_CITI_BAnk_home_page() throws IOException {
        ci_ti_bankHome.OpenBrowserToCiTi_Bank();
    }

    @When("user mouse hover to citi gold")
    public void user_mouse_hover_to_citi_gold() throws InterruptedException {
        ci_ti_bankHome.mouseHoverToCiTiGold();
    }

    @Then("user should see drop down citi gold menu")
    public void user_should_see_drop_down_citi_gold_menu() throws InterruptedException {
       ci_ti_bankHome.getCiTiGoldMenuText();
    }

}
