const request = require("supertest");
const index = require("../../routes");

describe("SaveUser", () => {
  it("SaveUsers", async () => {
    const name = "Carlos";
    const response = await request(index)
      .post("/users")
      .send({ body: { name } });

    expect(response.status).toBe(200);
  });
});
