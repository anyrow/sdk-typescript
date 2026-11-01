import { SDKClient, schemeAuth } from "./sdk.runtime.gen"
import { serviceMap } from "./sdk.map.gen"
import type { AnyrowSDKConfig, AnyrowSDKOperations, AnyrowSDKSafe } from "./sdk.types.gen"

export class AnyrowSDK extends SDKClient {
	constructor(config: AnyrowSDKConfig) {
		super(serviceMap, schemeAuth({ ...config, baseURL: config.baseURL ?? "/api" }, "Authorization", "ApiKey "))
	}
}

/* declaration merge: the Proxy-backed class carries the typed operations, and their safe twins */
export interface AnyrowSDK extends AnyrowSDKOperations {
	readonly safe: AnyrowSDKSafe
}
