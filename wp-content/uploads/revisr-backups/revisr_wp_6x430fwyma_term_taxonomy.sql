
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP TABLE IF EXISTS `wp_6x430fwyma_term_taxonomy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_6x430fwyma_term_taxonomy` (
  `term_taxonomy_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `term_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `taxonomy` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` bigint(20) unsigned NOT NULL DEFAULT '0',
  `count` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`term_taxonomy_id`),
  UNIQUE KEY `term_id_taxonomy` (`term_id`,`taxonomy`),
  KEY `taxonomy` (`taxonomy`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `wp_6x430fwyma_term_taxonomy` WRITE;
/*!40000 ALTER TABLE `wp_6x430fwyma_term_taxonomy` DISABLE KEYS */;
INSERT INTO `wp_6x430fwyma_term_taxonomy` VALUES (1,1,'category','',0,3),(2,2,'link_category','',0,0),(3,3,'nav_menu','',0,6),(5,5,'category','',0,14),(6,6,'post_tag','',0,1),(7,7,'post_tag','',0,0),(8,8,'post_tag','',0,1),(9,9,'post_tag','',0,1),(10,10,'post_tag','',0,1),(11,11,'post_tag','',0,1),(12,12,'post_tag','',0,1),(13,13,'post_tag','',0,2),(14,14,'post_tag','',0,1),(15,15,'post_tag','',0,1),(16,16,'post_tag','',0,1),(17,17,'themo_cpt_group','',0,3),(18,18,'themo_cpt_group','',0,4),(19,19,'themo_cpt_group','',0,5),(20,20,'themo_cpt_group','',0,7),(21,21,'themo_cpt_group','',0,3),(22,22,'themo_project_type','',0,4),(23,23,'themo_project_type','',0,4),(24,24,'themo_project_type','',0,4),(25,25,'themo_cpt_group','',0,2),(26,26,'themo_cpt_group','',0,15),(27,27,'themo_cpt_group','',0,7),(28,28,'themo_cpt_group','',0,1),(29,29,'themo_cpt_group','',0,0),(30,30,'themo_cpt_group','',0,10),(31,31,'themo_cpt_group','',0,13),(32,32,'themo_cpt_group','',0,6),(33,33,'themo_cpt_group','',0,4),(34,34,'themo_cpt_group','',0,7),(35,35,'themo_cpt_group','',0,3),(36,36,'themo_cpt_group','',0,7),(37,37,'themo_project_type','',0,2),(38,38,'themo_project_type','',0,5),(39,39,'themo_cpt_group','',0,3),(40,40,'themo_cpt_group','',0,0),(41,41,'themo_cpt_group','',0,1),(42,42,'themo_cpt_group','',0,18),(43,43,'themo_cpt_group','',0,5),(44,44,'themo_cpt_group','',0,0),(45,45,'themo_cpt_group','',0,2),(46,46,'themo_cpt_group','',0,4),(47,47,'nav_menu','',0,2),(48,48,'nav_menu','',0,2),(49,49,'nav_menu','',0,6),(50,50,'nav_menu','',0,29),(51,51,'post_format','',0,2),(52,52,'post_format','',0,1),(53,53,'post_format','',0,1),(54,54,'post_format','',0,1),(55,55,'post_format','',0,1);
/*!40000 ALTER TABLE `wp_6x430fwyma_term_taxonomy` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

