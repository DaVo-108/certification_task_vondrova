import { faker } from "@faker-js/faker";
import { LoginPage } from "../page-objects/login_page";
import { RegisterPage } from "../page-objects/register_page";
import { DashboardPage } from "../page-objects/dasboard_page";

describe("Atomic tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.username();
    password = faker.internet.password();
    email = faker.internet.email();
    new LoginPage().visit().clickRegister();
    new RegisterPage()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegistr()
      .welcomeMessageIsVisible();
    new LoginPage().login(username, password);
  });

  context("Logo Test", () => {
    it("Logo is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.logo.isVisible();
    });
  });

  context("Title Header", () => {
    it("Title Header is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.headerTitle.isVisible();
    });
    it("Title Header contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.headerTitle.containsText("Dashboard");
    });
  });

  context("Logout Button", () => {
    it("Logout Button is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.logoutButton.isVisible();
    });
    it("Logout Button contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.logoutButton.containsText("Odhlásit");
    });
    it("Functionalities Test - Button Logout", () => {
      const profilePage = new DashboardPage();
      profilePage.clicklogout();
      profilePage.loginButtonIsVisible();
    });
  });

  context("Left menu", () => {
    it("Domů is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.domuAnchor.isVisible();
    });
    it("Domů contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.domuAnchor.containsText("Domů");
    });
    it.skip("Functionalities Test - anchor Domů - není implementováno", () => {});
    it("Účty is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.uctyAnchor.isVisible();
    });
    it("Účty contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.uctyAnchor.containsText("Účty");
    });
    it.skip("Functionalities Test - anchor Účty - není implementováno", () => {});
    it("Transakce is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.transakceAnchor.isVisible();
    });
    it("Transakce contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.transakceAnchor.containsText("Transakce");
    });
    it.skip("Functionalities Test - anchor Transakce - není implementováno", () => {});
    it("Podpora is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.podporaAnchor.isVisible();
    });
    it("Podpora contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.podporaAnchor.containsText("Podpora");
    });
    it.skip("Functionalities Test - anchor Podpora - není implementováno", () => {});
  });
  context("Details Profile", () => {
    it("Details Profile Header is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.detailsProfileTitle.isVisible();
    });
    it("Details Profile Header contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.detailsProfileTitle.containsText("Detaily Profilu");
    });
    it("Name is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.nameTitle.isVisible();
    });
    it("Name contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.nameTitle.containsText("Jméno");
    });
    it("surname is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.surnameTitle.isVisible();
    });
    it("Surname contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.surnameTitle.containsText("Příjmení");
    });
    it("Email is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.emailTitle.isVisible();
    });
    it("Email contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.emailTitle.containsText("Email");
    });
    it("Phone is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.phoneTitle.isVisible();
    });
    it("Phone contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.phoneTitle.containsText("Telefon");
    });
    it("Age is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.ageTitle.isVisible();
    });
    it("Age contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.ageTitle.containsText("Věk");
    });
    it("Edit Profile Button is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.editProfileButton.isVisible();
    });
    it("Edit Profile Button contains text", () => {
      const profilePage = new DashboardPage();
      profilePage.editProfileButton.containsText("Upravit profil");
    });
    it("Succesful Button Edit Profile", () => {
      const profilePage = new DashboardPage();
      profilePage.clickEditProfileButton();
      profilePage.detailsProfileFormIsVisible();
    });
  });
  context("Accounts", () => {
    it("Accounts title is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.accountTitle.isVisible();
    });
    it("Accounts title contains text Účty", () => {
      const profilePage = new DashboardPage();
      profilePage.accountTitle.containsText("Účty");
    });
    it("Account Number Heading is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.accountNumberHeading.isVisible();
    });
    it("Account Number Heading contains text Číslo účtu", () => {
      const profilePage = new DashboardPage();
      profilePage.accountNumberHeading.containsText("Číslo účtu");
    });
    it("Account Balance Heading is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.accountBalanceHeading.isVisible();
    });
    it("Account Balance Heading contains text Zůstatek", () => {
      const profilePage = new DashboardPage();
      profilePage.accountBalanceHeading.containsText("Zůstatek");
    });
    it("Account Type Heading is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.accountTypeHeading.isVisible();
    });
    it("Account Type Heading contains text Typ účtu", () => {
      const profilePage = new DashboardPage();
      profilePage.accountTypeHeading.containsText("Typ účtu");
    });
    it("Add Account Button is visible", () => {
      const profilePage = new DashboardPage();
      profilePage.addAccountButton.isVisible();
    });
    it("Add Account Button contains text Přidat účet", () => {
      const profilePage = new DashboardPage();
      profilePage.addAccountButton.containsText("Přidat účet");
    });
    it.skip("Functionalities Test - Add Account Button - není implementováno na FE", () => {});
  });
});
