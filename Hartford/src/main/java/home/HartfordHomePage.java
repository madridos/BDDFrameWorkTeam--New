package home;

import common.WebAPI;
import org.openqa.selenium.support.PageFactory;

import static home.WebElement.*;


public class HartfordHomePage extends WebAPI {
    public static HartfordHomePage homePage;
    public static void init(){
        homePage= PageFactory.initElements(driver,HartfordHomePage.class);
    }
    public static void goAuto(){
        clickOnElement(autoXpath,driver);
    }

}
