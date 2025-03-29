// Counter.jsx 👈 file name.
import { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button>count : {count}</button>
        </div>
    );
}