import * as Linking from 'expo-linking';

export default {
  prefixes: [],
  config: {
    screens: {
      Root: {
        screens: {
          pairs: 'Pairs',
          main: {
            screens: {
              PairsScreen: 'main',
            },
          },
          currency: {
            screens: {
              CurrencyScreen: 'currency',
            },
          },
          course: {
            screens: {
              CourseScreen: 'course',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
