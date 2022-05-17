import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: "#4a4f4f",
    secondary: "#D3D3D3"
  },
  fonts: {
    body: "Poppins"
  },
  components: {
    Button: {
      variants: {
        outlined: {
          _hover: {
            outline: "none",
            backgroundColor: "#A0A0A0"
          },
          transition: "0.2s ease-in"
        }
      }
    },
    FormLabel: {
      baseStyle: {
        width: "24%",
        color: "primary",
        fontFamily: "Poppins",
        fontSize: "18px"
      }
    },
    Input: {
      variants: {
        primaryInput: {
          baseStyle: {
            border: "4px solid red",
            borderRadius: "4px",
            _focus: {
              outlineStyle: "none",
              boxShadow: "none"
            },
            _hover: {
              outline: "none",
              borderColor: "secondary"
            },
            _active: {
              outline: "none"
            }
          }
        }
      }
    }
  }
})

export default theme
