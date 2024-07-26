docker run -p 9092:9092 apache/kafka:3.7.1

winpty docker exec -it 462e6a639ea7 bash
cd /opt/kafka/bin


./kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092

./kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092

./kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092