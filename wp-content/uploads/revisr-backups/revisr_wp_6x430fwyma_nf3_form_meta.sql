
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
DROP TABLE IF EXISTS `wp_6x430fwyma_nf3_form_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_6x430fwyma_nf3_form_meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL,
  `key` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `wp_6x430fwyma_nf3_form_meta` WRITE;
/*!40000 ALTER TABLE `wp_6x430fwyma_nf3_form_meta` DISABLE KEYS */;
INSERT INTO `wp_6x430fwyma_nf3_form_meta` VALUES (1,1,'objectType','Form Setting'),(2,1,'editActive','1'),(3,1,'show_title','0'),(4,1,'clear_complete','1'),(5,1,'hide_complete','1'),(6,1,'currency','usd'),(7,1,'add_submit','1'),(8,1,'logged_in','0'),(9,2,'objectType','Form Setting'),(10,2,'editActive','1'),(11,2,'show_title','0'),(12,2,'clear_complete','1'),(13,2,'hide_complete','1'),(14,2,'currency','usd'),(15,2,'add_submit','1'),(16,2,'logged_in','0'),(17,2,'lock','0'),(18,2,'wrapper_class',''),(19,2,'element_class',''),(20,2,'not_logged_in_msg',''),(21,2,'sub_limit_number',NULL),(22,2,'sub_limit_msg',''),(23,1,'wrapper_class',''),(24,1,'element_class',''),(25,1,'not_logged_in_msg',''),(26,1,'sub_limit_number',NULL),(27,1,'sub_limit_msg','');
/*!40000 ALTER TABLE `wp_6x430fwyma_nf3_form_meta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

