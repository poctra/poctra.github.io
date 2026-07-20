# poctra

**pocket octra** is a consumer wallet experience for Octra and EVM accounts. It brings assets, identity-aware transfers, privacy operations, bridge recovery, swaps, dApps, and `oct://` Circle apps into one mobile interface.

[Visit the website](https://m-tq.github.io/poctra/) · [Download the alpha APK](https://m-tq.github.io/poctra/assets/poctra-alpha-v1.0.0-debug.apk)

## Highlights

- Manage generated and imported Octra wallets from one account drawer.
- Use Octra and derived EVM accounts with network-specific assets and activity.
- Resolve Octra Identity and ENS names before approving a recipient.
- Review recipients, network fees, gas options, and transaction progress before execution.
- Bridge OCT and wOCT with resumable progress, history, and eligible claim recovery.
- Swap wOCT, ETH, and USDT with slippage, liquidity, price-impact, and MEV-routing context.
- Open regular web dApps and decentralized Circle resources through the in-app browser.
- Protect wallet access and key disclosure with the configured device security method.

## Install The Alpha

1. Download `poctra-alpha-v1.0.0-debug.apk` from the website.
2. Verify the SHA-256 digest before installing.
3. Allow installation from the browser or file manager selected on your Android device.
4. Begin with a burner wallet and low-value assets while evaluating the alpha release.

Current APK SHA-256:

```text
6B1B4E09DB9CF8329FD0BB0BD9BAE11193FA3045BBFCDC930D67946E1C0520C8
```

An [earlier alpha build is available on VirusTotal](https://www.virustotal.com/gui/file/87e34d05cf61b55607c970daa94c53024f8c30a559c25578a295ef95d37b447e?nocache=1). The report belongs to a different artifact, so always compare the hash shown by the report with the APK you install.

## Remote dApp Catalog

Poctra loads the Explore catalog from:

```text
https://poctra.github.io/assets/dapp_list.json
```

Each entry contains four required fields:

```json
{
  "title": "Example dApp",
  "description": "A short description for users.",
  "dapp_link": "https://example.org",
  "logo_svg": "data:image/svg+xml;base64,..."
}
```

`dapp_link` accepts an HTTPS dApp URL, an `oct://` Circle URI, an Octra Identity name such as `app.foo.oct`, or a valid Octra address. `logo_svg` must be a Base64 SVG data URI. The Android client validates entry lengths, links, SVG payloads, response size, and duplicate destinations before displaying the catalog.

Publishing a catalog update only requires editing [`assets/dapp_list.json`](./assets/dapp_list.json) and deploying the landing site. Installed clients cache the last valid response and periodically check for updates.

## Local Preview

Serve the folder through any static HTTP server. For example:

```powershell
cd tools/landing
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish

The site is designed for static hosting. Publish the contents of `tools/landing` at the root of the GitHub Pages site and keep the `assets` directory beside `index.html`.

Important public files:

- `index.html` - semantic landing-page content.
- `styles.css` - responsive poctra visual system.
- `script.js` - navigation and accessible image viewer behavior.
- `assets/dapp_list.json` - remote Explore catalog consumed by the wallet.
- `assets/*.jpg` - product screenshots.
- `assets/poctra.svg` - product logo.
- `assets/poctra-alpha-v1.0.0-debug.apk` - published Android alpha artifact.

## Safety

Poctra is alpha software. Keep recovery material private, verify the active network and destination before signing, and use only software and contracts you trust.
