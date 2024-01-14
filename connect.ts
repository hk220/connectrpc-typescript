import { ConnectRouter } from "@connectrpc/connect"
import { ElizaService } from "./gen/eliza_connect"
import ElizaServiceHandlers from "./eliza_service_handlers"

export default (router: ConnectRouter) =>
    router.service(ElizaService, ElizaServiceHandlers)
