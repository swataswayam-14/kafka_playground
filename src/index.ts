import { Kafka, Partitioners } from "kafkajs";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"]
});

// Create a producer with the legacy partitioner
const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
});

const consumer = kafka.consumer({
    groupId: "my-app3"
});

async function main() {
    await producer.connect();
    await producer.send({
        topic: "quickstart-events",
        messages: [{
            value: "Hi from nodejs application"
        }]
    });

    await consumer.connect();
    await consumer.subscribe({
        topic: "quickstart-events",
        fromBeginning: true 
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                offset: message.offset,
                value: message?.value?.toString(),
            });
        }
    });
}

main().catch(console.error);