<?php
	require_once("../conexion/ConectionToMySQL.php");

	class LoginManager
	{	
		private static $instance;
		private $conection;
		private $product;
	
		function __construct(){
			$this->_initializer();
		}
		
		private function _initializer(){
			$this->conection = ConectionToMySQL::getInstance("localhost","","root","colegio");	
		}
		
		public function getUser($user){
			$objArray=  array();
			$result=$this->conection->query("select user,pass from usuarios where user= '$user'");
			$i=0;
		 	while($line= $this->conection->fetch_Array($result)){
				$objArray[]= array('user'=>$line["user"],'pass'=>$line["pass"]);
		 	}
			return $objArray;
		}
		
		public function valide($user,$pass){
			
			if($user=="" || $pass=="") return false;
			
			$arrUser=$this->getUser($user);
			//print_r($arrUser);
			if($arrUser[0]['user']==$user && $arrUser[0]['pass']==$pass)
				return true;
			else
				return false;
		}
		
		/*public function getUser($user){
			$objArray=  array();
			$result=$this->conection->query("select * from noticias");
			$i=0;
		 	while($line= $this->conection->fetch_Array($result)){
				$objArray[]= array('id'=>$line["id"],'titulo'=>$line["titulo"],'cuerpo'=>$line["cuerpo"]
				,'fehca'=>$line["fecha"],'tipo'=>$line["tipo"]);
		 	}
			return $objArray;
		}*/
	}
	
	$a= new LoginManager();	
//	print_r($a->valide('admin' ,'3'));	
	if(isset($_POST))
	{	
		if(isset($_POST['action']))
		{
			switch ($_POST['action'])
			{
				case "login":	

					$bo= $a->valide($_POST['user'],$_POST['pass']);	
					echo json_encode($bo);
				break;	     
			}
		}
	}

?>