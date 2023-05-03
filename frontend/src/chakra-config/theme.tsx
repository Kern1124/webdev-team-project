import { extendTheme } from "@chakra-ui/theme-utils";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        padding: 0,
        margin: 0,
        fontFamily: `'Roboto', sans-serif`,
        bgColor: "secondaryLight"
      },
    },
  },
  colors: {
    main: "#2C3639",
    mainLight: "#3F4E4F",
    secondary: "#A27B5C",
    secondaryLight: "#DCD7C9",
    light: "##FFFFFF"
  },
});

export default theme;
