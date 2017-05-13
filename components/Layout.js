import Header from './Header'

export default (props) => (
  <div>
    <style jsx>{`
      div {
        max-width: 900px;
        margin: 0 auto;
      }
    `}</style>
    <Header />
    {props.children}
  </div>
)
