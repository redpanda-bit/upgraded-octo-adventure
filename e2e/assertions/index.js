import Actions from '../actions';

export const isVisible = async (matcher, timeout = 5000) => {
  await Actions.waitForVisible(matcher, timeout);
  await expect(element(matcher)).toBeVisible();
};

export default {
  isVisible,
};
