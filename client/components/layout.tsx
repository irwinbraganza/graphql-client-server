import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import "tabler-react/dist/Tabler.css";
import { Site, Page, Nav } from "tabler-react";

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <Site>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Page>
      <Site.Header>
        <nav>
          <Link href='/'><a>Home</a></Link> | {' '}
          <Link href='/about'><a>About</a></Link>
        </nav>
      </Site.Header>
      <Site.Nav>
        <Nav>
          <Nav.Item to="/actions" active icon="home" value="Actions" />
          <Nav.Item to="/incidents" icon="box" value="Incidents" />
          <Nav.Item to="/history" icon="calendar" value="History" />
          <Nav.Item to="/settings" icon="settings" value="Settings" />
        </Nav>
      </Site.Nav>
      <Page.Content>
        {children}
      </Page.Content>
    </Page>
    <Site.Footer>
      <footer>
        <span>made with &#x2764; from Honest Food Tech</span>
      </footer>
    </Site.Footer>
  </Site>
)

export default Layout