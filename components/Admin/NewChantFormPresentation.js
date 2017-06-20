// @flow

type Props = {
  updateState: Function,
  handleSubmit: Function
}

const NewChantFormPresentation = (props: Props) => (
  <form>
    <p>
      Georgian Name:
      <input type='text' onChange={(e) => props.updateState({name: {ka: e.target.value}})} />
    </p>
    <button onClick={props.handleSubmit}>Submit</button>
  </form>
)

export default NewChantFormPresentation
