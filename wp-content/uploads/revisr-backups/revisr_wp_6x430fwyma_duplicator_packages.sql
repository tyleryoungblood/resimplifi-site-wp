
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
DROP TABLE IF EXISTS `wp_6x430fwyma_duplicator_packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_6x430fwyma_duplicator_packages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `hash` varchar(50) NOT NULL,
  `status` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `owner` varchar(60) NOT NULL,
  `package` mediumblob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `hash` (`hash`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `wp_6x430fwyma_duplicator_packages` WRITE;
/*!40000 ALTER TABLE `wp_6x430fwyma_duplicator_packages` DISABLE KEYS */;
INSERT INTO `wp_6x430fwyma_duplicator_packages` VALUES (1,'20160809_resimplifiinc','57aa17fc692913966160809175052',100,'2016-08-09 17:51:34','tyleryoungblood','O:11:\"DUP_Package\":23:{s:7:\"Created\";s:19:\"2016-08-09 17:50:52\";s:7:\"Version\";s:6:\"1.1.14\";s:9:\"VersionWP\";s:5:\"4.5.3\";s:9:\"VersionDB\";s:6:\"5.5.43\";s:10:\"VersionPHP\";s:6:\"5.4.42\";s:9:\"VersionOS\";s:5:\"Linux\";s:2:\"ID\";i:1;s:4:\"Name\";s:22:\"20160809_resimplifiinc\";s:4:\"Hash\";s:29:\"57aa17fc692913966160809175052\";s:8:\"NameHash\";s:52:\"20160809_resimplifiinc_57aa17fc692913966160809175052\";s:4:\"Type\";i:0;s:5:\"Notes\";s:37:\"initial package for localhost install\";s:9:\"StorePath\";s:67:\"/home/content/a2pnexwpnas02_data03/48/3451248/html/wp-snapshots/tmp\";s:8:\"StoreURL\";s:44:\"http://b35.b67.myftpupload.com/wp-snapshots/\";s:8:\"ScanFile\";s:62:\"20160809_resimplifiinc_57aa17fc692913966160809175052_scan.json\";s:7:\"Runtime\";s:10:\"34.11 sec.\";s:7:\"ExeSize\";s:8:\"346.08KB\";s:7:\"ZipSize\";s:8:\"156.28MB\";s:6:\"Status\";N;s:6:\"WPUser\";s:15:\"tyleryoungblood\";s:7:\"Archive\";O:11:\"DUP_Archive\":13:{s:10:\"FilterDirs\";s:0:\"\";s:10:\"FilterExts\";s:0:\"\";s:13:\"FilterDirsAll\";a:0:{}s:13:\"FilterExtsAll\";a:0:{}s:8:\"FilterOn\";i:0;s:4:\"File\";s:64:\"20160809_resimplifiinc_57aa17fc692913966160809175052_archive.zip\";s:6:\"Format\";s:3:\"ZIP\";s:7:\"PackDir\";s:50:\"/home/content/a2pnexwpnas02_data03/48/3451248/html\";s:4:\"Size\";i:163867435;s:4:\"Dirs\";a:0:{}s:5:\"Files\";a:0:{}s:10:\"FilterInfo\";O:23:\"DUP_Archive_Filter_Info\":6:{s:4:\"Dirs\";O:34:\"DUP_Archive_Filter_Scope_Directory\":4:{s:7:\"Warning\";a:0:{}s:10:\"Unreadable\";a:0:{}s:4:\"Core\";a:0:{}s:8:\"Instance\";a:0:{}}s:5:\"Files\";O:29:\"DUP_Archive_Filter_Scope_File\":5:{s:4:\"Size\";a:0:{}s:7:\"Warning\";a:0:{}s:10:\"Unreadable\";a:0:{}s:4:\"Core\";a:0:{}s:8:\"Instance\";a:0:{}}s:4:\"Exts\";O:29:\"DUP_Archive_Filter_Scope_Base\":2:{s:4:\"Core\";a:0:{}s:8:\"Instance\";a:0:{}}s:9:\"UDirCount\";i:0;s:10:\"UFileCount\";i:0;s:9:\"UExtCount\";i:0;}s:10:\"\0*\0Package\";r:1;}s:9:\"Installer\";O:13:\"DUP_Installer\":12:{s:4:\"File\";s:66:\"20160809_resimplifiinc_57aa17fc692913966160809175052_installer.php\";s:4:\"Size\";i:354382;s:10:\"OptsDBHost\";s:0:\"\";s:10:\"OptsDBPort\";s:0:\"\";s:10:\"OptsDBName\";s:0:\"\";s:10:\"OptsDBUser\";s:0:\"\";s:12:\"OptsSSLAdmin\";i:0;s:12:\"OptsSSLLogin\";i:0;s:11:\"OptsCacheWP\";i:0;s:13:\"OptsCachePath\";i:0;s:10:\"OptsURLNew\";s:0:\"\";s:10:\"\0*\0Package\";r:1;}s:8:\"Database\";O:12:\"DUP_Database\":12:{s:4:\"Type\";s:5:\"MySQL\";s:4:\"Size\";i:2265088;s:4:\"File\";s:65:\"20160809_resimplifiinc_57aa17fc692913966160809175052_database.sql\";s:4:\"Path\";N;s:12:\"FilterTables\";s:0:\"\";s:8:\"FilterOn\";i:0;s:4:\"Name\";N;s:10:\"Compatible\";s:0:\"\";s:10:\"\0*\0Package\";r:1;s:25:\"\0DUP_Database\0dbStorePath\";s:133:\"/home/content/a2pnexwpnas02_data03/48/3451248/html/wp-snapshots/tmp/20160809_resimplifiinc_57aa17fc692913966160809175052_database.sql\";s:23:\"\0DUP_Database\0EOFMarker\";s:0:\"\";s:26:\"\0DUP_Database\0networkFlush\";b:0;}}');
/*!40000 ALTER TABLE `wp_6x430fwyma_duplicator_packages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

