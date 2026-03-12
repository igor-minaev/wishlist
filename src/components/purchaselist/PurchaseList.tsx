import {Purchase} from "./purchase/Purchase.tsx";

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
}

export const PurchaseList = ({title, purchases, removePurchase}: PurchaseListPropsType) => {
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
                <button>All</button>
                <button>Unbought</button>
                <button>Bought</button>
            </div>
        </div>
    );
};
