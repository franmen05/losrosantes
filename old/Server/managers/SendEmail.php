<?php	
    class SendEmail
	{	
		private $email;
		private $subject;
		private $type;
		private $message;
		
		public function  email($email,$subject,$type,$message){
			$this->email= $email;
			$this->suject= $subject;
			$this->type= $type;
			$this->message= $message;
		}
		public function  SendEmail($email,$subject,$type,$message){
			$this->email= $email;
			$this->suject= $subject;
			$this->type= $type;
			$this->message= $message;
			this->send();
		}
		
		public function send(){
			$to = "someone@h.com";
			$subject = "Test mail";
			$message = "Hello! This is a simple email message.";
			$from = "someonelse@example.com";
			$headers = "From:" . $from;
			mail($this->email,$this->subject,$this->message);
			echo "Mail Sent.";
			return true;			
		}
	}
?>