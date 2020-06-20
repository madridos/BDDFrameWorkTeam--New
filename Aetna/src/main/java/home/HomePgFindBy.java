package home;

import common.WebAPI;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import webelements.HomePageWebElement;


public class HomePgFindBy extends HomePageWebElement {


@FindBy(how=How.XPATH,using=LoginXpath)
    public WebElement login;
public void clickLogin(){
    login.click();
}

}
