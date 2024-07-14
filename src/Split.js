import { useState } from "react"
import { formatTime } from "./formatTime"

const Split = (time) => {
    const [splits, setSplits] = useState([])
    const addSplit = (time) => {
        setSplits((prevSplits) => [...prevSplits, formatTime(time)]);
    };
    return { splits, addSplit, setSplits }
}
export default Split;