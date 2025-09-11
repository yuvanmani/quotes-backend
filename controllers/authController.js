const authController = {
    register: async (req, res) => {
        try {
            return res.status(200).json({ message: "Registration okay" });
        }
        catch (error) {
            return res.status(500).json({ message: "Registration failed" });
        }
    },
    verifyOtp: async (req, res) => {
        try {
            return res.status(200).json({ message: "verify otp okay" });
        }
        catch (error) {
            return res.status(500).json({ message: "Verification failed" });
        }
    },
    login: async (req, res) => {
        try {
            return res.status(200).json({ message: "Login okay" });
        }
        catch (error) {
            return res.status(500).json({ message: "Login failed" });
        }
    },
    logout: async (req, res) => {
        try {
            return res.status(200).json({ message: "Logout okay" });
        }
        catch (error) {
            return res.status(500).json({ message: "Logout failed" });
        }
    },
    me: async (req, res) => {
        try {
            return res.status(200).json({ message: "Profile okay" });
        }
        catch (error) {
            return res.status(500).json({ message: "Profile failed" });
        }
    }
}

module.exports = authController