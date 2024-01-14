import http from "http"
import express from "express"
import routes from "./connect"
import { expressConnectMiddleware } from "@connectrpc/connect-express"

const app = express()

app.use(expressConnectMiddleware({ routes }))

http.createServer(app).listen(8080)
