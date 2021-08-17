import { percentEncodeParams } from "../src/utils";

it("should return an empty string if params are empty strings", () => {
  const result = percentEncodeParams({ body: "", subject: "" });
  expect(result).toBe("");
});

it("should return an empty string if no params given", () => {
  const result = percentEncodeParams({});
  expect(result).toBe("");
});

it("should ignore an empty string param", () => {
  const result = percentEncodeParams({ body: "a", subject: "" });
  expect(result).toBe("body=a");
});

it("should percent encode spaces", () => {
  const result = percentEncodeParams({ body: "a b c d" });
  expect(result).toBe("body=a%20b%20c%20d");
});

it('should percent encode "=&?"', () => {
  const result = percentEncodeParams({ body: "=&?" });
  expect(result).toBe("body=%3D%26%3F");
});

it("should properly create searchParams string from multiple params", () => {
  const result = percentEncodeParams({ body: "a", subject: "b" });
  expect(result).toBe("body=a&subject=b");
});
