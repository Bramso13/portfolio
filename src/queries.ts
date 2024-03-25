import {db} from "./db.ts";

export type Message = {
    message: string;
    email: string;
    name: string;
}

export const setMessage = async (message: Message) => {
    const data = await db.message.create({
        data: {
            content: message.message,
            email: message.email,
            name: message.name
        }
    })
}
