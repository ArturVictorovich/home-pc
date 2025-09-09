import "./Btn.css"

function Button({onClick}) {
  return (
    <button onClick={onClick} className="btn">
      More facts!
    </button>
  )
}
export default Button
