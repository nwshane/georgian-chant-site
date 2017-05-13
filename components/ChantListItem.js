import Link from 'next/link'

const ChantListItem = props => {
  const slug = props.data.get('slug')

  return (
    <li>
      <Link as={`/chants/${slug}`} href={`/chants/show?slug=${slug}`}>
        {props.data.get('name').get('ka')}
      </Link>
    </li>
  )
}

export default ChantListItem
