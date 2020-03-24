import { Platform, PixelRatio } from 'react-native';

function normalize(size) {
    if (Platform.OS === 'ios') {
        // return size;
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        // return size;
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
    }
}

const colors = {
    primary: '#663C92',
    primaryDark: '#57347C',
    white: '#FFFFFF',
    danger: '#ED5181',
    dangerDark: '#BD4066',
    sucess: '#8cba51'
}

const sizes = {
    tiny: normalize(10),
    small: normalize(11),
    medium: normalize(12),
    regular: normalize(14),
    big: normalize(16),
    larger: normalize(18),
    bigTitle: normalize(20),
    bigger: normalize(23),
    strongest: normalize(28),
    thanos: normalize(35),
}

const fonts = {
    base: {
        fontFamily: "Gilroy-Light",
        fontSize: sizes.big,
    },
    title: {
        fontFamily: "Gilroy-Bold",
        fontSize: sizes.strongest
    },
    caption: {
        fontFamily: "Gilroy-Medium",
        fontSize: sizes.bigger
    },
    h1: {
        fontFamily: "Gilroy-Light",
        fontSize: sizes.strongest
    },
    h2: {
        fontFamily: "Gilroy-Light",
        fontSize: sizes.bigTitle
    }
}

export {
    sizes,
    fonts,
    colors
}