import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');
const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const guidelineBaseWidth = 380;
const guidelineBaseHeight = 815;

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 54 : 66,
  IS_IOS: Platform.OS === 'ios',
  IS_IPHONE_X: () => {
    if (Platform.OS === 'web') {
      return false;
    }
    return (
      (Platform.OS === 'ios' &&
        ((height === X_HEIGHT && width === X_WIDTH) ||
          (height === X_WIDTH && width === X_HEIGHT))) ||
      (height === XSMAX_HEIGHT && width === XSMAX_WIDTH) ||
      (height === XSMAX_WIDTH && width === XSMAX_HEIGHT)
    );
  },
  scale: (size: number) => (width / guidelineBaseWidth) * size,
  verticalScale: (size: number) => (height / guidelineBaseHeight) * size,
  moderateScale: (size: number, factor = 0.25) =>
    size + (metrics.scale(size) - size) * factor,
};
export default metrics;
