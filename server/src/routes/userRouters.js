const { Router } = require("express");
const {
    createUserHandler,
    loginUserHandler,
    confirmUserPasswordHandler,
    getAllUsersHandler,
    getUserByIdHandler,
    updateUserHandler,
    updateAuthorizationHandler,
    updateProfileHandler,
    deleteUserHandler,
    changePasswordHandler,
    getUserByEmailHandler
} = require("../handlers/userHandlers");

const usersRouter = Router();

usersRouter.post("/create", createUserHandler);
usersRouter.post("/login", loginUserHandler);
usersRouter.post("/confirm-password/:id", confirmUserPasswordHandler);
usersRouter.get("/", getAllUsersHandler);
usersRouter.get("/:id", getUserByIdHandler);
usersRouter.get("/email/:email", getUserByEmailHandler);
usersRouter.patch("/update/:id", updateUserHandler);
usersRouter.patch("/update-authorization/:id", updateAuthorizationHandler);
usersRouter.patch("/update-profile/:id", updateProfileHandler);
usersRouter.patch("/change-password/:id", changePasswordHandler);
usersRouter.delete("/delete/:id", deleteUserHandler);

module.exports = usersRouter;
