drop schema if exists `web-20070006006`;
create schema `web-20070006006`;
USE `web-20070006006`;

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
	`id` int auto_increment not null,
	`title` varchar(512) not null,
	`price` varchar(64) not null,
    `category` varchar(64),
	`image` varchar(1024) not null,
    `brand` varchar(64),
    `location` varchar(64),
	PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `description`;

CREATE TABLE `description` (
	`id` int auto_increment not null,
	`product_id` int not null,
	`title` varchar(128) not null,
    `info` varchar(512),
	PRIMARY KEY (`id`)
);