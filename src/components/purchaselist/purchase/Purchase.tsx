import {PurchaseType} from "../PurchaseList.tsx";
import s from "./Purchase.module.css"

type PurchasePropsType = {
    removePurchase: (purchaseId: string) => void
} & PurchaseType

export const Purchase = ({id, isDone, src, title, removePurchase}: PurchasePropsType) => {
    return (
        <li className={s.item} key={id}>
            <input type="checkbox" checked={isDone}/> <img className={s.img} src={src} alt={title}/><span>{title}</span>
            <button onClick={() => removePurchase(id)}>x</button>
        </li>
    );
};
