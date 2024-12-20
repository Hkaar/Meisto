import { experimental_AstroContainer as AstroContainer } from "astro/container";

import reactRenderer from "@astrojs/react/server.js";

async function createReactContainer() {
    const container = await AstroContainer.create();

    // Add React renderer
    container.addServerRenderer({
        name: "@astrojs/react",
        renderer: reactRenderer,
    });

    container.addClientRenderer({
        name: "@astrojs/react",
        entrypoint: "@astrojs/react/client.js",
    });

    return container;
}

export { createReactContainer };
