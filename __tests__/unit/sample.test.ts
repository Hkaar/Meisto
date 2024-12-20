import { expect, test } from "vitest";
import Footer from "@/components/Footer.astro";

import { createReactContainer } from "__tests__/lib";

test("Footer with loaded", async () => {
  const container = await createReactContainer();

  const result = await container.renderToString(Footer, {});

  expect(result).toContain("Copyright");
});
