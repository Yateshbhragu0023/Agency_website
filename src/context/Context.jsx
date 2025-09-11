import { createContext } from 'react'


export const MainContext = createContext()
export default function Context({ children }) {


  return (
    <MainContext.Provider>
      {children}
    </MainContext.Provider>
  )
}
