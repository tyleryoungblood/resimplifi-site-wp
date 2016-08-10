
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
DROP TABLE IF EXISTS `wp_6x430fwyma_revisr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_6x430fwyma_revisr` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `message` text,
  `event` varchar(42) NOT NULL,
  `user` varchar(60) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `wp_6x430fwyma_revisr` WRITE;
/*!40000 ALTER TABLE `wp_6x430fwyma_revisr` DISABLE KEYS */;
INSERT INTO `wp_6x430fwyma_revisr` VALUES (1,'2016-08-10 10:12:21','Successfully created a new repository.','init','tyleryoungblood'),(2,'2016-08-10 10:15:01','Successfully backed up the database.','backup','tyleryoungblood'),(3,'2016-08-10 10:15:47','Committed <a href=\"http://b35.b67.myftpupload.com/wp-admin/admin.php?page=revisr_view_commit&commit=226a0b2&success=true\">#226a0b2</a> to the local repository.','commit','tyleryoungblood'),(4,'2016-08-10 10:16:15','Error pushing changes to the remote repository.','error','tyleryoungblood'),(5,'2016-08-10 10:19:13','Error backing up the database.','error','Revisr Bot'),(6,'2016-08-10 10:19:13','The daily backup was successful.','backup','Revisr Bot'),(7,'2016-08-10 10:19:13','Successfully backed up the database.','backup','Revisr Bot'),(8,'2016-08-10 10:19:14','The daily backup was successful.','backup','Revisr Bot'),(9,'2016-08-10 10:20:51','Error pushing changes to the remote repository.','error','tyleryoungblood'),(10,'2016-08-10 10:24:38','Error pushing changes to the remote repository.','error','tyleryoungblood'),(11,'2016-08-10 10:26:18','Error pushing changes to the remote repository.','error','tyleryoungblood'),(12,'2016-08-10 10:26:39','Error pulling changes from the remote repository.','error','tyleryoungblood'),(13,'2016-08-10 10:26:55','Error pushing changes to the remote repository.','error','tyleryoungblood'),(14,'2016-08-10 10:28:41','Error pushing changes to the remote repository.','error','tyleryoungblood'),(15,'2016-08-10 10:31:19','Error pushing changes to the remote repository.','error','tyleryoungblood'),(16,'2016-08-10 10:34:50','Error pushing changes to the remote repository.','error','tyleryoungblood'),(17,'2016-08-10 10:35:43','Error pushing changes to the remote repository.','error','tyleryoungblood'),(18,'2016-08-10 10:41:55','Error pulling changes from the remote repository.','error','tyleryoungblood'),(19,'2016-08-10 10:44:11','Error pulling changes from the remote repository.','error','tyleryoungblood'),(20,'2016-08-10 10:55:13','Error pulling changes from the remote repository.','error','tyleryoungblood'),(21,'2016-08-10 10:55:31','Discarded all uncommitted changes.','discard','tyleryoungblood'),(22,'2016-08-10 10:55:42','Error pulling changes from the remote repository.','error','tyleryoungblood'),(23,'2016-08-10 10:56:13','Error pushing changes to the remote repository.','error','tyleryoungblood'),(24,'2016-08-10 11:04:53','Successfully created a new repository.','init','tyleryoungblood'),(25,'2016-08-10 11:06:22','Successfully pushed 1 commit to origin/master.','push','tyleryoungblood'),(26,'2016-08-10 11:10:40','Successfully imported the database. ','import','tyleryoungblood'),(27,'2016-08-10 11:10:40','Successfully reverted the database to a previous commit. <a href=\"http://b35.b67.myftpupload.com/wp-admin/admin-post.php?action=process_revert&amp;revert_type=db&amp;db_hash=7e64c73&amp;revisr_revert_nonce=6d617fee57\">Undo</a>','revert','tyleryoungblood'),(28,'2016-08-10 11:12:41','Successfully backed up the database.','backup','tyleryoungblood'),(29,'2016-08-10 11:12:41','Committed <a href=\"http://b35.b67.myftpupload.com/wp-admin/admin.php?page=revisr_view_commit&commit=9252a25&success=true\">#9252a25</a> to the local repository.','commit','tyleryoungblood'),(30,'2016-08-10 11:13:27','Error pushing changes to the remote repository.','error','tyleryoungblood'),(31,'2016-08-10 11:17:23','Error pushing changes to the remote repository.','error','tyleryoungblood'),(32,'2016-08-10 11:19:26','Error pushing changes to the remote repository.','error','tyleryoungblood'),(33,'2016-08-10 11:21:52','Successfully created a new repository.','init','tyleryoungblood');
/*!40000 ALTER TABLE `wp_6x430fwyma_revisr` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

