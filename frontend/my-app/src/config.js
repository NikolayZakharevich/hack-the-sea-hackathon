const configs = {
    production: {
        "app_id": 7109110,
        "redirect_uri": "http://b3573e54.ngrok.io/app/",
        "basepath": "/",
        "api_basepath": "http://b3573e54.ngrok.io/api/"
    },
    local: {
        "app_id": 7109125,
        "redirect_uri": "https://127.0.0.1:3000/",
        "basepath": "/",
        "api_basepath": "http://127.0.0.1:8000/api/"
    }
};

const returnConfig = configs[process.env.REACT_APP_CONFIG] || configs.production;

export default returnConfig;
