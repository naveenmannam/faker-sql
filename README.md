# Node with MySQL

## Running a Node express with MySQL running on docker container

### Steps to build the application

### Install mysql-server with docker

- docker pull mysql/mysql-server
- docker run -p 3306:3306 --name container_name -e MYSQL_ROOT_PASSWORD=<password> -d mysql/mysql-server
- docker exec -it container_name mysql -u root -p
- create user 'username'@'%' identified with mysql_native_password by 'Password';
- grant all privileges on database_name.\* to 'username'@'%';
- use database_name;
- create table users (email varchar(255) primary key, created_at timestamp default now());
- desc users;
