import axios from "axios";

export default {
    getUsers: function() {
        return axios.get("/api/users");
    },
    saveUser: function(userData) {
        // console.log("THIS IS USER DATA", userData)
        return axios.post("/api/users", userData);
    },
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    }
};