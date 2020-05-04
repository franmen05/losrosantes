<?php
 class ConectionToSQLite extends SQLite3{ 
 
    private static $Instance;
	public static function getInstance($dirDB) 
    {
        if (!isset(self::$Instance)) {
            self::$Instance = new SQLite3($dirDB);
        }
        return self::$Instance;
    }  
}  
//Demostracion del uso de la Clase Conexion.php

//$Conexion=Conexion::getInstancia();

//Su funcion DML es $Conexion->exec("insert, update, delete...");

//$Conexion->exec("INSERT INTO `Cocinas`(`Nombre`,`Descripcion`) VALUES ('PuestoDeQuipes','La cocina de PuestoDeQuipes');");

//$Conexion->exec("DELETE FROM `Cocinas` WHERE `CodigoCocina` > 1;");

//$result = $Conexion->query('SELECT * FROM Cocinas');

//print_r($Conexion->query('SELECT * FROM Cocinas')->fetchArray());
 
?>  