
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
DROP TABLE IF EXISTS `wp_6x430fwyma_nf3_field_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_6x430fwyma_nf3_field_meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL,
  `key` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=180 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `wp_6x430fwyma_nf3_field_meta` WRITE;
/*!40000 ALTER TABLE `wp_6x430fwyma_nf3_field_meta` DISABLE KEYS */;
INSERT INTO `wp_6x430fwyma_nf3_field_meta` VALUES (1,1,'objectType','Field'),(2,1,'objectDomain','fields'),(3,1,'editActive',''),(4,1,'label_pos','above'),(5,1,'required','1'),(6,1,'placeholder',''),(7,1,'default',''),(8,1,'wrapper_class',''),(9,1,'element_class',''),(10,1,'input_limit',''),(11,1,'input_limit_type','characters'),(12,1,'input_limit_message','Character(s) left'),(13,1,'manual_key',''),(14,1,'disable_input',''),(15,1,'admin_label',''),(16,1,'help_text',''),(17,1,'desc_text',''),(18,1,'desc_pos',''),(19,1,'disable_browser_autocomplete',''),(20,1,'mask',''),(21,1,'custom_mask',''),(22,1,'order','1'),(23,2,'objectType','Field'),(24,2,'objectDomain','fields'),(25,2,'editActive',''),(26,2,'label_pos','above'),(27,2,'required','1'),(28,2,'default',''),(29,2,'placeholder',''),(30,2,'wrapper_class',''),(31,2,'element_class',''),(32,2,'admin_label',''),(33,2,'help_text',''),(34,2,'desc_text',''),(35,2,'desc_pos',''),(36,2,'order','2'),(37,3,'objectType','Field'),(38,3,'objectDomain','fields'),(39,3,'editActive',''),(40,3,'label_pos','above'),(41,3,'required','1'),(42,3,'placeholder',''),(43,3,'default',''),(44,3,'wrapper_class',''),(45,3,'element_class',''),(46,3,'input_limit',''),(47,3,'input_limit_type','characters'),(48,3,'input_limit_message','Character(s) left'),(49,3,'manual_key',''),(50,3,'disable_input',''),(51,3,'admin_label',''),(52,3,'help_text',''),(53,3,'desc_text',''),(54,3,'desc_pos',''),(55,3,'disable_browser_autocomplete',''),(56,3,'textarea_rte',''),(57,3,'disable_rte_mobile',''),(58,3,'textarea_media',''),(59,3,'order','3'),(60,4,'objectType','Field'),(61,4,'objectDomain','fields'),(62,4,'editActive',''),(63,4,'label_pos','above'),(64,4,'required','1'),(65,4,'placeholder',''),(66,4,'default',''),(67,4,'wrapper_class',''),(68,4,'element_class',''),(69,4,'input_limit',''),(70,4,'input_limit_type','characters'),(71,4,'input_limit_message','Character(s) left'),(72,4,'manual_key','1'),(73,4,'disable_input',''),(74,4,'admin_label',''),(75,4,'help_text',''),(76,4,'desc_text',''),(77,4,'desc_pos',''),(78,4,'spam_answer','7'),(79,4,'order','4'),(87,6,'order','9999'),(88,6,'objectType','Field'),(89,6,'objectDomain','fields'),(90,6,'editActive',''),(91,6,'processing_label','Processing'),(92,6,'wrapper_class',''),(93,6,'element_class',''),(94,7,'objectType','Field'),(95,7,'objectDomain','fields'),(96,7,'editActive',''),(97,7,'label_pos','above'),(98,7,'required','1'),(99,7,'placeholder',''),(100,7,'default',''),(101,7,'wrapper_class',''),(102,7,'element_class',''),(103,7,'input_limit',''),(104,7,'input_limit_type','characters'),(105,7,'input_limit_message','Character(s) left'),(106,7,'manual_key',''),(107,7,'disable_input',''),(108,7,'admin_label',''),(109,7,'help_text',''),(110,7,'desc_text',''),(111,7,'desc_pos',''),(112,7,'disable_browser_autocomplete',''),(113,7,'mask',''),(114,7,'custom_mask',''),(115,7,'order','1'),(116,8,'objectType','Field'),(117,8,'objectDomain','fields'),(118,8,'editActive',''),(119,8,'label_pos','above'),(120,8,'required','1'),(121,8,'default',''),(122,8,'placeholder',''),(123,8,'wrapper_class',''),(124,8,'element_class',''),(125,8,'admin_label',''),(126,8,'help_text',''),(127,8,'desc_text',''),(128,8,'desc_pos',''),(129,8,'order','2'),(130,9,'objectType','Field'),(131,9,'objectDomain','fields'),(132,9,'editActive',''),(133,9,'label_pos','above'),(134,9,'required','1'),(135,9,'placeholder',''),(136,9,'default',''),(137,9,'wrapper_class',''),(138,9,'element_class',''),(139,9,'input_limit',''),(140,9,'input_limit_type','characters'),(141,9,'input_limit_message','Character(s) left'),(142,9,'manual_key',''),(143,9,'disable_input',''),(144,9,'admin_label',''),(145,9,'help_text',''),(146,9,'desc_text',''),(147,9,'desc_pos',''),(148,9,'disable_browser_autocomplete',''),(149,9,'textarea_rte',''),(150,9,'disable_rte_mobile',''),(151,9,'textarea_media',''),(152,9,'order','3'),(153,10,'objectType','Field'),(154,10,'objectDomain','fields'),(155,10,'editActive',''),(156,10,'label_pos','above'),(157,10,'required','1'),(158,10,'placeholder',''),(159,10,'default',''),(160,10,'wrapper_class',''),(161,10,'element_class',''),(162,10,'input_limit',''),(163,10,'input_limit_type','characters'),(164,10,'input_limit_message','Character(s) left'),(165,10,'manual_key','1'),(166,10,'disable_input',''),(167,10,'admin_label',''),(168,10,'help_text',''),(169,10,'desc_text',''),(170,10,'desc_pos',''),(171,10,'spam_answer','7'),(172,10,'order','4'),(173,11,'order','9999'),(174,11,'objectType','Field'),(175,11,'objectDomain','fields'),(176,11,'editActive',''),(177,11,'processing_label','Processing'),(178,11,'wrapper_class',''),(179,11,'element_class','');
/*!40000 ALTER TABLE `wp_6x430fwyma_nf3_field_meta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

