function Test({ data }: { data?: string }) {
    return <h1>Displaying Test Component: {data || "No data displayed"}</h1>;
}

export default Test;
