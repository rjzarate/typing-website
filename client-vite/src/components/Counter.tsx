import { useCounter } from "../hooks/useCounter";

function Counter() {
    const { count, increment } = useCounter();
    return (
        <div>
            <p data-testid="counter-value">{count}</p>
            <button data-testid="button" onClick={() => increment()}>
                count is {count}
            </button>
        </div>
    );
}

export default Counter;
