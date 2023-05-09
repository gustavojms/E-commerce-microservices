import { prisma } from "../../../database/prismaClient";
import { kafkaConsumerProduct } from "../consumer";

type ProductConsumer = {
    id: string;
    name: string;
}

export async function createUserConsumer() {
    console.log("Creating user consumer");
    const consumer = await kafkaConsumerProduct("PRODUCT_CREATED");
    await consumer.run({
        eachMessage: async ({ message }) => {
            const messageToString = message.value!.toString();
            const product = JSON.parse(messageToString) as ProductConsumer;

            await prisma.product.create({
                data: {
                    externalId: product.id,
                    name: product.name
                }
            })
        }
    });
}

createUserConsumer();