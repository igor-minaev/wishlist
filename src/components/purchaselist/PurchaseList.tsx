import {Purchase} from "./purchase/Purchase.tsx";
import {FilterType} from "../../App.tsx";

export type PurchaseType = {
    id: string
    title: string
    isDone: boolean
    src: string
}

type PurchaseListPropsType = {
    title: string
    purchases: Array<PurchaseType>
    removePurchase: (purchaseId: string) => void
    changeFilter: (filter: FilterType) => void
}

export const PurchaseList = ({title, purchases, removePurchase, changeFilter}: PurchaseListPropsType) => {
    const purchasesList = purchases.length
        ? <ul>
            {purchases.map(p => (
                <Purchase {...p} removePurchase={removePurchase}/>
            ))}
        </ul>
        : <span>Your purchases list is empty!</span>

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {purchasesList}
            <div>
                <button onClick={() => changeFilter("all")}>All</button>
                <button onClick={() => changeFilter("unbought")}>Unbought</button>
                <button onClick={() => changeFilter("bought")}>Bought</button>
            </div>
        </div>
    );
};
