# Anyrow TypeScript SDK

[![MIT License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

Official TypeScript/JavaScript SDK for the [Anyrow](https://anyrow.ai) API. Runs in browsers and on Node, Bun, Deno, and Cloudflare Workers — any runtime with `fetch`.

## Installation

```bash
npm install @anyrow/sdk
# or: pnpm add @anyrow/sdk
# or: yarn add @anyrow/sdk
# or: bun add @anyrow/sdk
# or: deno add jsr:@anyrow/sdk
```

## Quick start

```ts
import { AnyrowSDK } from "@anyrow/sdk"

const client = new AnyrowSDK({
  baseURL: "https://api.anyrow.ai",
  headers: { Authorization: "Bearer YOUR_API_KEY" },
})

const result = await client.extract.once({
  params: { project_id: "proj_123" },
  json: { url: "https://example.com/document.pdf" },
})
```

## Resources

- [OpenAPI spec](https://anyrow.ai/openapi.json)
- [OpenAPI spec repo](https://github.com/anyrow/openapi)
- [Go SDK](https://github.com/anyrow/sdk-go)
- [Python SDK](https://github.com/anyrow/sdk-python)
- [Rust SDK](https://github.com/anyrow/sdk-rust)
- [CLI](https://github.com/anyrow/cli)

## License

MIT — see [LICENSE](./LICENSE).
