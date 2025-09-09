import "./CardStyle.css"

function Card({fact, click}) {
  return (
    <div className="card">
      <h1>{fact}</h1>
    </div>
  )
}

export default Card
