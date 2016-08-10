
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
DROP TABLE IF EXISTS `wp_6x430fwyma_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_6x430fwyma_terms` (
  `term_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `slug` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `term_group` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`term_id`),
  KEY `slug` (`slug`(191)),
  KEY `name` (`name`(191))
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `wp_6x430fwyma_terms` WRITE;
/*!40000 ALTER TABLE `wp_6x430fwyma_terms` DISABLE KEYS */;
INSERT INTO `wp_6x430fwyma_terms` VALUES (1,'Uncategorized','uncategorized',0),(2,'Blogroll','blogroll',0),(3,'Primary Menu','primary-menu',0),(5,'Stratus','stratus',0),(6,'1000+ Icons','1000-icons',0),(7,'25+ Shortcodes','25-shortcodes',0),(8,'Bootstrap','bootstrap',0),(9,'Localized','localized',0),(10,'Page Builder','page-builder',0),(11,'Parallax','parallax',0),(12,'Responsive','responsive',0),(13,'Retina Ready','retina-ready',0),(14,'Shortcodes','shortcodes',0),(15,'Touch Enabled','touch-enabled',0),(16,'WPML Compatible','wpml-compatible',0),(17,'3 Col Pricing','3-col-pricing',0),(18,'4 Col Pricing','4-col-pricing',0),(19,'5 Col Pricing','5-col-pricing',0),(20,'About','about',0),(21,'Careers','careers',0),(22,'Collaboration','collaboration',0),(23,'Development','development',0),(24,'Empower','empower',0),(25,'Euro','euro',0),(26,'Home 1','home-1',0),(27,'Home 2','home-2',0),(28,'Home 2 Service Block 2','home-2-service-block-2',0),(29,'Home 2 Service Bock 1','home-2-service-bock-1',0),(30,'Home 3','home-3',0),(31,'Home App','home-app',0),(32,'Home Cloud 1','home-cloud',0),(33,'Home Cloud 2','home-cloud-2',0),(34,'Home Page Testimonials','home-page-testimonials',0),(35,'Home Product','home-product',0),(36,'Home Product 2','home-product-2',0),(37,'Innovate','innovate',0),(38,'Integration','integration',0),(39,'locations','locations',0),(40,'Oculus','oculus',0),(41,'Showcase','showcase',0),(42,'Stratus','stratus',0),(43,'Tour 1 - Group 1','tour-1-group-1',0),(44,'Tour 1 - Group 2','tour-1-group-2',0),(45,'Tour 2 - Group 1','tour-2-group-1',0),(46,'Tour 2 - Group 2','tour-2-group-2',0),(47,'Default Main Menu','default-main-menu',0),(48,'Menu 1','menu-1',0),(49,'One Pager','one-pager',0),(50,'Primary Navigation','primary-navigation',0),(51,'Gallery','post-format-gallery',0),(52,'Video','post-format-video',0),(53,'Quote','post-format-quote',0),(54,'Link','post-format-link',0),(55,'Audio','post-format-audio',0);
/*!40000 ALTER TABLE `wp_6x430fwyma_terms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

