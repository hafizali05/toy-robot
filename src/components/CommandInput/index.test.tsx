import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../../App";

describe("Command input section", () => {
    it("should load command input", () => {
        render(<App />)
    })
})