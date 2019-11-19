/** 
 * Host local
*/
//const urlRoot = "http://192.168.0.17:8000";

/** 
 * Host demo
*/
const urlRoot = "http://ec2-34-207-127-183.compute-1.amazonaws.com:8000";

/**
 * Api routes configuration
 */
const ApiConfig = {
    authLogin: urlRoot + "/auth/login/chef",
    register: urlRoot + "/user/create"
}

export default ApiConfig;