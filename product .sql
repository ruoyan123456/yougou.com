-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-12-09 03:07:34
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `h5_1908`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` decimal(20,2) NOT NULL COMMENT '商品价格',
  `pic` text NOT NULL COMMENT '商品图片',
  `name` varchar(40) NOT NULL COMMENT '标题名'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `pic`, `name`) VALUES
(1, '甜美 短靴', '998.00', '[{"p1":"../images/101303954_01_mb.jpg","p2":"../images/blackL-belle.png","p3":"../images/101303954_05_m.jpg","p4":"../images/101303954_04_m.jpg","p5":"../images/101303954_06_m.jpg","p6":"../images/101303954_03_m.jpg","p7":"../images/101303954_07_m.jpg"}]', 'BELLE/百丽2019冬新商场同款后拉链牛皮革女皮短靴单里U4U1DDD9'),
(2, 'OL通勤 短靴', '938.00', '[{"p1":"../images/101271720_01_mb.jpg","p2":"../images/blackL-tata.png","p3":"../images/101271720_06_m.jpg","p4":"../images/101271720_04_m.jpg","p5":"../images/101271720_03_m.jpg","p6":"../images/101271720_02_m.jpg","p7":"../images/101271720_07_m.jpg"}]', 'Tata/他她2019冬专柜同款黑色牛皮革通勤拉链粗高跟女短靴XEO01DD9'),
(3, '英伦 短靴', '858.00', '[{"p1":"../images/101274609_01_mb.jpg","p2":"../images/blackL-teenmix.png","p3":"../images/101274609_01_m.jpg","p4":"../images/101274609_06_m.jpg","p5":"../images/101274609_03_m.jpg","p6":"../images/101274609_05_m.jpg","p7":"../images/101274609_07_m.jpg"}]', 'Teenmix/天美意冬商场同款粉色牛皮革方跟马丁靴女短靴AS521DD8'),
(4, '简约 短靴', '1598.00', '[{"p1":"../images/101230119_01_mb.jpg","p2":"../images/blackL-staccato.png","p3":"../images/101255026_03_m.jpg","p4":"../images/101255026_01_m.jpg","p5":"../images/101255026_05_m.jpg","p6":"../images/101255026_07_m.jpg","p7":"../images/101255026_06_m.jpg"}]', 'STACCATO/思加图2018冬专柜同款牛皮时尚方跟尖头女短靴9T805DD8'),
(5, '简约 短靴', '1598.00', '[{"p1":"../images/101257582_01_mb.jpg","p2":"../images/blackL-millies.png","p3":"../images/101257582_01_mb.jpg","p4":"../images/blackL-belle.png","p5":"../images/blackL-belle.png","p6":"../images/blackL-belle.png","p7":"../images/blackL-belle.png"}]', 'Teenmix/天美意冬商场同款粉色牛皮革方跟马丁靴女短靴AS521DD8'),
(6, '休闲 短靴', '718.00', '[{"p1":"../images/101273044_01_mb.jpg","p2":"../images/blackL-senda.png","p3":"../images/blackL-belle.png","p4":"../images/blackL-belle.png","p5":"../images/blackL-belle.png","p6":"../images/blackL-belle.png","p7":"../images/blackL-belle.png"}]', 'Teenmix/天美意冬商场同款粉色牛皮革方跟马丁靴女短靴AS521DD8'),
(7, '休闲 短靴', '729.00', '[{"p1":"../images/101276713_01_mb.jpg","p2":"../images/blackL-bata.png","p3":"../images/blackL-belle.png","p4":"../images/blackL-belle.png","p5":"../images/blackL-belle.png","p6":"../images/blackL-belle.png","p7":"../images/blackL-belle.png"}]', 'Teenmix/天美意冬商场同款粉色牛皮革方跟马丁靴女短靴AS521DD8'),
(8, '英伦 短靴', '1598.00', '[{"p1":"../images/101254104_01_mb.jpg","p2":"../images/blackL-hushpuppies.png","p3":"../images/blackL-belle.png","p4":"../images/blackL-belle.png","p5":"../images/blackL-belle.png","p6":"../images/blackL-belle.png","p7":"../images/blackL-belle.png"}]', 'Teenmix/天美意冬商场同款粉色牛皮革方跟马丁靴女短靴AS521DD8'),
(9, '欧美 短靴', '1598.00', '[{"p1":"../images/101286941_01_mb.jpg","p2":"../images/blackL-joypeace.png","p3":"../images/blackL-belle.png","p4":"../images/blackL-belle.png","p5":"../images/blackL-belle.png","p6":"../images/blackL-belle.png","p7":"../images/blackL-belle.png"}]', 'Teenmix/天美意冬商场同款粉色牛皮革方跟马丁靴女短靴AS521DD8'),
(10, '休闲 短靴', '888.00', '[{"p1":"../images/101230119_01_mb.jpg","p2":"../images/blackL-bata.png","p3":"../images/blackL-belle.png","p4":"../images/blackL-belle.png","p5":"../images/blackL-belle.png","p6":"../images/blackL-belle.png","p7":"../images/blackL-belle.png"}]', 'Teenmix/天美意冬商场同款粉色牛皮革方跟马丁靴女短靴AS521DD8'),
(11, '时尚休闲 休闲靴', '1498.00', '[{"p1":"../images/101238371_01_mb.jpg","p2":"../images/blackL-cat.png","p3":"../images/blackL-belle.png","p4":"../images/blackL-belle.png","p5":"../images/blackL-belle.png","p6":"../images/blackL-belle.png","p7":"../images/blackL-belle.png"}]', 'Teenmix/天美意冬商场同款粉色牛皮革方跟马丁靴女短靴AS521DD8'),
(12, '英伦 短靴', '898.00', '[{"p1":"../images/101277848_01_mb.jpg","p2":"../images/blackL-belle.png","p3":"../images/blackL-belle.png","p4":"../images/blackL-belle.png","p5":"../images/blackL-belle.png","p6":"../images/blackL-belle.png","p7":"../images/blackL-belle.png"}]', 'Teenmix/天美意冬商场同款粉色牛皮革方跟马丁靴女短靴AS521DD8'),
(52, '商品48', '480.00', '[{}]', ''),
(53, '商品49', '490.00', '[{}]', ''),
(54, '商品50', '500.00', '[{}]', ''),
(55, '商品51', '510.00', '[{}]', ''),
(56, '商品52', '520.00', '[{}]', ''),
(57, '商品53', '530.00', '[{}]', ''),
(58, '商品54', '540.00', '[{}]', ''),
(59, '商品55', '550.00', '[{}]', ''),
(60, '商品56', '560.00', '[{}]', ''),
(61, '商品57', '570.00', '[{}]', ''),
(62, '商品58', '580.00', '[{}]', ''),
(63, '商品59', '590.00', '[{}]', ''),
(64, '商品60', '600.00', '[{}]', ''),
(65, '商品61', '610.00', '[{}]', ''),
(66, '商品62', '620.00', '[{}]', ''),
(67, '商品63', '630.00', '[{}]', ''),
(68, '商品64', '640.00', '[{}]', ''),
(69, '商品65', '650.00', '[{}]', ''),
(70, '商品66', '660.00', '[{}]', ''),
(71, '商品67', '670.00', '[{}]', ''),
(72, '商品68', '680.00', '[{}]', ''),
(73, '商品69', '690.00', '[{}]', ''),
(74, '商品70', '700.00', '[{}]', ''),
(75, '商品71', '710.00', '[{}]', ''),
(76, '商品72', '720.00', '[{}]', ''),
(77, '商品73', '730.00', '[{}]', ''),
(78, '商品74', '740.00', '[{}]', ''),
(79, '商品75', '750.00', '[{}]', ''),
(80, '商品76', '760.00', '[{}]', ''),
(81, '商品77', '770.00', '[{}]', ''),
(82, '商品78', '780.00', '[{}]', ''),
(83, '商品79', '790.00', '[{}]', ''),
(84, '商品80', '800.00', '[{}]', ''),
(85, '商品81', '810.00', '[{}]', ''),
(86, '商品82', '820.00', '[{}]', ''),
(87, '商品83', '830.00', '[{}]', ''),
(88, '商品84', '840.00', '[{}]', ''),
(89, '商品85', '850.00', '[{}]', ''),
(90, '商品86', '860.00', '[{}]', ''),
(91, '商品87', '870.00', '[{}]', ''),
(92, '商品88', '880.00', '[{}]', ''),
(93, '商品89', '890.00', '[{}]', ''),
(94, '商品90', '900.00', '[{}]', ''),
(95, '商品91', '910.00', '[{}]', ''),
(96, '商品92', '920.00', '[{}]', ''),
(97, '商品93', '930.00', '[{}]', ''),
(98, '商品94', '940.00', '[{}]', ''),
(99, '商品95', '950.00', '[{}]', ''),
(100, '商品96', '960.00', '[{}]', ''),
(101, '商品97', '970.00', '[{}]', ''),
(102, '商品98', '980.00', '[{}]', ''),
(103, '商品99', '990.00', '[{}]', ''),
(104, '商品100', '1000.00', '[{}]', ''),
(105, '商品101', '1010.00', '[{}]', ''),
(106, '商品102', '1020.00', '[{}]', ''),
(107, '商品103', '1030.00', '[{}]', ''),
(108, '商品104', '1040.00', '[{}]', ''),
(109, '商品105', '1050.00', '[{}]', ''),
(110, '商品106', '1060.00', '[{}]', ''),
(111, '商品107', '1070.00', '[{}]', ''),
(112, '商品108', '1080.00', '[{}]', ''),
(113, '商品109', '1090.00', '[{}]', ''),
(114, '商品110', '1100.00', '[{}]', ''),
(115, '商品111', '1110.00', '[{}]', ''),
(116, '商品112', '1120.00', '[{}]', ''),
(117, '商品113', '1130.00', '[{}]', ''),
(118, '商品114', '1140.00', '[{}]', ''),
(119, '商品115', '1150.00', '[{}]', ''),
(120, '商品116', '1160.00', '[{}]', ''),
(121, '商品117', '1170.00', '[{}]', ''),
(122, '商品118', '1180.00', '[{}]', ''),
(123, '商品119', '1190.00', '[{}]', ''),
(124, '商品120', '1200.00', '[{}]', ''),
(125, '商品121', '1210.00', '[{}]', ''),
(126, '商品122', '1220.00', '[{}]', ''),
(127, '商品123', '1230.00', '[{}]', ''),
(128, '商品124', '1240.00', '[{}]', ''),
(129, '商品125', '1250.00', '[{}]', ''),
(130, '商品126', '1260.00', '[{}]', ''),
(131, '商品127', '1270.00', '[{}]', ''),
(132, '商品128', '1280.00', '[{}]', ''),
(133, '商品129', '1290.00', '[{}]', ''),
(134, '商品130', '1300.00', '[{}]', ''),
(135, '商品131', '1310.00', '[{}]', ''),
(136, '商品132', '1320.00', '[{}]', ''),
(137, '商品133', '1330.00', '[{}]', ''),
(138, '商品134', '1340.00', '[{}]', ''),
(139, '商品135', '1350.00', '[{}]', ''),
(140, '商品136', '1360.00', '[{}]', ''),
(141, '商品137', '1370.00', '[{}]', ''),
(142, '商品138', '1380.00', '[{}]', ''),
(143, '商品139', '1390.00', '[{}]', ''),
(144, '商品140', '1400.00', '[{}]', ''),
(145, '商品141', '1410.00', '[{}]', ''),
(146, '商品142', '1420.00', '[{}]', ''),
(147, '商品143', '1430.00', '[{}]', ''),
(148, '商品144', '1440.00', '[{}]', ''),
(149, '商品145', '1450.00', '[{}]', ''),
(150, '商品146', '1460.00', '[{}]', ''),
(151, '商品147', '1470.00', '[{}]', ''),
(152, '商品148', '1480.00', '[{}]', ''),
(153, '商品149', '1490.00', '[{}]', ''),
(154, '商品150', '1500.00', '[{}]', ''),
(155, '商品151', '1510.00', '[{}]', ''),
(156, '商品152', '1520.00', '[{}]', ''),
(157, '商品153', '1530.00', '[{}]', ''),
(158, '商品154', '1540.00', '[{}]', ''),
(159, '商品155', '1550.00', '[{}]', ''),
(160, '商品156', '1560.00', '[{}]', ''),
(161, '商品157', '1570.00', '[{}]', ''),
(162, '商品158', '1580.00', '[{}]', ''),
(163, '商品159', '1590.00', '[{}]', ''),
(164, '商品160', '1600.00', '[{}]', ''),
(165, '商品161', '1610.00', '[{}]', ''),
(166, '商品162', '1620.00', '[{}]', ''),
(167, '商品163', '1630.00', '[{}]', ''),
(168, '商品164', '1640.00', '[{}]', ''),
(169, '商品165', '1650.00', '[{}]', ''),
(170, '商品166', '1660.00', '[{}]', ''),
(171, '商品167', '1670.00', '[{}]', ''),
(172, '商品168', '1680.00', '[{}]', ''),
(173, '商品169', '1690.00', '[{}]', ''),
(174, '商品170', '1700.00', '[{}]', ''),
(175, '商品171', '1710.00', '[{}]', ''),
(176, '商品172', '1720.00', '[{}]', ''),
(177, '商品173', '1730.00', '[{}]', ''),
(178, '商品174', '1740.00', '[{}]', ''),
(179, '商品175', '1750.00', '[{}]', ''),
(180, '商品176', '1760.00', '[{}]', ''),
(181, '商品177', '1770.00', '[{}]', ''),
(182, '商品178', '1780.00', '[{}]', ''),
(183, '商品179', '1790.00', '[{}]', ''),
(184, '商品180', '1800.00', '[{}]', ''),
(185, '商品181', '1810.00', '[{}]', ''),
(186, '商品182', '1820.00', '[{}]', ''),
(187, '商品183', '1830.00', '[{}]', ''),
(188, '商品184', '1840.00', '[{}]', ''),
(189, '商品185', '1850.00', '[{}]', ''),
(190, '商品186', '1860.00', '[{}]', ''),
(191, '商品187', '1870.00', '[{}]', ''),
(192, '商品188', '1880.00', '[{}]', ''),
(193, '商品189', '1890.00', '[{}]', ''),
(194, '商品190', '1900.00', '[{}]', ''),
(195, '商品191', '1910.00', '[{}]', ''),
(196, '商品192', '1920.00', '[{}]', ''),
(197, '商品193', '1930.00', '[{}]', ''),
(198, '商品194', '1940.00', '[{}]', ''),
(199, '商品195', '1950.00', '[{}]', ''),
(200, '商品196', '1960.00', '[{}]', ''),
(201, '商品197', '1970.00', '[{}]', ''),
(202, '商品198', '1980.00', '[{}]', ''),
(203, '商品199', '1990.00', '[{}]', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=204;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
