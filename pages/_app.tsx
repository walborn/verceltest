import App from 'next/app'
import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const orange: DefaultTheme = {
  border: {
    color: '#e7eaf3',
  },
  button: {
    font: '#ffffff',
    background: '#ffa727',
    border: 'transparent',
  },
  footer: {
    background: '#39291d',
    link: `
    color: #8a7873
    &:hover {
      color: #958580
    }`,
  },
  background: {
    color: '#fafbfe',
    gradient: 'radial-gradient(ellipse closest-side at 50% 50%, #3a3f45, #37383c 25%, #fafbfe)',
    nav: '#2C2A2B',
  },
  link: {
    default: '#ffd152',
    hover: '#ebac00',
    visited: '#3b9b6d',
  },
  font: {
    default: '16px/1.5 normal normal',
    color: { text: '#5d616f', title: '#ffa727' },
    highlight: '#78b0a0',
    family: "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    size: '1rem',
  },
  color: {
    failure: '#e96861',
    white: '#ffffff',
    orange: '#ffa727',
    gray: {
      dark: '#5d616f',
      mouse: '#9E9E9E',
      silver: '#CECECE',
      pale: '#e7eaf3',
      light: '#fafbfe',
    },
    gold: '#fdc073',
    red: '#e96861',
    brown: { light: '#9b6b6b', dark: '#414141', pitch: '#373636' },
    blue: { light: '#4d99f5', dark: '#3f51b5' },
    green: { light: '#36be7c' },
  },
  shadow: {
    index: 'inset 0 1px 1px #e7eaf3, 0 0 8px #e7eaf3',
    hover: 'inset 0 1px 1px #d4d8df, 0 0 8px #d4d8df',
  },
  MAX_INT: 2147483647,
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={orange}>
        <ToastContainer />
        <NextNprogress
          color="orange"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
