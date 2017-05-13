import Link from 'next/link'
export default () => (
  <nav>
    <style jsx>{`
      nav {
        display: flex;
      }
    `}</style>
    <Link href='/'>
      <a>
        Home
      </a>
    </Link>
    <Link href='/chants'>
      <a>
        Chants
      </a>
    </Link>
    <style jsx>{`
      a {
        margin: 0 10px;
      }
    `}</style>
  </nav>
)
