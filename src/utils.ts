type StringParam = [string, string];

function isValidStringParam(param: unknown): param is StringParam {
	if (!Array.isArray(param)) {
		return false;
	}
	const [, value] = param;
	return typeof value === "string" && value.length > 0;
}

function paramToStringParam([key, value]:
	| StringParam
	| [string, string | string[]]): StringParam {
	return Array.isArray(value) ? [key, value.join(",")] : [key, value];
}

/*
  Do not use URLSearchParams.

  URLSearchParams turns spaces into '+':
      https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#examples

  Some email clients on mobile devices don't replace the '+' with spaces.

  According to the mailto spec, spaces should be percent encoded:
      https://datatracker.ietf.org/doc/html/rfc6068#ref-STD66
*/
export function percentEncodeParams(params: {
	bcc?: string[];
	body?: string;
	cc?: string[];
	subject?: string;
}): string {
	return Object.entries(params)
		.map(paramToStringParam)
		.filter(isValidStringParam)
		.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
		.join("&");
}
