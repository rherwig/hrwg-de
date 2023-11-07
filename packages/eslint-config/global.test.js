import { describe, expect, it } from "vitest";
import { ESLint } from "eslint";

import config from ".";
import vueConfig from "./vue";

const createEngine = baseConfig => {
    return new ESLint({
        useEslintrc: false,
        baseConfig
    });
};

const checkValidity = engine => {
    it("is valid configuration", () => {
        expect(async () => engine.lintText("")).not.toThrow();
    });
};

const checkLintingErrors = engine => {
    it("does not produce linting errors", async () => {
        const lintResults = await engine.lintText("");
        expect(lintResults[0].errorCount).toBe(0);
    });
};

describe("base config", () => {
    const engine = createEngine(config);

    checkValidity(engine);
    checkLintingErrors(engine);
});

describe("vue config", () => {
    const engine = createEngine(vueConfig);

    checkValidity(engine);
    checkLintingErrors(engine);
});
