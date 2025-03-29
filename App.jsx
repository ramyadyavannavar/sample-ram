// App.jsx
export default function App() {
    return <button>click me</button>;
    // in above you we are not using (), as it has only one tag.
} 

// App.jsx
export default function App() {
    return (
        <form>
            <input type="text" />
            <button type="submit">submit</button>
        </form>
    );
    // in above you we are using (), as it has many tags.
} 