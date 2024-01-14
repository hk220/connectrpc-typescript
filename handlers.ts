import { SayRequest, SayResponse } from "./gen/eliza_pb"

export async function sayHandler(req: SayRequest) {
    return new SayResponse({
        sentence: `You said: ${req.sentence}`
    })
}
