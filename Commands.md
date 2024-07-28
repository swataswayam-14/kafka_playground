docker run -p 9092:9092 apache/kafka:3.7.1

winpty docker exec -it c1877c84bc44 bash
cd /opt/kafka/bin


./kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092

./kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092

./kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092

./kafka-topics.sh --create --topic payment-done2 --partitions 3 --bootstrap-server localhost:9092

./kafka-topics.sh --describe --topic payment-done2 --bootstrap-server localhost:9092

