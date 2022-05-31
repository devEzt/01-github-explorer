import { useState } from 'react'

//hook -> gancho

//imutabilidade

// usuarios = ['diego3g', 'diegosf', 'danileao']

// usuarios.push('rafacamarda')

//No estado do react quando queremos adicionar uma nova info no array, a gente sempre vai criar um novo

// novoUsuarios = [...usuarios, 'rafacamarda']

export function Counter() {
  //const x let
  const [counter, setCounter] = useState(0)

  //let it change - deixa isso mudar.

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
