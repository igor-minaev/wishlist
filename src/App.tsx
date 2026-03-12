import './App.css'
import milk from "./assets/images/milk.jpg"
import bread from "./assets/images/bread.jpg"
import cheese from "./assets/images/cheese.jpg"
import fish from "./assets/images/fish.webp"
import tomatoes from "./assets/images/tomatoes.jpg"

const purchases = [
    {id: crypto.randomUUID(), title: "Milk", isDone: true, src: milk},
    {id: crypto.randomUUID(), title: "Bread", isDone: true, src: bread},
    {id: crypto.randomUUID(), title: "Cheese", isDone: true, src: cheese},
    {id: crypto.randomUUID(), title: "Fish", isDone: true, src: fish},
    {id: crypto.randomUUID(), title: "Tomatoes", isDone: true, src: tomatoes}
]

function App() {

    return (
        <div className="app">
            <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" checked={true}/> <span>HTML&CSS</span>
                    </li>
                    <li>
                        <input type="checkbox" checked={true}/> <span>JS</span>
                    </li>
                    <li>
                        <input type="checkbox" checked={false}/> <span>React</span>
                    </li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}

export default App
