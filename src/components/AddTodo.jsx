import {useState} from 'react'

const AddTodo = ({onAdd}) => {
    const [text, setText] = useState("")

    const handleSumbit = event => {
        event.preventDefault()
        if (text.trim()) {
            onAdd(text)
            setText("")
        }
    }
  return (
    <>
        <form className='d-flex p-3 gap-3' onSubmit={handleSumbit}>
            <input
                className='form-control'
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button className="btn btn-info text-dark">sumbit</button>
        </form>
    </>
  )
}

export default AddTodo