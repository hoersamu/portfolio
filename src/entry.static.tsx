import { qwikCityGenerate } from "@builder.io/qwik-city/static/node";
import { join } from "path";
import { fileURLToPath } from "url";
import render from "./entry.ssr";

qwikCityGenerate(render, {
  origin: "https://hoera.dev",
  outDir: join(fileURLToPath(import.meta.url), "..", "..", "dist"),
});
