export default (message: string): void => {
  if (__DEV__) {
    console.log('**LOG** ', message);
  }
};
