-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 29, 2023 at 08:51 AM
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
-- Table structure for table `weddingdecro`
--

CREATE TABLE `weddingdecro` (
  `wid` int(4) NOT NULL,
  `wname` text NOT NULL,
  `waddress` text NOT NULL,
  `wcity` text NOT NULL,
  `wservices` text NOT NULL,
  `wcontact` text NOT NULL,
  `wprice` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `weddingdecro`
--

INSERT INTO `weddingdecro` (`wid`, `wname`, `waddress`, `wcity`, `wservices`, `wcontact`, `wprice`) VALUES
(1, 'Wedding Planner Emily White', '123 Main St, City, Country', 'Nadiad', 'Full Wedding Planning', 'planneremily@example.com', 20000),
(2, 'Wedding Planner Alex Brown', '456 First Ave, Town, Country', 'Surat', 'Partial Wedding Planning', 'planneralex@example.com', 15000),
(3, 'Wedding Planner Sofia Martinez', '789 Lake Rd, Village, Country', 'Anand', 'Day-of Coordination ', 'plannersofia@example.com', 80000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `weddingdecro`
--
ALTER TABLE `weddingdecro`
  ADD PRIMARY KEY (`wid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `weddingdecro`
--
ALTER TABLE `weddingdecro`
  MODIFY `wid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
