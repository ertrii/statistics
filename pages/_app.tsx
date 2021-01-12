import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />
}
