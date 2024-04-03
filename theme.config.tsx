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
  /*darkMode: true, */
  nextThemes: {
    defaultTheme: 'dark'
  },
  themeSwitch: {
    component: null,
  },
}

export default config
