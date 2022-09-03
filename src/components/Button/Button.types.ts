import { MouseEventHandler } from "react"

export interface ButtonProps{
    text?: string
    primary?: boolean
    disable?: boolean
    size?: "small" | "medium" | "large"
    onClick?: MouseEventHandler<HTMLButtonElement>
}