import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { generate as generateTypescriptClientFromOpenAPI } from "openapi-typescript-codegen";

import { readFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOCAL_OPEN_API_SPEC_PATH = resolve(__dirname, "./open-api.json");
const OUTPUT_DIRECTORY = resolve(__dirname, "../generated");

const main = async () => {
  const openApiSpec = JSON.parse(
    readFileSync(LOCAL_OPEN_API_SPEC_PATH, "utf-8"),
  );

  /**
   * Generate Cloud Service
   */
  await generateTypescriptClientFromOpenAPI({
    input: openApiSpec,
    output: OUTPUT_DIRECTORY,
    useOptions: true,
    useUnionTypes: true,
    clientName: "Cloud",
  });
  console.log(`✅ Successfully generated Cloud TypeScript client!`);
};

main().catch((e) => {
  console.error(`❌ Error generating Cloud TypeScript client:`);
  console.error(e);
});
