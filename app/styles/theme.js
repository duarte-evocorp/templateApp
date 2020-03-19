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
    white: '#FFFFFF'
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
    title: {
        fontFamily: "Gilroy-Bold",
        fontSize: sizes.strongest
    },
    h1: {
        fontFamily: "Gilroy-Light",
        fontSize: sizes.strongest
    }
}

export {
    sizes,
    fonts,
    colors
}