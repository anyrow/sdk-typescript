import { AnyrowSDK as _AnyrowSDKImpl, ClientError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, UnprocessableEntityError, RateLimitError, InternalServerError, BadGatewayError, ServiceUnavailableError, GatewayTimeoutError, isClientError } from "./sdk.client.gen"
import type { AnyrowSDK as _AnyrowSDKInterface } from "./sdk.types.gen"

/* declaration merge: Proxy-based class acquires typed resource methods */
class AnyrowSDK<TThrow extends boolean = false> extends _AnyrowSDKImpl<TThrow> {}
interface AnyrowSDK<TThrow extends boolean = false> extends _AnyrowSDKInterface<TThrow> {}

export { AnyrowSDK, ClientError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, UnprocessableEntityError, RateLimitError, InternalServerError, BadGatewayError, ServiceUnavailableError, GatewayTimeoutError, isClientError }
export { serviceMap } from "./sdk.map.gen"
export type { AnyrowSDKConfig, SDKResult, TypedWebSocket } from "./sdk.types.gen"
