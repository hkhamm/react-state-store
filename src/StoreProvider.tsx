import React, { createContext, FC, useContext, useState } from "react"

export interface Store {
    storeA: {
        a: number
        setA: (newA: number) => void
    }
    storeB: {
        b: number
        setB: (newB: number) => void
    }
    storeC: {
        c: number
    }
}

export const StoreContext = createContext<Store>({} as Store)

export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC = ({ children }) => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    const store: Store = {
        storeA: {
            a,
            setA
        },
        storeB: {
            b,
            setB
        },
        storeC: {
            c: a + b
        }
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
