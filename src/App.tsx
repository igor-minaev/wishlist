import './App.css'
import milk from "./assets/images/milk.jpg"
import bread from "./assets/images/bread.jpg"
import cheese from "./assets/images/cheese.jpg"
import fish from "./assets/images/fish.webp"
import tomatoes from "./assets/images/tomatoes.jpg"
import {PurchaseList, PurchaseType} from "./components/purchaselist/PurchaseList.tsx";
import {useState} from "react";

export type FilterType = "all" | "unbought" | "bought"


const purchases = [
    {id: crypto.randomUUID(), title: "Milk", isDone: true, src: milk},
    {id: crypto.randomUUID(), title: "Bread", isDone: true, src: bread},
    {id: crypto.randomUUID(), title: "Cheese", isDone: false, src: cheese},
    {id: crypto.randomUUID(), title: "Fish", isDone: true, src: fish},
    {id: crypto.randomUUID(), title: "Tomatoes", isDone: false, src: tomatoes}
]

const purchaseListTitle = "What to buy"

function App() {
    const [purchasesList, setPurchasesList] = useState<Array<PurchaseType>>(purchases)
    const [filter, setFilter] = useState<FilterType>("all")

    const removePurchase = (purchaseId: string) => {
        setPurchasesList(purchasesList.filter(p => p.id !== purchaseId))
    }
    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }

    const getFilteredPurchases = (purchasesList: Array<PurchaseType>, filter: FilterType): Array<PurchaseType> => {
        switch (filter) {
            case "bought":
                return purchasesList.filter(p => p.isDone)
            case "unbought":
                return purchasesList.filter(p => !p.isDone)
            default:
                return purchasesList
        }

    }

    const filteredPurchases = getFilteredPurchases(purchasesList, filter)
    return (
        <div className="app">
            <PurchaseList title={purchaseListTitle} purchases={filteredPurchases} removePurchase={removePurchase} changeFilter={changeFilter}/>
        </div>
    )
}

export default App
