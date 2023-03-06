import type { ResolverManifest } from "pixi.js";

export const manifest:ResolverManifest = {
    bundles: [
        {
            name : "bundleName",
            assets:
            {
                "Clampy from assets.ts!": "./clampy.png",
            }
        },
    ]
}