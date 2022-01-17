const { signup } = require("./index");
const authService = require("../../service/auth/AuthService");
const httpCode = require("../../lib/httpCodes");

jest.mock("../../service/auth/AuthService");

describe("Unit test signup", () => {
  let req, res, next;
  beforeEach(() => {
    req = { body: { email: "test@test.com", password: "123456789" } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn((data) => data) };
    next = jest.fn();
    authService.createUser = jest.fn(async (data) => data);
  });

  test("SignUp new user", async () => {
    authService.isUserExist = jest.fn(async () => false);
    await signup(req, res, next);
    expect(authService.isUserExist).toHaveBeenCalledWith(req.body.email);
    expect(res.status).toHaveBeenCalledWith(httpCode.CREATED);
  });

  test("User already exist", async () => {
    authService.isUserExist = jest.fn(async () => true);
    await signup(req, res, next);
    expect(authService.isUserExist).toHaveBeenCalledWith(req.body.email);
    expect(res.status).toHaveBeenCalledWith(httpCode.CONFLICT);
  });

  test("SignUp with error DB", async () => {
    const testError = new Error("DB error");
    authService.isUserExist = jest.fn(async () => {
      throw testError;
    });
    await signup(req, res, next);
    expect(authService.isUserExist).toHaveBeenCalledWith(req.body.email);
    expect(next).toHaveBeenCalledWith(testError);
  });
});
