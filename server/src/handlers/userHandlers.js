const {
    createUser,
    loginUser,
    confirmUserPassword,
    getAllUsers,
    getUserById,
    updateUser,
    updateAuthorization,
    updateProfile,
    deleteUser,
    changePassword, 
    getUserByEmail
} = require("../controllers/usersControllers");

const createUserHandler = async (req, res) => {
    try {
        const { name, surname, email, phone, profile, password, authorized, position } = req.body;
        const newUser = await createUser({
            name,
            surname,
            email,
            phone,
            profile,
            password,
            authorized,
            position
        });

        if (newUser) {
            res.status(201).json({ success: true, message: "User created", user: newUser });
        } else {
            res.status(208).json({ success: false, message: "User not created" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating user", error });
    }
};

const loginUserHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);

        if (user) {
            res.status(200).json({ success: true, message: "Login successful", userLogin: {
                id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email,
                phone: user.phone,
                profile: user.profile,
                authorized: user.authorized,
                position: user.position}});
        } else {
            res.status(201).json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error logging in user", error });
    }
};

const confirmUserPasswordHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;
        const confirmed = await confirmUserPassword(id, password);

        if (confirmed) {
            res.status(200).json({ success: true, message: "Password confirmed" });
        } else {
            res.status(401).json({ success: false, message: "Invalid password" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error confirming user password", error });
    }
};

const getAllUsersHandler = async (req, res) => {
    try {
        const users = await getAllUsers();

        if (users.length > 0) {
            res.status(200).json({ success: true, message: "Users retrieved", users });
        } else {
            res.status(204).json({ success: true, message: "No users found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching all users", error });
    }
};

const getUserByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);

        if (user) {
            res.status(200).json({ success: true, message: "User retrieved", user });
        } else {
            res.status(204).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching user by ID", error });
    }
};

const getUserByEmailHandler = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await getUserByEmail(email);

        if (user !== null) {
            res.status(200).json({ success: true, message: "User retrieved", user });
        } 
        if (user === null) {
            res.status(201).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching user by ID", error });
    }
};


const updateUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedUser = await updateUser(data, id);

        if (updatedUser !== null) {
            res.status(200).json({ success: true, message: "User updated", user: updatedUser });
        } else {
            res.status(204).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating user", error });
    }
};

const updateAuthorizationHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { authorized } = req.body;
        const updatedUser = await updateAuthorization(id, authorized);

        if (updatedUser) {
            res.status(200).json({ success: true, message: "Authorization updated", user: updatedUser });
        } else {
            res.status(204).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating user authorization", error });
    }
};

const updateProfileHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { profile } = req.body;
        const updatedUser = await updateProfile(id, profile);

        if (updatedUser) {
            res.status(200).json({ success: true, message: "Profile updated", user: updatedUser });
        } else {
            res.status(204).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating user profile", error });
    }
};

const deleteUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteUser(id);

        if (result === true) {
            res.status(200).json({ success: true, message: "User deleted" });
        } else {
            res.status(203).json({ success: false, message: "Unable to delete user" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting user", error });
    }
};

const changePasswordHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { newPassword } = req.body;
        const updatedUser = await changePassword(id, newPassword);

        if (updatedUser) {
            res.status(200).json({ success: true, message: "Password changed", user: updatedUser });
        } else {
            res.status(204).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error changing user password", error });
    }
};

module.exports = {
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
};
