const request = require("supertest");
const app = require("../app");

test("GET / should return Hello World", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(500);
  expect(res.text).toContain("Hello World");
});
