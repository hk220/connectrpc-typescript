import { ConnectRouter } from "@connectrpc/connect"
import { ElizaService } from "./gen/eliza_connect"
import { sayHandler } from "./handlers"

export default (router: ConnectRouter) =>
    router.service(ElizaService, {
        say: sayHandler,
    })
