import Helpers from "../helpers";

export class HomePage extends Helpers {
  private readonly signIn = "=Gmail";

  async clickOnSignIn() {
    await this.clickElement(this.signIn);
  }
}
