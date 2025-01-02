# what is redis ?
<details>
Redis is often used for caching web pages, reducing load on servers and improving page loading times. It can also be used as a message broker to facilitate communication between different parts of an application. Additionally, Redis supports transactions, making it possible to execute multiple operations atomically.
</details>

# steps how to implement redis
<details>
    steps 1: Read the documentation
    steps 2: version may varies on different platforms like windows, mac, linux so used docker for verion controlling / settelement and containerization 
    to pull image : 
    Note: This all are in documentation

    -> docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest 
    // 6379 is the port no. where redis run actually
    // 8001 is the port no. where we can visulaize the redis not actually used in real project we so all thing through command line


    // to run in cli command 
    -> docker exec -it redis-stack redis-cli


</details>

# set/get values
<details>
To set value : set variable_name:id values1
# to set multipe value at once: mset variable_name:id values, variable_name:id values ,....
# to get mutiple value at once : mget variable_name:id , variable_name:id ,....
</details>

# datatypes
<details>
1-> string 
2-> array/ queues / stack
</details>