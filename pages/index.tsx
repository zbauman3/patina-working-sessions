import type { NextPage } from 'next'
import Link from 'next/link';

const Index: NextPage = () => (
  <>
    <h1>Pages:</h1>
    <ul>
      <li><Link href="./home">Home</Link></li>
    </ul>
  </>
)

export default Index
