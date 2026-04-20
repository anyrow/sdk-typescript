type _ErrField = { error_key: string; message: string; path: string }
type _ErrEnvelope<TStatus extends number, TKey extends string> = {
	error_key: TKey
	fields: Record<string, _ErrField[]>
	message: string
	status: TStatus
	status_key: string
	success: false
}

type _Errs0 = { 400: _ErrEnvelope<400, "invalid_input">; 401: _ErrEnvelope<401, "unauthorized">; 403: _ErrEnvelope<403, "email_not_verified" | "forbidden">; 413: _ErrEnvelope<413, "content_too_large">; 415: _ErrEnvelope<415, "unsupported_media_type">; 500: _ErrEnvelope<500, "internal_server_error"> }

type _ExpandShallow<T> = T extends object ? { [K in keyof T]: T[K] } & {} : T
type _Expand<T> = T extends object ? { [K in keyof T]: _ExpandShallow<T[K]> } & {} : T
type _Res0 = { active: boolean; created_at: number; events_json: ("batch.complete" | "batch.failed" | "batch.partial" | "ping")[]; failure_count: number; id: string; last_triggered_at: number | null; name: string | null; organization_id: string; secret_rotated_at: number | null; updated_at: number; url: string }
type _Res1 = { active: boolean; created_at: number; events_json: ("batch.complete" | "batch.failed" | "batch.partial" | "ping")[]; failure_count: number; id: string; last_triggered_at: number | null; name: string | null; organization_id: string; secret: string; secret_rotated_at: number | null; updated_at: number; url: string }
type _Res2 = { actor_id: string; actor_type: "user" | "api_key"; confidence: number | null; created_at: number; csv_key: string | null; current_file: string | null; duration_ms: number | null; error: string | null; extractions?: ({ batch_id: string; confidence: number | null; created_at: number; error: string | null; file_checksum: string | null; file_key: string; file_name: string; file_type: "text_pdf" | "scanned" | "image" | "text" | "document" | "unknown" | null; id: string; row_count: number | null; rows_key: string | null; status: "pending" | "processing" | "complete" | "failed"; table_id: string | null })[]; file_count: number; files_done: number; id: string; insert_mode: "append" | "dedup" | "merge" | "replace" | null; json_key: string | null; project_id: string; schema_json: { columns: ({ description?: string | null; instruction?: string | null; name: string; "type": "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" })[]; instruction?: string | null; strictness: "strict" | "balanced" | "flexible" }; status: "uploading" | "processing" | "merging" | "complete" | "partial" | "failed"; table_id: string | null; total_rows: number | null; updated_at: number; xlsx_key: string | null }
type _Res3 = { actor_id: string; checksum: string; created_at: number; csv_key: string | null; error: string | null; expires_at: number | null; filter_json: string | null; id: string; json_key: string | null; project_id: string; row_count: number | null; status: "processing" | "complete" | "failed"; table_id: string | null; updated_at: number; xlsx_key: string | null }
type _Res4 = { batch_id?: string; confidence: number | null; duration_ms: number | null; fail_count: number; files: ({ confidence?: number | null; error?: unknown | null; file_name?: unknown | null; rows?: number | null; status?: string })[]; result?: Record<string, unknown>; status: string; success_count: number; total_rows: number }
type _Res5 = { batches: ({ actor_id: string; actor_type: "user" | "api_key"; confidence: number | null; created_at: number; csv_key: string | null; current_file: string | null; duration_ms: number | null; error: string | null; file_count: number; files_done: number; id: string; insert_mode: "append" | "dedup" | "merge" | "replace" | null; json_key: string | null; project_id: string; schema_json: { columns: ({ description?: string | null; instruction?: string | null; name: string; "type": "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" })[]; instruction?: string | null; strictness: "strict" | "balanced" | "flexible" }; status: "uploading" | "processing" | "merging" | "complete" | "partial" | "failed"; table_id: string | null; total_rows: number | null; updated_at: number; xlsx_key: string | null })[]; count: number; hasMore: boolean; limit: number; nextCursor: string | null; page: number | null }
type _Res6 = { category: string; columns_json: ({ currency_code?: string; "default"?: unknown; description?: string | null; id: string; instruction?: string | null; name: string; options?: string[]; required: boolean; searchable?: boolean; "type": "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" })[]; created_at: number; creator_display_name: string | null; creator_user_id: string | null; description: string | null; id: string; insert_mode: "append" | "dedup" | "merge" | "replace"; instruction: string | null; merge_columns_json: string[] | null; name: string; strictness: "strict" | "balanced" | "flexible"; updated_at: number; usage_count: number }
type _Res7 = { columns_json: ({ currency_code?: string; "default"?: unknown; description?: string | null; id: string; instruction?: string | null; name: string; options?: string[]; required: boolean; searchable?: boolean; "type": "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" })[]; created_at: number; data_version: number; default_sort: string | null; deleted_at: number | null; fts_version: number; id: string; insert_mode: "append" | "dedup" | "merge" | "replace"; instruction: string | null; last_used_at: number | null; merge_columns_json: string[] | null; name: string; project_id: string; row_count: number; slug: string; strictness: "strict" | "balanced" | "flexible"; updated_at: number; usage_count: number }
type _Res8 = { count: number; deliveries: ({ attempt: number; created_at: number; delivered_at: number | null; event: "batch.complete" | "batch.failed" | "batch.partial" | "ping"; http_status: number | null; id: string; next_retry_at: number | null; payload_json: string; response_body: string | null; status: "pending" | "success" | "failed"; webhook_id: string })[]; hasMore: boolean; limit: number; nextCursor: string | null; page: number | null }
type _Res9 = { count: number; hasMore: boolean; limit: number; nextCursor: string | null; page: number | null; tables: ({ columns_json: ({ currency_code?: string; "default"?: unknown; description?: string | null; id: string; instruction?: string | null; name: string; options?: string[]; required: boolean; searchable?: boolean; "type": "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" })[]; created_at: number; data_version: number; default_sort: string | null; deleted_at: number | null; fts_version: number; id: string; insert_mode: "append" | "dedup" | "merge" | "replace"; instruction: string | null; last_used_at: number | null; merge_columns_json: string[] | null; name: string; project_id: string; row_count: number; slug: string; strictness: "strict" | "balanced" | "flexible"; updated_at: number; usage_count: number })[] }
type _Res10 = { count: number; hasMore: boolean; limit: number; nextCursor: string | null; page: number | null; templates: ({ category: string; columns_json: ({ currency_code?: string; "default"?: unknown; description?: string | null; id: string; instruction?: string | null; name: string; options?: string[]; required: boolean; searchable?: boolean; "type": "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" })[]; created_at: number; creator_display_name: string | null; creator_user_id: string | null; description: string | null; id: string; insert_mode: "append" | "dedup" | "merge" | "replace"; instruction: string | null; merge_columns_json: string[] | null; name: string; strictness: "strict" | "balanced" | "flexible"; updated_at: number; usage_count: number })[] }
type _Res11 = { count: number; hasMore: boolean; limit: number; nextCursor: string | null; page: number | null; webhooks: ({ active: boolean; created_at: number; events_json: ("batch.complete" | "batch.failed" | "batch.partial" | "ping")[]; failure_count: number; id: string; last_triggered_at: number | null; name: string | null; organization_id: string; secret_rotated_at: number | null; updated_at: number; url: string })[] }
type _Res12 = { id: string }
type _Inp0 = { json: { category: string; columns_json: ({ currency_code?: string; "default"?: unknown; description?: string | null; id: string; instruction?: string | null; name: string; options?: string[]; required?: boolean; searchable?: boolean; "type"?: "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" })[]; description?: string | null; insert_mode?: "append" | "dedup" | "merge" | "replace"; instruction?: string | null; merge_columns_json?: string[] | null; name: string; strictness?: "strict" | "balanced" | "flexible" } }
type _Inp1 = { params: { organization_id: string; id: string } }
type _Inp2 = { params: { organization_id: string; id: string }; search: { cursor?: string; event?: "batch.complete" | "batch.failed" | "batch.partial" | "ping"; filter?: string; lang?: string; limit?: number; order?: string; page?: number; q?: string; select?: string; status?: "pending" | "success" | "failed" } }
type _Inp3 = { params: { project_id: string } }
type _Inp4 = { params: { project_id: string }; json: { columns_json: ({ currency_code?: string; "default"?: unknown; description?: string | null; id: string; instruction?: string | null; name: string; options?: string[]; required?: boolean; searchable?: boolean; "type"?: "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" })[]; default_sort?: string; insert_mode?: "append" | "dedup" | "merge" | "replace"; instruction?: string | null; merge_columns_json?: string[] | null; name: string; strictness?: "strict" | "balanced" | "flexible" } }
type _Inp5 = { params: { project_id: string }; search: { cursor?: string; filter?: string; lang?: string; limit?: number; order?: string; page?: number; q?: string; select?: string } }
type _Inp6 = { params: { project_id: string }; search: { cursor?: string; filter?: string; lang?: string; limit?: number; order?: string; page?: number; q?: string; select?: string; status?: "uploading" | "processing" | "merging" | "complete" | "partial" | "failed" } }
type _Inp7 = { params: { project_id: string; batch_id: string } }
type _Inp8 = { params: { project_id: string; table_id: string } }
type _Inp9 = { params: { project_id: string; table_id: string }; json: { currency_code?: string; description?: string | null; instruction?: string | null; name: string; options?: string[]; required?: boolean; "type"?: "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" } }
type _Inp10 = { params: { project_id: string; table_id: string }; json: { default_sort?: string | null; insert_mode?: "append" | "dedup" | "merge" | "replace"; instruction?: string | null; merge_columns_json?: string[] | null; name?: string; slug?: string; strictness?: "strict" | "balanced" | "flexible" } }
type _Inp11 = { params: { project_id: string; table_id: string; col_id: string }; json: { description?: string | null; instruction?: string | null; name?: string; options?: string[]; required?: boolean; searchable?: boolean; "type"?: "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" } }
type _Inp12 = { params: { project_id: string; table_id: string; row_id: string } }
type _Inp13 = { params: { template_id: string }; json: { category?: string; columns_json?: ({ currency_code?: string; "default"?: unknown; description?: string | null; id: string; instruction?: string | null; name: string; options?: string[]; required?: boolean; searchable?: boolean; "type"?: "array" | "boolean" | "currency" | "date" | "email" | "enum" | "multi_select" | "number" | "string" | "text" | "url" })[]; description?: string | null; insert_mode?: "append" | "dedup" | "merge" | "replace"; instruction?: string | null; merge_columns_json?: string[] | null; name?: string; strictness?: "strict" | "balanced" | "flexible" } }

