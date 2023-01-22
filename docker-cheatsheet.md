### Docker Cheatsheet
This is a cheatsheet with a bunch of examples that will help you how to use Docker effectively and increase your productivity.

#### Docker Folder Binding
```sh
docker run -p 8080:80 --mount type=bind,src=SOURCE_DIR,target=TARGET_DIR nginx
```
---
#### Create volume
```sh
docker volume create VOLUME_NAME
```
---
#### Docker volume mount
```sh
docker run --name nginx -d --mount type=volume,src=VOLUME_NAME,target=/app nginx
```
---
#### Sharing volume with multiple containers
```sh
docker run --name nginx2 -d --mount type=volume,src=VOLUME_NAME,target=/app nginx
```
---
#### Docker Entrypoint optional argument
```Dockerfile
ENTRYPOINT [ "echo", "Hello " ]

CMD [ "World" ]
```

```sh
$ docker run johndoe/imagex 
Hello World
$ docker run johndoe/imagex Test
Hello Test
```
---
### Network Types

#### List Networks
```sh
docker network ls
```
---
#### Create Network
```sh
docker network create --driver=bridge minharede
```
---
#### Create Container on this new network
```sh
docker run -d -it --name ubuntu1 --network minharede bash
docker run -d -it --name ubuntu2 --network minharede bash
docker run -d -it --name ubuntu3 bash
```

#### Try to connect from the default bridge to the new one
```sh
docker exec -it ubuntu3 bash
$ ping ubuntu1
```
> It won't work because the default bridge doesn't resolve dns names

#### But if you try to do the same from the new bridge network
```sh
docker exec -it ubuntu1 bash
$ ping ubuntu1
PING ubuntu2 (172.18.0.3): 56 data bytes
64 bytes from 172.18.0.3: seq=0 ttl=64 time=0.255 ms
```
> It'll work because this new network translates hostnames to ips automatically
---
#### How to make your container access your local network
```sh
docker exec -it ubuntu1 bash
curl http://host.docker.internal:LOCAL_PORT
```
> By doing this your container will be able to connect to your local machine in the specified port