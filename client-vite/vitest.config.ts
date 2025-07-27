import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "jsdom",
        globals: true,
        coverage: {
            enabled: true,
            include: ["src/**/*.tsx", "src/**/*.ts"],
            reporter: ["text", "json-summary", "json", "html"],
            reportOnFailure: true,
            reportsDirectory: "./coverage",
            thresholds: {
                lines: 50,
                branches: 50,
                functions: 50,
                statements: 50,
            },
        },
    },
});
