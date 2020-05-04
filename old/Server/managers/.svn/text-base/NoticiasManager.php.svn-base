<?php
	require_once("../conexion/ConectionToMySQL.php");
	
	class NoticiasManager
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
		
		public function getNoticias(){
			$objArray=  array();
			$result=$this->conection->query("select * from noticias ORDEr BY id DESC");
			$i=0;
		 	while($line= $this->conection->fetch_Array($result)){
				$objArray[]= array('id'=>$line["id"],'titulo'=>$line["titulo"],'cuerpo'=>$line["cuerpo"]
				,'fecha'=>$line["fecha"],'tipo'=>$line["tipo"]);
		 	}
			return $objArray;
		}
		
		/*public function getProductByName($name){
			return $this->conection->query("select * from Productos where Nombre='$name'")->fetchArray();
		}*/
		
		
		public function add($titulo,$cuerpo,$tipo,$fecha){
			$this->conection->query("INSERT INTO noticias(titulo, cuerpo, tipo, fecha) VALUES('$titulo','$cuerpo','$tipo','$fecha')");
		}
		
		public function delete($id){
			$this->conection->query("DELETE FROM noticias WHERE id= $id");
		}
	
		public function update($id,$titulo,$cuerpo,$tipo,$fecha){
			$this->conection->query("UPDATE 'noticias' SET titulo='$titulo',cuerpo='$cuerpo',tipo='$tipo,fecha=$fecha' WHERE id='$id' ");	
		}
	}
	
	$a= new NoticiasManager();	
//	$a->add("nada","pueba","tipo","2011-05-13");
//	$arr=$a->getNoticias();	echo json_encode($arr );
//	$a->delete(2);
	
	if(isset($_POST))
	{	

		if(isset($_POST['action']))
		{
			switch ($_POST['action'])
			{
				case "get":		
					$noticias=$a->getNoticias();
					echo json_encode($noticias);
				break;
				case "set":
					$a->add($_POST['titulo'],$_POST['cuerpo'],$_POST['tipo'],$_POST['fecha']);		
					echo "hecho";
					break;
				case "mod":
					$a->update(new  Product($_POST['name'],$_POST['price'],$_POST['description']));																				
					break;
			     
			}
		}
	}

?>