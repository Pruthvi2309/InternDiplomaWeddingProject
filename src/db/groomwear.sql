-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 29, 2023 at 07:26 AM
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
-- Table structure for table `groomwear`
--

CREATE TABLE `groomwear` (
  `gid` int(4) NOT NULL,
  `gname` text NOT NULL,
  `gdescription` text NOT NULL,
  `gcity` text NOT NULL,
  `gtype` text NOT NULL,
  `gprice` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `groomwear`
--

INSERT INTO `groomwear` (`gid`, `gname`, `gdescription`, `gcity`, `gtype`, `gprice`) VALUES
(1, 'Classic Tuxed', 'A black tuxedo with a satin lapel.', 'Nadiad', 'Tuxedo', 50000),
(2, 'Modern Suit', 'A slim-fit charcoal suit with a modern design.', 'Surat', 'Suit', 35000),
(3, 'Traditional Sherwani', 'An elegant sherwani with intricate embroidery.', 'Anand', 'Sherwani', 70000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groomwear`
--
ALTER TABLE `groomwear`
  ADD PRIMARY KEY (`gid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groomwear`
--
ALTER TABLE `groomwear`
  MODIFY `gid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
