import { kafka } from ".";

export class KafkaSendMessage {
    async execute(topic: string, payload: any): Promise<void> {
        const producer = kafka.producer();

        await producer.connect();
        console.log(`Sending message to topic ${topic}: ${JSON.stringify(payload)}`);
        await producer.send({
            topic,
            messages: [
                { value: JSON.stringify(payload)}
            ]
        });

        await producer.disconnect();
    }
}