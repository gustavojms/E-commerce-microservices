import { prisma } from "../../../database/prismaClient";
import { kafkaConsumer } from "../consumer";

type UserConsumer = {
    id: string;
    email: string;
}

export async function createUserConsumer() {
    console.log("Creating user consumer");
    const consumer = await kafkaConsumer("USER_CREATED");

    await consumer.run({
        eachMessage: async ({ message }) => {
            const messageToString = message.value!.toString();
            const user = JSON.parse(messageToString) as UserConsumer;

            await prisma.user.create({
                data: {
                    externalId: user.id,
                    email: user.email
                }
            })
        }
    });
}

createUserConsumer();