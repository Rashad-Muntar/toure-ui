import { ChangeEventHandler } from "react";
export interface InputProps {
    label?: string;
    success?: boolean;
    id?: string;
    placeholder?: string;
    disable?: boolean;
    message?: string;
    error?: string;
    onChange?: ChangeEventHandler;
}
