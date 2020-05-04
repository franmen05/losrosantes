<?php
	require_once('../social_network/facebook.php');
	
	class SocialNetworkManager
	{
		public static $FACEBOOK="fb";
		public static $TWITER="tw";
				
		public function sendTo($socialNetwork,$data){
		
			switch($socialNetwork){
				case self::$FACEBOOK:
					$this->_facebook($data);
					break;
				case self::$TWITER:
					_twiter($data);
					break;
			}
		}
		
		private function _facebook($data){
	
			$fb_apikey = '<Aqui va el API key>';
			$fb_secret = '<Aqui va el Secret>';

			$facebook = new Facebook($fb_apikey, $fb_secret);
			$user = $facebook->require_login();

			$app_callbackurl = 'http://www.tuservidor.com/marquee/';

			try
			{
			    if (!$facebook->api_client->users_isAppAdded())
		        $facebook->redirect($facebook->get_add_url());
			}
			catch (Exception $ex)
			{
			    $facebook->set_user(null, null);
			    $facebook->redirect($app_callbackurl);
			}
		}
		
		private function _twiter($data){
		
		}
	}
?>