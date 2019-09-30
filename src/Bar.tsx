import React, { FC } from "react"
import { useStore } from "./StoreProvider"
import { Button } from "@material-ui/core"

const Bar: FC = () => {
    const { bar, setBar } = useStore()

    const changeBar = () => setBar("new bar")

    return (
        <>
            <p>{bar}</p>
            <Button variant="contained" onClick={changeBar}>
                Change Bar
            </Button>
        </>
    )
}

export default Bar
