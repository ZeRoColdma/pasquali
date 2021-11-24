const request = require("supertest");
const index = require("../../routes");

describe("SaveUser", () => {
  it("SaveUsers", async () => {
    const name = "Carlos";
    const response = await request(index)
      .post("/cards")
      .send({ body: { name } });

    expect(response.status).toBe(200);
  });
});
