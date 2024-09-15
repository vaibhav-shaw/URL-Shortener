/* //Statefull authentication module
const sessionIDToUserMap = new Map();

function setUser(id, user) {
    sessionIDToUserMap.set(id, user);
}

function getUser(id) {
    return sessionIDToUserMap.get(id);
}

*/

//Stateless authentication module
const jwt = require('jsonwebtoken');
const secret = 'Vaibhav@123$';

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secret, { expiresIn: '1h' });
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);  // Verify the token
    } catch (err) {
        console.error("JWT Error:", err.message); // Log the specific error
        return null;  // Return null if the token is invalid or malformed
    }
}

module.exports = {
    setUser,
    getUser
};