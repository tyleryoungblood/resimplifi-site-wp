
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
DROP TABLE IF EXISTS `wp_6x430fwyma_nf3_action_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_6x430fwyma_nf3_action_meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL,
  `key` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `wp_6x430fwyma_nf3_action_meta` WRITE;
/*!40000 ALTER TABLE `wp_6x430fwyma_nf3_action_meta` DISABLE KEYS */;
INSERT INTO `wp_6x430fwyma_nf3_action_meta` VALUES (1,1,'label','Success Message'),(2,1,'message','Your form has been successfully submitted.'),(3,1,'order','1'),(4,1,'objectType','Action'),(5,1,'objectDomain','actions'),(6,1,'editActive',''),(7,1,'payment_gateways',''),(8,1,'tag',''),(9,1,'to',''),(10,1,'email_subject',''),(11,1,'email_message',''),(12,1,'from_name',''),(13,1,'from_address',''),(14,1,'reply_to',''),(15,1,'email_format','html'),(16,1,'cc',''),(17,1,'bcc',''),(18,1,'attach_csv',''),(19,1,'redirect_url',''),(20,1,'success_msg','<p>Thank you so much for contacting us. We will get back to you shortly.</p>'),(21,2,'label','Admin Email'),(22,2,'to','a:1:{i:0;s:27:\"tyler@resimplifi.com\";}'),(23,2,'subject','Ninja Forms Submission'),(24,2,'message','{field:all_fields}'),(25,2,'order','2'),(26,2,'objectType','Action'),(27,2,'objectDomain','actions'),(28,2,'editActive',''),(29,2,'payment_gateways',''),(30,2,'tag',''),(31,2,'email_subject',''),(32,2,'email_message',''),(33,2,'from_name',''),(34,2,'from_address',''),(35,2,'reply_to',''),(36,2,'email_format','html'),(37,2,'cc',''),(38,2,'bcc',''),(39,2,'attach_csv',''),(40,3,'label','Save Submission'),(41,3,'order','3'),(42,3,'objectType','Action'),(43,3,'objectDomain','actions'),(44,3,'editActive',''),(45,3,'payment_gateways',''),(46,3,'tag',''),(47,3,'to',''),(48,3,'email_subject',''),(49,3,'email_message',''),(50,3,'from_name',''),(51,3,'from_address',''),(52,3,'reply_to',''),(53,3,'email_format','html'),(54,3,'cc',''),(55,3,'bcc',''),(56,3,'attach_csv',''),(57,3,'redirect_url',''),(58,4,'label','Success Message'),(59,4,'message','Your form has been successfully submitted.'),(60,4,'order','1'),(61,4,'objectType','Action'),(62,4,'objectDomain','actions'),(63,4,'editActive',''),(64,4,'payment_gateways',''),(65,4,'tag',''),(66,4,'to',''),(67,4,'email_subject',''),(68,4,'email_message',''),(69,4,'from_name',''),(70,4,'from_address',''),(71,4,'reply_to',''),(72,4,'email_format','html'),(73,4,'cc',''),(74,4,'bcc',''),(75,4,'attach_csv',''),(76,4,'redirect_url',''),(77,4,'success_msg','<p>Thank you so much for contacting us. We will get back to you shortly.</p>'),(78,5,'label','Admin Email'),(79,5,'to','a:1:{i:0;s:27:\"tyler@resimplifi.com\";}'),(80,5,'subject','Ninja Forms Submission'),(81,5,'message','{field:all_fields}'),(82,5,'order','2'),(83,5,'objectType','Action'),(84,5,'objectDomain','actions'),(85,5,'editActive',''),(86,5,'payment_gateways',''),(87,5,'tag',''),(88,5,'email_subject',''),(89,5,'email_message',''),(90,5,'from_name',''),(91,5,'from_address',''),(92,5,'reply_to',''),(93,5,'email_format','html'),(94,5,'cc',''),(95,5,'bcc',''),(96,5,'attach_csv',''),(97,6,'label','Save Submission'),(98,6,'order','3'),(99,6,'objectType','Action'),(100,6,'objectDomain','actions'),(101,6,'editActive',''),(102,6,'payment_gateways',''),(103,6,'tag',''),(104,6,'to',''),(105,6,'email_subject',''),(106,6,'email_message',''),(107,6,'from_name',''),(108,6,'from_address',''),(109,6,'reply_to',''),(110,6,'email_format','html'),(111,6,'cc',''),(112,6,'bcc',''),(113,6,'attach_csv',''),(114,6,'redirect_url','');
/*!40000 ALTER TABLE `wp_6x430fwyma_nf3_action_meta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

