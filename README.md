# Anyrow TypeScript SDK

[![MIT License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

Official TypeScript/JavaScript SDK for the [Anyrow](https://anyrow.ai) API. Works with Bun, Deno, and any bundler that handles TypeScript imports.

## Installation

```bash
bun add github:anyrow/sdk-typescript
```

## Quick start

```ts
import { AnyrowSDK } from "anyrow"

const client = new AnyrowSDK({
  baseURL: "https://api.anyrow.ai",
  headers: { "Authorization": "Bearer YOUR_API_KEY" },
})

const result = await client.extract._call({
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
