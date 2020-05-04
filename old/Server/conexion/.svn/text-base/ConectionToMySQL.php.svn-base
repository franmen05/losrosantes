<?php

class ConectionToMySQL {

    private static $Instance;
    private static $Conection;
	public static function getInstance($host,$pass,$user,$db) 
    {
        if (!isset(self::$Instance)) {
            self::$Instance = new ConectionToMySQL();
			self::$Conection=self::$Instance->connect($host,$pass,$user,$db);
        }
        return self::$Instance;
    }  

	public function connect($host,$pass,$user,$db) {

		if (!($link = mysql_connect($host,$user,$pass))){

			echo "Error al conectarse con la base de datos.";
			exit();
		}

		if (!mysql_select_db($db, $link)){

			echo "Error al seleccionar la base de datos.";
			exit();
		}
		return $link;
	}
	
	public function query($consulta){  
	  $result = mysql_query($consulta,self::$Conection)
	 		 or die("Consulta fallida: " . mysql_error());  
/*	  if(!$result){  
	 	exit;  
  	  }  */
 	 return $result;   
   }  
  
	public function fetch_array($consulta){   
 	 	return mysql_fetch_array($consulta);  
  	}  
	public function num_rows($consulta){   
 	    return mysql_num_rows($consulta);  
  	}  

}

?>