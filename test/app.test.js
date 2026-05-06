const request = require("supertest");
const { app, server } = require("../app");

afterAll(() => {
  server.close();
});

test("GET / should return hello message", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello, Taski Technologies");
});

