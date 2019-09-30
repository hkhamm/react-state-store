import React, { FC } from "react"
import { useStore } from "./StoreProvider"
import { Button } from "@material-ui/core"

const Foo: FC = () => {
    const { foo, setFoo } = useStore()

    const changeFoo = () => setFoo("new foo")

    return (
        <>
            <p>{foo}</p>
            <Button variant="contained" onClick={changeFoo}>
                Change Foo
            </Button>
        </>
    )
}

export default Foo
