import { config } from "@workspace/eslint-config/base"

/** @type {import("eslint").Linter.Config} */
export default [ ...config, {ignores: ["src/api-client/**/*"]}]
