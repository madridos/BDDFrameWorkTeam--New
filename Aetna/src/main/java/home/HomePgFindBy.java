package home;


import common.WebAPI;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import static home.WebElement.*;

public class HomePgFindBy extends WebAPI {
    public static HomePgFindBy homePgFindBy;
 public static void init() {
     homePgFindBy= PageFactory.initElements(driver,HomePgFindBy.class);
 }

 public static void shoopPlan() throws InterruptedException {
     clickOnElement(planXp,driver);
     Thread.sleep(4000);
 }
public static void setMedicare() throws InterruptedException {
    clickOnElement(medicareXpath,driver);
    //mouseHoverByXpath(medicareXpath);
    Thread.sleep(4000);
}
//public static void findPlan() throws InterruptedException {
//     clickOnElement(findPlanXp,driver);
//    Thread.sleep(4000);
//}
//public static void selectChoice() throws InterruptedException {
//     clickOnElement(indexXpath,driver);
//     Thread.sleep(4000);
//}
}
