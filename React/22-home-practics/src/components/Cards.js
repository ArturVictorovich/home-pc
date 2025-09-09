import {useEffect} from "react"
import Card from "./Card.js"
import {useState} from "react"

function Cards({click}) {
  const URL_FactCats = "https://catfact.ninja/fact"
  const [facts, setFacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState("")
  useEffect(() => {
    ;(async function () {
      try {
        const reqest = await fetch(URL_FactCats)
        const response = await reqest.json()
        setLoading(false)
        setFacts(response)
        // console.log(response)
      } catch (error) {
        setErr(error.message)
      }
    })()
  }, [click])
  if (err) {
    return <h1>Ошибочка: {err}</h1>
  }
  return <>{loading ? <h1>Loading</h1> : <Card {...facts} />}</>
}

export default Cards
