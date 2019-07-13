import { h, Fragment } from 'preact'

import Header from './Header'
import Footer from './Footer'
export default function App({  }: any) {
  return (
    <div>
      <Header />
      <main>This site is great!</main>
      <Footer name="Basic TypeScript Preact" />
    </div>
  )
}
