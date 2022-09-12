import { ReactNode } from "react"

export interface WrapProps {
    maxW: 'sm' | 'large' | 'xlarge'
    border?: string
    borderR?: 'sm' | 'large' | 'xlarge'
    overflow?: 'hide' | "show"
    children: ReactNode
}
