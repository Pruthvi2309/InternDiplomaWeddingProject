-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2023 at 01:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wms`
--

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `fid` int(11) NOT NULL,
  `frating` float NOT NULL,
  `fname` text NOT NULL,
  `fcontent` text NOT NULL,
  `fprice` text NOT NULL,
  `ffillings` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`fid`, `frating`, `fname`, `fcontent`, `fprice`, `ffillings`) VALUES
(1, 4.3, 'Classic Vanilla', 'A timeless favourite with layers of vanilla sponge and rich buttercream frosting.', '1200', 'cigarellos'),
(2, 5, 'Chocolate Delight', 'Indulge in layers of decadent chocolate and silky chocolate ganache', '4200', 'sprinkles'),
(3, 4.7, 'Strawberry Bliss', 'Enjoy a burst of freshness with strawberry-flavoured cake and cream cheese frosting.', '5300', 'cream'),
(4, 3.5, 'Strawberry Cake', 'This gluten-free strawberry cake is topped with a luscious strawberry buttercream giving it so much', '$15 per price', 'frosting');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`fid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
