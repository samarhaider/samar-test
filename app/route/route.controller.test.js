
const request = require("supertest");

const app = require("../../server");

describe("GET /routes?latitude=70.4977&longitude=25.3767", () => {
  it("should return a routes", async () => {
    const res = await request(app).get(
      "/routes?latitude=70.4977&longitude=25.3767"
    );
    expect(res.statusCode).toBe(200);
    const firstItem =  res.body[0];
    expect(firstItem).toHaveProperty("id");
    expect(firstItem).toHaveProperty("from");
    expect(firstItem).toHaveProperty("fromLatitude");
    expect(firstItem).toHaveProperty("fromLongitude");
    expect(firstItem).toHaveProperty("toLatitude");
    expect(firstItem).toHaveProperty("toLongitude");
  });
});

describe("GET /routes?", () => {
  it("should return a 400", async () => {
    const res = await request(app).get(
      "/routes"
    );
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("errors");
    expect(res.body.errors).toHaveProperty("latitude");
    expect(res.body.errors).toHaveProperty("longitude");
  });
});
