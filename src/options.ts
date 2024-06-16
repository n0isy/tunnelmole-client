import ForwardedRequestMessage from "./messages/forwarded-request-message";
import ForwardedResponseMessage from "./messages/forwarded-response-message";

interface Options
{
    port?: number,
    domain?: string,
    setApiKey?: string,
    endpoint?: string,
    hostname?: string,
    onRequest?: (incoming: ForwardedRequestMessage) => Promise<void>,
    onResponse?: (incoming: ForwardedResponseMessage) => Promise<void>,
}

export { Options };
