// arquivo de exemplo de uso de Context API

import { createContext, useContext, useState } from 'react'

const UmContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(UmContext)

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        Alterar ciclo ativo
      </button>
    </h1>
  )
}

function CountDown() {
  const { activeCycle } = useContext(UmContext)

  return <h1>{activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <UmContext.Provider value={{ activeCycle, setActiveCycle }}>
      <NewCycleForm />
      <CountDown />
    </UmContext.Provider>
  )
}
