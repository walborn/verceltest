// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    footer: {
      background: string
      link: string
    }
    button: {
      font: string
      background: string
      border: string
    }
    border: {
      color: string
    }
    background: {
      color: string
      gradient: string
      nav: string
    }
    button: {
      color: string
    }
    link: {
      default: string
      hover: string
      visited: string
    }
    font: {
      default: string
      color: {
        text: string
        title: string
      }
      highlight: string
      family: string
      size: string
    }
    color: {
      failure: string
      white: string
      orange: string
      gray: {
        dark: string
        mouse: string
        silver: string
        pale: string
        light: string
      }
      gold: string
      red: string
      brown: {
        light: string
        dark: string
        pitch: string
      }
      blue: {
        light: string
        dark: string
      }
      green: {
        light: string
      }
    }
    shadow: {
      index: string
      hover: string
    }
    MAX_INT: number
  }
}
