import { InputHTMLAttributes } from "react"
import { Inputt } from "./style"

interface IinputProps extends InputHTMLAttributes<HTMLInputElement> {}
    

export default function Input( props: IinputProps ) {
    return(
        <Inputt {...props}/>
    )
}
