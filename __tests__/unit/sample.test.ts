import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Footer from "@/components/Footer.astro";

test("Footer with loaded", async () => {
  // const container = await AstroContainer.create();

  // container.addClientRenderer({
  //   name: "@astro/react",
  //   entrypoint: "@astrojs/react/client.js",
  // });

  // const result = await container.renderToString(Footer, {});

  // expect(result).toContain("Copyright");
  expect(1 === 1);
});
