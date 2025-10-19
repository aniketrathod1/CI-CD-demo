const request = require("supertest");
const server = require("../index");

afterAll(() => {
  server.close();
});

test("GET / should return 'Hello from CI/CD demo!'", async () => {
  const res = await request(server).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hello from CI/CD demo!");
});

