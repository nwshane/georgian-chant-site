import Header from './Header'
import GlobalStyle from './GlobalStyle'

export default (props) => (
  <div>
    <GlobalStyle />
    <Header />
    {props.children}
    <style jsx>
      {`
        div {
          max-width: 900px;
          margin: 0 auto;
          font-size: 1.6rem;
          font-family: 'Open Sans', sans-serif;
        }
      `}
    </style>
  </div>
)
