
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
DROP TABLE IF EXISTS `wp_6x430fwyma_nf_objectmeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_6x430fwyma_nf_objectmeta` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `object_id` bigint(20) NOT NULL,
  `meta_key` varchar(255) NOT NULL,
  `meta_value` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `wp_6x430fwyma_nf_objectmeta` WRITE;
/*!40000 ALTER TABLE `wp_6x430fwyma_nf_objectmeta` DISABLE KEYS */;
INSERT INTO `wp_6x430fwyma_nf_objectmeta` VALUES (1,1,'date_updated','2016-07-01'),(2,1,'form_title','Contact Form'),(3,1,'show_title','0'),(4,1,'save_subs','1'),(5,1,'logged_in','0'),(6,1,'append_page',''),(7,1,'ajax','0'),(8,1,'clear_complete','1'),(9,1,'hide_complete','1'),(10,1,'success_msg','Your form has been successfully submitted.'),(11,1,'email_from',''),(12,1,'email_type','html'),(13,1,'user_email_msg','Thank you so much for contacting us. We will get back to you shortly.'),(14,1,'user_email_fields','0'),(15,1,'admin_email_msg',''),(16,1,'admin_email_fields','1'),(17,1,'admin_attach_csv','0'),(18,1,'email_from_name',''),(19,2,'date_updated','2014-09-09'),(20,2,'active','1'),(21,2,'name','Email User'),(22,2,'type','email'),(23,2,'email_format','html'),(24,2,'attach_csv','1'),(25,2,'from_name',''),(26,2,'from_address',''),(27,2,'reply_to',''),(28,2,'to','field_2'),(29,2,'cc',''),(30,2,'bcc',''),(31,2,'email_subject','Thank you for contacting us!'),(32,2,'email_message','Thank you so much for contacting us. We will get back to you shortly.'),(33,2,'redirect_url',''),(34,2,'success_message_loc','ninja_forms_display_before_fields'),(35,2,'success_msg',''),(36,3,'date_updated','2014-09-09'),(37,3,'active','1'),(38,3,'name','Success Message'),(39,3,'type','success_message'),(40,3,'email_format','html'),(41,3,'attach_csv','0'),(42,3,'from_name',''),(43,3,'from_address',''),(44,3,'reply_to',''),(45,3,'to',''),(46,3,'cc',''),(47,3,'bcc',''),(48,3,'email_subject',''),(49,3,'email_message',''),(50,3,'redirect_url',''),(51,3,'success_message_loc','ninja_forms_display_after_fields'),(52,3,'success_msg','Your form has been successfully submitted.'),(53,3,'text_message_number',''),(54,3,'text_message_carrier','0'),(55,3,'text_message_message',''),(56,4,'date_updated','2014-09-09'),(57,4,'active','1'),(58,4,'name','Email Admin'),(59,4,'type','email'),(60,4,'email_format','html'),(61,4,'attach_csv','1'),(62,4,'from_name',''),(63,4,'from_address',''),(64,4,'reply_to','field_2'),(65,4,'to',''),(66,4,'cc',''),(67,4,'bcc',''),(68,4,'email_subject','Ninja Form Submission'),(69,4,'email_message','[ninja_forms_all_fields]'),(70,4,'redirect_url',''),(71,4,'success_message_loc','ninja_forms_display_before_fields'),(72,4,'success_msg',''),(73,4,'text_message_number',''),(74,4,'text_message_carrier','0'),(75,4,'text_message_message','');
/*!40000 ALTER TABLE `wp_6x430fwyma_nf_objectmeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

