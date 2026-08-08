# Markdown to Image — Release 2.0

> A private, local workflow for turning Markdown into shareable output.

## What you can export

- **PNG** for crisp screenshots and social posts
- **JPG** when a smaller raster file is useful
- **SVG** as a scalable image container
- A full-page preview that can be printed or saved as PDF

## Example

```js
const output = {
  format: "png",
  processing: "local",
  accountRequired: false
};
```

| Format | Useful for |
| --- | --- |
| PNG | Documentation and social posts |
| JPG | Compact image sharing |
| SVG | Scalable placement in design tools |

**Privacy note:** Markdown content stays inside the extension. Remote images included in a document may still be requested from their original hosts.
