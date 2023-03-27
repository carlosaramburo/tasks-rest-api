CREATE DATABASE `tasks`;

USE `tasks`;

CREATE TABLE `task` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(150) NOT NULL,
  `status` varchar(11) DEFAULT 'NOT STARTED',
  `due_date` date NOT NULL,
  `asignee` varchar(75) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `tag` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `task_tag` (
  `task_id` bigint unsigned NOT NULL,
  `tag_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`task_id`,`tag_id`),
  KEY `task_tag_FK` (`tag_id`),
  CONSTRAINT `task_tag_FK_1` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `task_tag_FK_2` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `comment` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `content` tinytext NOT NULL,
  `task_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `comment_ibfk_1` (`task_id`),
  CONSTRAINT `comment_FK_1` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);