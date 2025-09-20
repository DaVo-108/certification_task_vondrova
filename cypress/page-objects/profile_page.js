import { BasePage } from "../common/base_page";
import { customElement } from "../helpers/custom_element";

export class ProfilePage extends BasePage {
  constructor() {
    super("/profile");
    this.logo = customElement("[data-testid='logo-img']");
  }

  logoIsVisible() {
    this.logo.isVisible();
  }
}
