import React, { createContext, FC, useContext, useState } from "react"

export interface Store {
    foo: string
    setFoo: (newFoo: string) => void
    bar: string
    setBar: (newBar: string) => void
    fooBar: string
}

export const StoreContext = createContext<Store>({} as Store)
export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC = ({ children }) => {
    const [foo, setFoo] = useState<string>("old foo")
    const [bar, setBar] = useState<string>("old bar")

    const store: Store = {
        foo,
        setFoo,
        bar,
        setBar,
        fooBar: `${foo} ${bar}`
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
