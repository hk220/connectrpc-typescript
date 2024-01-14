import { SayRequest, SayResponse } from "./gen/eliza_pb"

async function sayHandler(req: SayRequest) {
    return new SayResponse({
        sentence: `You said: ${req.sentence}`
    })
}

export default {
    say: sayHandler,
}
