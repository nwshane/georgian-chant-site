import Link from 'next/link'

const ChantListItem = props => {
  const slug = props.data.get('slug')

  return (
    <li>
      <Link as={`/chants/${slug}`} href={`/chants/show?slug=${slug}`}>
        <a>
          {props.data.get('name').get('ka')}
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </li>
  )
}

export default ChantListItem
