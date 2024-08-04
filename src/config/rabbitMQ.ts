import "dotenv/config";

export default {
  rabbitMQ: {
    url: String(process.env.RabbitMQ_Link),
    queue: {
      authQueue: "auth_queue",
    },
  },
};


