import prompt from "prompt"
import promptQRCodeSchema from "../../prompts-schema/prompt-schema-qrcode.js"
import handle from "./handle.js"

async function createQRCode() {
    prompt.get(promptQRCodeSchema, handle)
    prompt.start()
}

export default createQRCode