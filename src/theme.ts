import { createTheme } from '@mui/material/styles'
import { amber, red } from '@mui/material/colors'
import { light } from '@mui/material/styles/createPalette'
import { PaletteMode, Theme, ThemeOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface Palette {
    customBorder?: Palette['primary']
  }
  interface PaletteOptions {
    customBorder?: PaletteOptions['primary']
  }
}

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: 'Lato'
  },
  spacing: 8,
  shape: {
    borderRadius: 4
  },
  palette: {
    mode,
    primary: {
      main: '#2089D5'
    },
    secondary: {
      main: '#B3F2DD'
    },
    warning: {
      main: '#F79824'
    },
    ...(mode == 'light'
      ? {
          background: {
            default: '#fff',
            paper: '#f5f5f5'
          },
          customBorder: {
            main: '#CCCCCC'
          }
        }
      : {
          background: {
            default: '#0e0e0e',
            paper: '#292929'
          },
          customBorder: {
            main: '#707070'
          }
        })
  }
})
