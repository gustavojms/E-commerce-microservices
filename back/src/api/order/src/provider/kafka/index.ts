import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ["endless-tomcat-5272-us1-kafka.upstash.io:9092"],

  sasl: {
    mechanism: "scram-sha-256",

    username: "ZW5kbGVzcy10b21jYXQtNTI3MiSqPsNKIc1Owt2V0vPi60_LEcmXoLCc97HuQf8",

    password: "839f6b36378d4b37a4f4ee02940cde7a",
  },

  ssl: true,
});

export { kafka };
