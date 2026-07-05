// Validates data/resume.json against the vendored JSON Resume v1.0.0 schema
// (data/resume.schema.json, pinned from
// https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json
// — vendored rather than fetched at build time so CI stays hermetic).
// Run via `npm run resume:validate`; first step of `npm run build`.
import Ajv from "ajv-draft-04";
import addFormats from "ajv-formats";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const schema = JSON.parse(
  readFileSync(path.join(ROOT, "data/resume.schema.json"), "utf8")
);
const resume = JSON.parse(
  readFileSync(path.join(ROOT, "data/resume.json"), "utf8")
);

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const validate = ajv.compile(schema);
const valid = validate(resume);

if (!valid) {
  console.error("data/resume.json failed JSON Resume schema validation:");
  for (const err of validate.errors ?? []) {
    console.error(`  ${err.instancePath || "(root)"} ${err.message}`);
  }
  process.exit(1);
}

console.log("data/resume.json is valid.");
