# poctra landing

Static landing page for poctra.

## Preview

Open `index.html` directly in a browser.

## Deploy

Upload the full `tools/landing` folder to any static host. Keep the `assets` folder next to `index.html`, because screenshots, logo, and the debug APK are referenced locally.

## Verification

- APK: `assets/poctra-alpha-v1.0.0-debug.apk`
- Current SHA-256: `6B1B4E09DB9CF8329FD0BB0BD9BAE11193FA3045BBFCDC930D67946E1C0520C8`
- Previous submitted build report: https://www.virustotal.com/gui/file/87e34d05cf61b55607c970daa94c53024f8c30a559c25578a295ef95d37b447e?nocache=1

The VirusTotal link belongs to an earlier alpha artifact. Scan the current hash before publishing a verification claim for this APK.

## Files

- `index.html` - content and semantic structure
- `styles.css` - Poctra-inspired dark UI styling
- `script.js` - sticky header, smooth scrolling, and accessible image viewer
- `assets/` - logo, all current JPG screenshots, and alpha APK
