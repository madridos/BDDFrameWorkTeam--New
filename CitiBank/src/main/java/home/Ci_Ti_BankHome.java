package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;
import java.util.List;

import static home.Ci_Ti_HomePageWebElements.*;

public class Ci_Ti_BankHome extends WebAPI {

    @FindBy(how= How.XPATH,using=webLogo)
    public WebElement logo;
    @FindBy(how=How.XPATH,using = webSearchIcon)
    public WebElement searchIcon;
    @FindBy(how=How.XPATH,using=webSearchCompleteContent)
    public WebElement searchCompleteContent;
    @FindBy(how=How.XPATH,using = webSearchButton)
    public WebElement searchButton;
    @FindBy(how=How.XPATH,using = webSearchField)
    public WebElement searchField;
    @FindBy(how = How.XPATH,using = webCiTiFacebook)
    public WebElement facebook;
    @FindBy(how=How.XPATH,using = webContinueToFb)
    public WebElement continueToFb;
    @FindBy(how=How.XPATH,using = webCiTiTwitter)
    public WebElement twitter;
    @FindBy(how=How.XPATH,using = webContinueToTwitter)
    public WebElement continueToTwitter;
    @FindBy(how=How.XPATH,using = webCiTiYoutube)
    public WebElement youTube;
    @FindBy(how=How.XPATH,using = webContinueToYoutube)
    public WebElement continueToYoutube;
    @FindBy(how=How.XPATH,using = webCreditCards)
    public WebElement creditCards;
    @FindBy(how=How.XPATH,using = webBanking)
    public WebElement banking;
    @FindBy(how = How.XPATH,using = webLanding)
    public WebElement landing;
    @FindBy(how=How.XPATH,using = webInvesting)
    public WebElement investing;
    @FindBy(how=How.XPATH,using = webCiTiGold)
    public WebElement citiGold;
    public void getInit(){
        PageFactory.initElements(driver,Ci_Ti_BankHome.this);
    }
    public void OpenBrowserToCiTi_Bank() throws IOException {
        openBrowser();
    }
    public void validateVisibilityOfLogo(){
        getInit();
        boolean displayedLogo =  logo.isDisplayed();
        if (displayedLogo == true) {
            System.out.println("the CiTi Bank logo is displayed" );
        }else {
            System.out.println("the CiTi Bank logo is Not displayed");
        }
    }
    public void clickOnLogo(){
        logo.click();
    }
    public void validateHomePageTitle(){
        String actualTitle=driver.getTitle();
        System.out.println("citi home title=======> "+actualTitle);
        Assert.assertEquals(homePageExpectedTitle,actualTitle);
    }
    public void clickOnSearchIcon() {
        getInit();
        searchIcon.click();
    }
public void getTextContentMenu(){
  //  waitUntilVisible(By.xpath(webSearchCompleteContent));
    getInit();
    searchCompleteContent.getText();
}
public void searchInCiTiBank() throws InterruptedException {
    clickOnSearchIcon();
    searchField.sendKeys(searchKeyWord);
    searchButton.click();
    Thread.sleep(3000);
}
public void validateSearchTitle(){
        String actualTitle=driver.getTitle();
    System.out.println("search page title====> "+actualTitle);
    Assert.assertEquals(expectedSearchPagetitle,actualTitle);
    }
    public void scrolldownToFacebook() throws InterruptedException {
        getInit();
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView();", facebook);
        Thread.sleep(3000);
        facebook.click();
        Thread.sleep(3000);
        continueToFb.click();
        Thread.sleep(3000);
    }
public void validateCiTiFbTitle()  {
        String actualTitle=driver.getTitle();
        System.out.println("citi facebook title====> "+actualTitle);
        Assert.assertEquals(expectedCiTiFbTitle,actualTitle);
}
public void scrollDownToTwitter() throws InterruptedException {
    getInit();
    JavascriptExecutor js = (JavascriptExecutor) driver;
    js.executeScript("arguments[0].scrollIntoView();", twitter);
    Thread.sleep(3000);
    twitter.click();
    Thread.sleep(3000);
    continueToTwitter.click();
    Thread.sleep(3000);
}
public void validateCiTiTwitterTitle(){
    String actualTitle=driver.getTitle();
    System.out.println("citi twitter title====> "+actualTitle);
    Assert.assertEquals(expectedCiTiTwitterTitle,actualTitle);
}
public void scrollDownToYoutube() throws InterruptedException {
        getInit();
    JavascriptExecutor js = (JavascriptExecutor) driver;
    js.executeScript("arguments[0].scrollIntoView();", youTube);
    Thread.sleep(3000);
    youTube.click();
    Thread.sleep(3000);
    continueToYoutube.click();
    Thread.sleep(3000);
}
public void validateCiTiYoutubeTitle() {
    String actualTitle=driver.getTitle();
    System.out.println("citi youtube title====> "+actualTitle);
    Assert.assertEquals(expectedcitiYoutubeTitle,actualTitle);
}
public void mouseHoverToCreditCards() throws InterruptedException {
        getInit();
    mouseHoverWebElement(creditCards);
}
public void getCreditCardMenuText() throws InterruptedException {
        getInit();
    mouseHoverWebElement(creditCards);
    List<WebElement> list = driver.findElements(By.xpath(webCreditCards));
    for (WebElement element : list) {
        String text = element.getText();
        System.out.println(text);
    }
}
    public void mouseHoverToBanking() throws InterruptedException {
        getInit();
        mouseHoverWebElement(banking);
    }
    public void getBankingMenuText() throws InterruptedException {
        getInit();
        mouseHoverWebElement(banking);
        List<WebElement> list = driver.findElements(By.xpath(webBanking));
        for (WebElement element : list) {
            String text = element.getText();
            System.out.println(text);
        }
    }
    public void mouseHoverToLanding() throws InterruptedException {
        getInit();
        mouseHoverWebElement(landing);
    }
    public void getLandingMenuText() throws InterruptedException {
        getInit();
        mouseHoverWebElement(landing);
        List<WebElement> list = driver.findElements(By.xpath(webLanding));
        for (WebElement element : list) {
            String text = element.getText();
            System.out.println(text);
        }
    }
    public void mouseHoverToInvesting() throws InterruptedException {
        getInit();
        mouseHoverWebElement(investing);
    }
    public void getInvestingMenuText() throws InterruptedException {
        getInit();
        mouseHoverWebElement(investing);
        List<WebElement> list = driver.findElements(By.xpath(webInvesting));
        for (WebElement element : list) {
            String text = element.getText();
            System.out.println("investing text====>"+text);
        }
    }
    public void mouseHoverToCiTiGold() throws InterruptedException {
        getInit();
        mouseHoverWebElement(citiGold);
    }
    public void getCiTiGoldMenuText() throws InterruptedException {
        getInit();
        mouseHoverWebElement(citiGold);
        List<WebElement> list = driver.findElements(By.xpath(webCiTiGold));
        for (WebElement element : list) {
            String text = element.getText();
            System.out.println("citi logo text====>"+text);
        }
    }
}

