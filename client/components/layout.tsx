import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import "tabler-react/dist/Tabler.css";
import { Card, Button } from "tabler-react";

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> | {' '}
        <Link href='/about'><a>About</a></Link>
      </nav>
    </header>
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Body>
        <Button color="primary">A Button</Button>
      </Card.Body>
    </Card>
    {children}
    <footer>
      <hr />
      <span>made with &#x2764; from Honest Food Tech</span>
    </footer>
  </div>
)

export default Layout