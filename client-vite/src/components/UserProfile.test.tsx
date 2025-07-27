import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("UserProfile", () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn();
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it("Fetch and displays the user data", async () => {
        (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
            json: async () => ({ id: 4, name: "John", email: "john@gmail.com" }),
        });

        render(<UserProfile userId={1} />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByRole("heading", { name: /John/i })).toBeInTheDocument();
            expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
        });
    });
});