export type SDKResult<T, TErrorsByStatus = never> =
	| { data: T; error: null; response: Response; status: number }
	| ([TErrorsByStatus] extends [never]
		? { data: null; error: unknown; response: Response; status: number }
		: { [S in keyof TErrorsByStatus & number]: { data: null; error: TErrorsByStatus[S]; response: Response; status: S } }[keyof TErrorsByStatus & number])

export type TypedWebSocket = {
	close(code?: number, reason?: string): void
	off(event: "close" | "error" | "message" | "open", handler: (...args: never[]) => void): void
	on(event: "close", handler: (code: number, reason: string) => void): void
	on(event: "error", handler: (error: unknown) => void): void
	on(event: "message", handler: (data: string) => void): void
	on(event: "open", handler: () => void): void
	readonly readyState: number
	send(data: ArrayBuffer | ArrayBufferView | object | string): void
}

export type AnyrowSDKConfig<TThrow extends boolean = false> = {
	baseURL: string
	buildSearchParams?: (query: Record<string, unknown>) => URLSearchParams
	credentials?: RequestCredentials
	fetch?: typeof fetch
	headers?: Record<string, string> | ((ctx: { method: string; path: string }) => Record<string, string | undefined> | Promise<Record<string, string | undefined>>)
	invalidation?: { maxSourcesPerTarget?: number; staleMaxEntries?: number; staleTime: number }
	maxErrorMessageChars?: number
	mode?: RequestMode
	onRequest?: Array<(ctx: { body?: BodyInit; headers: Headers; invalidatedBy?: string[]; isStale?: boolean; method: string; path: string; selector?: string; state: Record<string, unknown>; url: string }) => void | Promise<void>>
	onResponse?: Array<(ctx: { invalidatedBy?: string[]; isRetry: boolean; isStale?: boolean; method: string; path: string; request: Request; response: Response; retry: () => Promise<Response>; selector?: string; state: Record<string, unknown>; url: string }) => Response | undefined | Promise<Response | undefined>>
	onAuthExpired?: () => Promise<string | null>
	authHeaderName?: string
	authHeaderPrefix?: string
	onLog?: (entry: _LogEntry) => void
	sortSearchParams?: boolean
	sseMaxBufferChars?: number
	state?: Record<string, unknown>
	throwOnError?: TThrow
	timeout?: number
}

