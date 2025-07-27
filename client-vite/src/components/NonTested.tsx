function Test({ data }: { data?: string }) {
    return <h1>This is not tested: {data || "No data displayed"}</h1>;
}

export default Test;
