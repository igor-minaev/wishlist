import {ButtonHTMLAttributes} from "react";
import s from './Button.module.css'

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string
}

export const Button = ({name, ...rest}: ButtonPropsType) => {

    return (
        <button className={s.button}  {...rest}>{name}</button>
    );
};