export type _LogEntry = { level: "debug" | "info" | "warn" | "error"; event: "request_start" | "response_received" | "error" | "hook_executed"; operation: string; duration_ms: number; status?: number; error?: unknown }
export type _HttpOpts = { cookies?: Record<string, string>; headers?: Record<string, string>; idempotencyKey?: string; signal?: AbortSignal; timeout?: number }
export type _SseOpts = { cookies?: Record<string, string>; headers?: Record<string, string>; lastEventId?: string; signal?: AbortSignal; timeout?: number }
export type _WsOpts = { protocols?: string | string[]; reconnectToken?: string }

export interface AnyrowSDK<TThrow extends boolean = false> {
	state: Record<string, unknown>
	dispose(): void
	batch: {
		"get"(input: _Expand<_Inp7> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res2>> : Promise<SDKResult<_Expand<_Res2>, _Expand<_Errs0>>>
		list(input: _Expand<_Inp6> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res5>> : Promise<SDKResult<_Expand<_Res5>, _Expand<_Errs0>>>
		download: {
			csv(input: _Expand<_Inp7> & _HttpOpts): TThrow extends true ? Promise<void> : Promise<SDKResult<void, _Expand<_Errs0>>>
			json(input: _Expand<_Inp7> & _HttpOpts): TThrow extends true ? Promise<void> : Promise<SDKResult<void, _Expand<_Errs0>>>
			xlsx(input: _Expand<_Inp7> & _HttpOpts): TThrow extends true ? Promise<void> : Promise<SDKResult<void, _Expand<_Errs0>>>
		}
	}
	column: {
		add(input: _Expand<_Inp9> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
		distinct(input: { params: { project_id: string; table_id: string; col_id: string }; search: { limit?: number; q?: string } } & _HttpOpts): TThrow extends true ? Promise<{ values: (string | number | null)[] }> : Promise<SDKResult<{ values: (string | number | null)[] }, _Expand<_Errs0>>>
		remove(input: { params: { project_id: string; table_id: string; col_id: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
		reorder(input: { params: { project_id: string; table_id: string }; json: { order: string[] } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
		update(input: _Expand<_Inp11> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
	}
	"export": {
		"get"(input: { params: { project_id: string; export_id: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res3>> : Promise<SDKResult<_Expand<_Res3>, _Expand<_Errs0>>>
	}
	extract: {
		once(input: _Expand<_Inp3> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res4>> : Promise<SDKResult<_Expand<_Res4>, _Expand<_Errs0>>>
		stream(input: _Expand<_Inp3> & _HttpOpts): TThrow extends true ? Promise<void> : Promise<SDKResult<void, _Expand<_Errs0>>>
		table: {
			once(input: _Expand<_Inp8> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res4>> : Promise<SDKResult<_Expand<_Res4>, _Expand<_Errs0>>>
			stream(input: _Expand<_Inp8> & _HttpOpts): TThrow extends true ? Promise<void> : Promise<SDKResult<void, _Expand<_Errs0>>>
		}
	}
	row: {
		aggregate(input: { params: { project_id: string; table_id: string }; search: { aggs: string; filter?: string } } & _HttpOpts): TThrow extends true ? Promise<Record<string, number | null>> : Promise<SDKResult<Record<string, number | null>, _Expand<_Errs0>>>
		bulk(input: { params: { project_id: string; table_id: string }; json: { creates?: Record<string, unknown>[]; deletes?: string[]; updates?: { data: Record<string, unknown>; id: string }[] } } & _HttpOpts): TThrow extends true ? Promise<{ created?: Record<string, unknown>[]; deleted?: string[]; updated?: Record<string, unknown>[] }> : Promise<SDKResult<{ created?: Record<string, unknown>[]; deleted?: string[]; updated?: Record<string, unknown>[] }, _Expand<_Errs0>>>
		create(input: { params: { project_id: string; table_id: string }; json: Record<string, unknown> } & _HttpOpts): TThrow extends true ? Promise<Record<string, unknown>> : Promise<SDKResult<Record<string, unknown>, _Expand<_Errs0>>>
		"delete"(input: _Expand<_Inp12> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res12>> : Promise<SDKResult<_Expand<_Res12>, _Expand<_Errs0>>>
		"get"(input: _Expand<_Inp12> & _HttpOpts): TThrow extends true ? Promise<Record<string, unknown>> : Promise<SDKResult<Record<string, unknown>, _Expand<_Errs0>>>
		list(input: { params: { project_id: string; table_id: string }; search: { cursor?: string; filter?: string; limit?: number; order?: string; page?: number; q?: string } } & _HttpOpts): TThrow extends true ? Promise<{ count: number; hasMore: boolean; limit: number; nextCursor: string | null; page: number | null; rows: Record<string, unknown>[] }> : Promise<SDKResult<{ count: number; hasMore: boolean; limit: number; nextCursor: string | null; page: number | null; rows: Record<string, unknown>[] }, _Expand<_Errs0>>>
		update(input: { params: { project_id: string; table_id: string; row_id: string }; json: Record<string, unknown> } & _HttpOpts): TThrow extends true ? Promise<Record<string, unknown>> : Promise<SDKResult<Record<string, unknown>, _Expand<_Errs0>>>
	}
	suggest: {
		schema(input: _Expand<_Inp3> & _HttpOpts): TThrow extends true ? Promise<{ columns: { description?: string; name: string; "type": string }[]; confidence: number; instruction?: string }> : Promise<SDKResult<{ columns: { description?: string; name: string; "type": string }[]; confidence: number; instruction?: string }, _Expand<_Errs0>>>
	}
	table: {
		create(input: _Expand<_Inp4> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
		"delete"(input: _Expand<_Inp8> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res12>> : Promise<SDKResult<_Expand<_Res12>, _Expand<_Errs0>>>
		duplicate(input: { params: { project_id: string; table_id: string }; json: { name: string; slug: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
		"export"(input: { params: { project_id: string; table_id: string }; search: { filter?: string; format: "csv" | "json" | "xlsx"; order?: string; schema?: "true" | "false"; search?: string; since?: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res3>> : Promise<SDKResult<_Expand<_Res3>, _Expand<_Errs0>>>
		"get"(input: _Expand<_Inp8> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
		list(input: _Expand<_Inp5> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res9>> : Promise<SDKResult<_Expand<_Res9>, _Expand<_Errs0>>>
		restore(input: { params: { project_id: string; table_id: string }; json: { slug?: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
		update(input: _Expand<_Inp10> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
	}
	tableTemplate: {
		create(input: _Expand<_Inp0> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res6>> : Promise<SDKResult<_Expand<_Res6>, _Expand<_Errs0>>>
		"delete"(input: { params: { template_id: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res12>> : Promise<SDKResult<_Expand<_Res12>, _Expand<_Errs0>>>
		listMine(input?: { search: { cursor?: string; filter?: string; lang?: string; limit?: number; order?: string; page?: number; q?: string; select?: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res10>> : Promise<SDKResult<_Expand<_Res10>, _Expand<_Errs0>>>
		projectGet(input: { params: { project_id: string; template_id: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res6>> : Promise<SDKResult<_Expand<_Res6>, _Expand<_Errs0>>>
		projectList(input: _Expand<_Inp5> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res10>> : Promise<SDKResult<_Expand<_Res10>, _Expand<_Errs0>>>
		update(input: _Expand<_Inp13> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res6>> : Promise<SDKResult<_Expand<_Res6>, _Expand<_Errs0>>>
		use(input: { params: { project_id: string; template_id: string }; json: { name: string; slug?: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res7>> : Promise<SDKResult<_Expand<_Res7>, _Expand<_Errs0>>>
	}
	webhook: {
		create(input: { params: { organization_id: string }; json: { events: ("batch.complete" | "batch.failed" | "batch.partial" | "ping")[]; name?: string; url: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res1>> : Promise<SDKResult<_Expand<_Res1>, _Expand<_Errs0>>>
		"delete"(input: _Expand<_Inp1> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res12>> : Promise<SDKResult<_Expand<_Res12>, _Expand<_Errs0>>>
		deliveries(input: _Expand<_Inp2> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res8>> : Promise<SDKResult<_Expand<_Res8>, _Expand<_Errs0>>>
		"get"(input: _Expand<_Inp1> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res0>> : Promise<SDKResult<_Expand<_Res0>, _Expand<_Errs0>>>
		list(input: { params: { organization_id: string }; search: { cursor?: string; filter?: string; lang?: string; limit?: number; order?: string; page?: number; q?: string; select?: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res11>> : Promise<SDKResult<_Expand<_Res11>, _Expand<_Errs0>>>
		rotateSecret(input: _Expand<_Inp1> & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res1>> : Promise<SDKResult<_Expand<_Res1>, _Expand<_Errs0>>>
		test(input: _Expand<_Inp1> & _HttpOpts): TThrow extends true ? Promise<{ http_status: number | null; response_body: string | null; status: "error" | "success" | "timeout" }> : Promise<SDKResult<{ http_status: number | null; response_body: string | null; status: "error" | "success" | "timeout" }, _Expand<_Errs0>>>
		update(input: { params: { organization_id: string; id: string }; json: { active?: boolean; events?: ("batch.complete" | "batch.failed" | "batch.partial" | "ping")[]; name?: string; url?: string } } & _HttpOpts): TThrow extends true ? Promise<_Expand<_Res0>> : Promise<SDKResult<_Expand<_Res0>, _Expand<_Errs0>>>
	}
}
