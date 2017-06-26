-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema kevbay
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema kevbay
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `kevbay` DEFAULT CHARACTER SET latin1 ;
USE `kevbay` ;

-- -----------------------------------------------------
-- Table `kevbay`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kevbay`.`products` (
  `item_id` MEDIUMINT(9) NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(60) NULL DEFAULT NULL,
  `department_name` VARCHAR(60) NULL DEFAULT NULL,
  `price` INT(5) NOT NULL,
  `stock_quanity` INT(5) NOT NULL,
  `autographed` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`item_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
