-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 09-06-2023 a las 15:55:11
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `laboratorio_final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE IF NOT EXISTS `registro` (
  `nombre` varchar(20) NOT NULL,
  `primer_apellido` varchar(25) NOT NULL,
  `segundo_apellido` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(8) NOT NULL,
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nombre` (`nombre`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`nombre`, `primer_apellido`, `segundo_apellido`, `email`, `login`, `password`) VALUES
('pepito', 'grillo', 'grillo', 'bosque_verde@yahoo.es', 'pepgrill', 'pppppppp'),
('tamara', 'garcia', 'perez', 'margot@gmail.com', 'tamy', '77777777'),
('sanpito', 'pato', 'pato', 'mariprueba1@jdghsdhf.com', 'patito', '11111111');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
