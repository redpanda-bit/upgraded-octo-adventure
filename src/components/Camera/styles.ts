import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  innerContainer: {
    flex: 0.88,
    width: '95%',
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  shutter: {alignSelf: 'center'},
});
