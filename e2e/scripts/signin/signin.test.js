import SignInPage from 'e2e/pages/Signin/SignIn.page';

import Assert from 'e2e/assertions';
import Action from 'e2e/actions';

describe('SignIn screen', () => {
  beforeEach(async () => {
    await Action.launch(true);
  });
  it('should have all signin elements visible', async () => {
    await Assert.isVisible(SignInPage.usernameLabel);
    await Assert.isVisible(SignInPage.usernameInput);
    await Assert.isVisible(SignInPage.passwordLabel);
    await Assert.isVisible(SignInPage.passwordInput);
    await Assert.isVisible(SignInPage.signInButton);
    await Assert.isVisible(SignInPage.googleSignInButton);
  });

  it('should sign in with test google account', async () => {
    await element(SignInPage.googleSignInButton).tap();
    await Assert.isVisible(SignInPage.googleSignOutButton);
  });

  it('should sign in and sign out with test google account', async () => {
    await element(SignInPage.googleSignInButton).tap();
    await Assert.isVisible(SignInPage.googleSignOutButton);
    await element(SignInPage.googleSignOutButton).tap();
    await Assert.isVisible(SignInPage.googleSignInButton);
  });
});
