import SignInPage from 'e2e/pages/Signin/SignIn.page';

import Assert from 'e2e/assertions';
import Action from 'e2e/actions';

describe('Camera screen', () => {
  beforeEach(async () => {
    await Action.launch(true);
    await Action.tap(SignInPage.cameraButton);
  });

  it('all elements are visible', async () => {
    await Assert.isVisible(CameraPage.backButton);
    await Assert.isVisible(CameraPage.cameraView);
    await Assert.isVisible(CameraPage.shutter);
  });

  it('takes picture and shows the picture', async () => {
    await Action.tap(CameraPage.shutter);
    await Assert.isVisible(CameraPage.picture);
  });

  it('deletes the picture', async () => {
    await Action.tap(CameraPage.shutter);
    await Assert.isVisible(CameraPage.picture);
    await Action.tap(CameraPage.deletePicture);
    await Assert.isVisible(CameraPage.cameraView);
  });
});
