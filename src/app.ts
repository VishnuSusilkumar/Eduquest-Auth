import RabbitMQClient from "./rabbitMQ/client";

class App {
  constructor() {
    this.initializeRabbitMQ();
  }

  private async initializeRabbitMQ(): Promise<void> {
    try {
      await RabbitMQClient.initalize();
      console.log("RabbitMQ initialized successfully");
    } catch (error) {
      console.error("Failed to initialize RabbitMQ", error);
    }
  }
}

export default App;
