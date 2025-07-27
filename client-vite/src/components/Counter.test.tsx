import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
    it("Increment counter on button click", async () => {
        render(<Counter />);
        // const button = screen.getByRole("button");
        const button = screen.getByTestId("button");
        const counterValue = screen.getByTestId("counter-value");

        expect(counterValue.textContent).toEqual("0");

        await userEvent.click(button);

        expect(counterValue.textContent).toEqual("1");
    });
});
