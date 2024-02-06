import { useState } from "react"

export default function Home(){
    const [peso,setPeso] = useState("")
    const [altura,setAltura] = useState("")
    const [result,setResult] = useState(<p>Seu Imc aqui!</p>)

    const Calculate = (({peso,altura})=>{
        const resulta = peso / (altura / 100)
        return setResult(resulta)
    })

    const handleSubmit =(ev)=>{
        ev.preventDefault()
        Calculate({peso,altura})
        setPeso("")
        setAltura("")
    }
    return(
        <div className="tab">
            <form onSubmit={handleSubmit}>
                <label htmlFor="peso">Peso</label>
                <input 
                type="number" 
                id="peso"
                onChange={(ev)=> setPeso(ev.target.value)}
                />
                <label htmlFor="altura">Altura</label>
                <input
                type="number"
                id="altura"
                onChange={(ev)=> setAltura(ev.target.value)}/>
                <button type="submit">Calcular</button>
            </form>
            <div className="imc">
                {result}
            </div>
        </div>
    )
}