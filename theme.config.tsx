import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from './components/logo'

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Logo />
    </div>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – UNBX'
    }
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: null,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  
  nextThemes: {
    defaultTheme: 'dark'
  },
  themeSwitch: {
    component: null,
  },
  head: (
    <>
      
      <meta property="og:description" content="The Ultimate NFT Experience" />
      <link rel="icon" type="image/png" href="/https://fastloyal-dev-image-storage.s3.eu-west-1.amazonaws.com//Group+1321315353+(2).png"></link>
    </>
  ),
  gitTimestamp: false,
  toc: false //dok ga ne sredimo bolje da ga nema
}

export default config
