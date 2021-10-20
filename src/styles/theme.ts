import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    'green.800': '#1B873F',
    'pink.600': '#FF008E',
    'orange.600': '#FF7A29',
    'yellow.600': '#FFCD1E',
    'gray.950': '#09090A',
    'gray.900': '#121214',
    'gray.700': '#202024',
    'gray.600': '#29292E',
    'gray.500': '#8D8D99',
    'gray.300': '#C4C4CC',
    'gray.200': '#E1E1E6',
  },
  components: {
    Button: {
      variants: {
        brand: {
          p: '10',
          bg: 'pink.600',
        },
      },
    },
  },
})

type CustomThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
