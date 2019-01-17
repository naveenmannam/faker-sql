# Node with MySQL

## Running a Node express with MySQL running on docker container

### Steps to build the application

- Install mysql-server with docker
- docker pull mysql/mysql-server
  - docker run -p 3306:3306 --name container_name -e MYSQL_ROOT_PASSWORD=<password> -d mysql/mysql-server
