const bcrypt = require('bcrypt');
const { User } = require("../db");

const createUser = async (data) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        const newUser = await User.create({
            name: data.name,
            surname: data.surname,
            email: data.email,
            phone: data.phone,
            profile: data.profile,
            password: hashedPassword,
            authorized: data.authorized,
            position: data.position
        });

        return newUser;
    } catch (error) {
        console.error("Error creating user", error);
        throw error;
    }
};

const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({
            where: { email }
        });

        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error logging in user", error);
        throw error;
    }
};

const confirmUserPassword = async (userId, password) => {
    try {
        const user = await User.findByPk(userId);

        return user !== null && await bcrypt.compare(password, user.password);
    } catch (error) {
        console.error("Error confirming user password", error);
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error("Error fetching all users", error);
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        console.error("Error fetching user by ID", error);
        throw error;
    }
};

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({
            where: {email}
        });
        if (user) {
            return user
        }
        if (!user) {
            return null
        }
    } catch (error) {
        console.error("Error fetching user by ID", error);
        throw error;
    }
};


const updateUser = async (data, idUser) => {
    try {
        const userId = idUser;
        const user = await User.findByPk(userId);

        if (user) {
            user.name = data.name;
            user.surname = data.surname;
            user.email = data.email;
            user.phone = data.phone;
            user.profile = data.profile;
            user.position = data.position;

            // Si se proporciona una nueva contraseña, se hashea
            if (data.password) {
                const saltRounds = 10;
                user.password = await bcrypt.hash(data.password, saltRounds);
            }

            await user.save();
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error updating user", error);
        throw error;
    }
};

const updateAuthorization = async (idUser, authorized) => {
    try {
        const user = await User.findByPk(idUser);

        if (user) {
            user.authorized = authorized;

            await user.save();
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error updating user authorization", error);
        throw error;
    }
};

const updateProfile = async (idUser, profile) => {
    try {
        const user = await User.findByPk(idUser);

        if (user) {
            user.profile = profile;

            await user.save();
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error updating user profile", error);
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return true;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error deleting user", error);
        throw error;
    }
};

const changePassword = async (idUser, newPassword) => {
    try {
        const user = await User.findByPk(idUser);

        if (user) {
            // Generar un nuevo hash para la nueva contraseña
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

            // Actualizar la contraseña en la base de datos
            user.password = hashedPassword;
            await user.save();

            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error changing user password", error);
        throw error;
    }
};

module.exports = {
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
};
