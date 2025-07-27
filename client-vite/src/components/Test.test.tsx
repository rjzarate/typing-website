import { render, screen } from "@testing-library/react";
import Test from "./Test";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Test", () => {
    it("Renders no data", () => {
        render(<Test />);
        expect(screen.getByText("Displaying Test Component: No data displayed")).toBeInTheDocument();
    });

    it("Renders data", () => {
        render(<Test data={"Test String"} />);
        expect(screen.getByText("Displaying Test Component: Test String")).toBeInTheDocument();
    });
});
