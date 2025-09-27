import { faker } from "@faker-js/faker";
import { LoginPage } from "../page-objects/login_page";
import { DashboardPage } from "../page-objects/dashboard_page";

describe("Atomic tests", { testIsolation: false }, () => {
  const profilePage = new DashboardPage();
  let username;
  let password;
  let email;

  before(() => {
    username = faker.internet.username();
    password = faker.internet.password();
    email = faker.internet.email();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    new LoginPage()
      .visit()
      .clickRegister()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegistr()
      .welcomeMessageIsVisible()
      .login(username, password);
  });

  context("Logo Test", () => {
    it("Logo is visible", () => {
      profilePage.logo.isVisible();
    });
  });

  context("Title Header", () => {
    it("Title Header is visible", () => {
      profilePage.headerTitle.isVisible();
    });

    it("Title Header contains text", () => {
      profilePage.headerTitle.containsText("Dashboard");
    });
  });

  context("Left menu", () => {
    it("Domů is visible", () => {
      profilePage.domuAnchor.isVisible();
    });

    it("Domů contains text", () => {
      profilePage.domuAnchor.containsText("Domů");
    });

    it.skip("Functionalities Test - anchor Domů - není implementováno", () => {});

    it("Účty is visible", () => {
      profilePage.uctyAnchor.isVisible();
    });

    it("Účty contains text", () => {
      profilePage.uctyAnchor.containsText("Účty");
    });

    it.skip("Functionalities Test - anchor Účty - není implementováno", () => {});

    it("Transakce is visible", () => {
      profilePage.transakceAnchor.isVisible();
    });

    it("Transakce contains text", () => {
      profilePage.transakceAnchor.containsText("Transakce");
    });

    it.skip("Functionalities Test - anchor Transakce - není implementováno", () => {});

    it("Podpora is visible", () => {
      profilePage.podporaAnchor.isVisible();
    });

    it("Podpora contains text", () => {
      profilePage.podporaAnchor.containsText("Podpora");
    });

    it.skip("Functionalities Test - anchor Podpora - není implementováno", () => {});
  });

  context("Details Profile", () => {
    it("Details Profile Header is visible", () => {
      profilePage.detailsProfileTitle.isVisible();
    });

    it("Details Profile Header contains text", () => {
      profilePage.detailsProfileTitle.containsText("Detaily Profilu");
    });

    it("Name is visible", () => {
      profilePage.nameTitle.isVisible();
    });

    it("Name contains text", () => {
      profilePage.nameTitle.containsText("Jméno");
    });

    it("Surname is visible", () => {
      profilePage.surnameTitle.isVisible();
    });

    it("Surname contains text", () => {
      profilePage.surnameTitle.containsText("Příjmení");
    });

    it("Email is visible", () => {
      profilePage.emailTitle.isVisible();
    });

    it("Email contains text", () => {
      profilePage.emailTitle.containsText("Email");
    });

    it("Phone is visible", () => {
      profilePage.phoneTitle.isVisible();
    });

    it("Phone contains text", () => {
      profilePage.phoneTitle.containsText("Telefon");
    });

    it("Age is visible", () => {
      profilePage.ageTitle.isVisible();
    });

    it("Age contains text", () => {
      profilePage.ageTitle.containsText("Věk");
    });

    it("Edit Profile Button is visible", () => {
      profilePage.editProfileButton.isVisible();
    });

    it("Edit Profile Button contains text", () => {
      profilePage.editProfileButton.containsText("Upravit profil");
    });

    it("Succesful Button Edit Profile", () => {
      profilePage.clickEditProfileButton();
      profilePage.detailsProfileFormIsVisible();
    });
  });

  context("Accounts", () => {
    it("Accounts title is visible", () => {
      profilePage.accountTitle.isVisible();
    });

    it("Accounts title contains text Účty", () => {
      profilePage.accountTitle.containsText("Účty");
    });

    it("Account Number Heading is visible", () => {
      profilePage.accountNumberHeading.isVisible();
    });

    it("Account Number Heading contains text Číslo účtu", () => {
      profilePage.accountNumberHeading.containsText("Číslo účtu");
    });

    it("Account Balance Heading is visible", () => {
      profilePage.accountBalanceHeading.isVisible();
    });

    it("Account Balance Heading contains text Zůstatek", () => {
      profilePage.accountBalanceHeading.containsText("Zůstatek");
    });

    it("Account Type Heading is visible", () => {
      profilePage.accountTypeHeading.isVisible();
    });

    it("Account Type Heading contains text Typ účtu", () => {
      profilePage.accountTypeHeading.containsText("Typ účtu");
    });

    it("Add Account Button is visible", () => {
      profilePage.addAccountButton.isVisible();
    });

    it("Add Account Button contains text Přidat účet", () => {
      profilePage.addAccountButton.containsText("Přidat účet");
    });

    it.skip("Functionalities Test - Add Account Button - není implementováno na FE", () => {});
  });

  context("Logout Button", () => {
    it("Logout Button is visible", () => {
      profilePage.logoutButton.isVisible();
    });

    it("Logout Button contains text", () => {
      profilePage.logoutButton.containsText("Odhlásit");
    });

    it("Functionalities Test - Button Logout", () => {
      profilePage.clickLogoutButton();
      profilePage.loginButtonIsVisible();
    });
  });
});
