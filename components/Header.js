import Link from 'next/link'
export default () => (
  <nav>
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
      nav {
        display: flex;
        align-items: center;
        height: 60px;
      }

      a {
        text-decoration: none;
        margin: 0 10px;
      }

      a:first-child {
        margin-left: 0;
      }

      a:last-child {
        margin-right: 0;
      }

      a:hover {
        color: black;
      }
    `}</style>
  </nav>
)
