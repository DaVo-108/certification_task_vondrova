import { BasePage } from "../common/base_page";
import { customElement } from "../helpers/custom_element";

export class DashboardPage extends BasePage {
  constructor() {
    super("/dashboard");
    this.logo = customElement("[data-testid='logo-img']");
  }

  logoIsVisible() {
    this.logo.isVisible();
  }
}
