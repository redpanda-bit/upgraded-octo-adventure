import testIDs from 'src/test-ids';

class SignInPage {
  get labeledInputUsername() {
    return by.id(testIDs.page.signin.labeledInputUsername);
  }
  get labeledInputPassword() {
    return by.id(testIDs.page.signin.labeledInputPassword);
  }
  get usernameLabel() {
    return by.id(testIDs.page.signin.usernameLabel);
  }
  get usernameInput() {
    return by.id(testIDs.page.signin.usernameInput);
  }
  get passwordLabel() {
    return by.id(testIDs.page.signin.passwordLabel);
  }
  get passwordInput() {
    return by.id(testIDs.page.signin.passwordInput);
  }
  get signInButton() {
    return by.id(testIDs.page.signin.signinBtn);
  }
}

export default new SignInPage();
