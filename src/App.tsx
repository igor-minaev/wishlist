import './App.css'
import milk from "./assets/images/milk.jpg"
import bread from "./assets/images/bread.jpg"
import cheese from "./assets/images/cheese.jpg"
import fish from "./assets/images/fish.webp"
import tomatoes from "./assets/images/tomatoes.jpg"
import {PurchaseList, PurchaseType} from "./components/purchaselist/PurchaseList.tsx";
import {useState} from "react";


const purchases = [
    {id: crypto.randomUUID(), title: "Milk", isDone: true, src: milk},
    {id: crypto.randomUUID(), title: "Bread", isDone: true, src: bread},
    {id: crypto.randomUUID(), title: "Cheese", isDone: true, src: cheese},
    {id: crypto.randomUUID(), title: "Fish", isDone: true, src: fish},
    {id: crypto.randomUUID(), title: "Tomatoes", isDone: true, src: tomatoes}
]

const purchaseListTitle = "What to buy"

function App() {
    const [purchasesList, setpurchasesList] = useState<Array<PurchaseType>>(purchases)

    const removePurchase = (purchaseId: string) => {
        setpurchasesList(purchasesList.filter(p => p.id !== purchaseId))
    }
    return (
        <div className="app">
            <PurchaseList title={purchaseListTitle} purchases={purchasesList} removePurchase={removePurchase}/>
        </div>
    )
}

export default App
