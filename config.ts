import instanceConfig from "./config-instance.js";
import deepmerge from 'deepmerge';

const baseConfig = {
    hostip: {
        endpoint: "wss://localhost:8083"
    }
}


const config = deepmerge(baseConfig, instanceConfig);

export default config;
