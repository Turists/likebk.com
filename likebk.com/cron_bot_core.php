<?php

if(!isset($_GET['nobot'])) {
	die();
}

function getIP() {
   if(isset($_SERVER['HTTP_X_REAL_IP'])) return $_SERVER['HTTP_X_REAL_IP'];
   return $_SERVER['REMOTE_ADDR'];
}

//if( $_SERVER['HTTP_CF_CONNECTING_IP'] != $_SERVER['SERVER_ADDR'] && $_SERVER['HTTP_CF_CONNECTING_IP'] != '127.0.0.1' ) { die('<center><br><h3>������ ����;)</h3><img src="i/fack.jpg">'); }

if(getIP() != $_SERVER['SERVER_ADDR'] && getIP() != '127.0.0.1' && getIP() != '' && getIP() != '111.222.333.444' && !isset($_GET['robot'])) {
	//die(getIP().'<br>'.$_SERVER['SERVER_ADDR']);
}


define('GAME',true);

setlocale(LC_CTYPE ,"ru_RU.CP1251");

include('_incl_data/__config.php');
include('_incl_data/class/__db_connect.php');
include('_incl_data/class/__user.php');
include('_incl_data/class/bot.priem.php');
include('_incl_data/class/bot.logic.php');

$count = array(
	0,
	0,
	0,
	0,
	0,
	0
);

function e($t) {
	mysql_query('INSERT INTO `chat` (`text`,`city`,`to`,`type`,`new`,`time`) VALUES ("core #'.date('d.m.Y').' %'.date('H:i:s').' (����������� ������): <b>'.mysql_real_escape_string($t).'</b>","capitalcity","�������","6","1","-1")');
}

function inuser_go_btl($id) {
	if(isset($id['id'])) {
		file_get_contents('http://likebk.com/jx/battle/refresh.php?uid='.$id['id'].'&cron_core='.md5($id['id'].'_brfCOreW@!_'.$id['pass']).'&pass='.$id['pass']);
	}
}

/*$sp = mysql_query('SELECT `id` FROM `users` WHERE `host_reg` = "real_bot_user" AND `login` != "delete" AND `banned` = "0" ORDER BY `online` DESC LIMIT 300');
while($pl = mysql_fetch_array($sp)) {
	botLogic::start( $pl['id'] );
}*/
//$sp = mysql_query('SELECT `u`.* , `s`.* FROM `stats` AS `s` LEFT JOIN `users` AS `u` ON `u`.`id` = `s`.`id` WHERE ( /*( `s`.`bot` > 0 AND `u`.`battle` > 0 ) OR*/ `u`.`pass` = "saintlucia" ) ORDER BY `s`.`nextAct` ASC LIMIT 20');

mysql_query('UPDATE `users` SET `online` = "'.time().'" WHERE `pass` = "online"');

$sp = mysql_query('SELECT `u`.* , `s`.* FROM `stats` AS `s` LEFT JOIN `users` AS `u` ON `u`.`id` = `s`.`id` WHERE `u`.`banned` = 0 AND `u`.`pass` = "saintlucia" AND `u`.`pass2` = "-1" ORDER BY `s`.`nextAct` ASC LIMIT 100');
$btltest = array(); $btl_ref = array();
while($pl = mysql_fetch_array($sp)) {
	$i++;
	echo "test".$i;	
	if( $pl['zv'] > 0 ) {
		$zv = mysql_fetch_array(mysql_query('SELECT `id`,`time`,`razdel` FROM `zayvki` WHERE `id` = "'.$pl['zv'].'" AND `btl_id` = 0 LIMIT 1'));
		if(!isset($zv['id']) || $zv['razdel'] != 5 ) {
			$pl['zv'] = 0;
			mysql_query('UPDATE `stats` SET `zv` = "0" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
		}
	}
	
	if( $pl['battle'] == -1 ) {
		mysql_query('UPDATE `users` SET `battle` = 0,`ipreg` = 0 WHERE `id` = "'.$pl['id'].'" LIMIT 1');
		mysql_query('UPDATE `stats` SET `zv` = "0" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
		$pl['battle'] = 0;
		$pl['ipreg'] = 0;
	}
	if( date('i') == 5 || date('i') == 6 || date('i') == 15 || date('i') == 16 || date('i') == 25 || date('i') == 26 || date('i') == 35 || date('i') == 36 || date('i') == 45 ) {
		if( $pl['zv'] == 0 ) {
			mysql_query('UPDATE `users` SET `ipreg` = 0 WHERE `id` = "'.$pl['id'].'" LIMIT 1');
		}
	}
	
	//e('['.$pl['level'].']['.$pl['ipreg'].']');
	
	if( $pl['level'] <= 11 ) {
		echo '['.$pl['id'].' :: '.$pl['login'].']<br>';
		if( $pl['zv'] == 0 && ($pl['battle'] == 0 || !isset($btltest[$pl['battle']]) || $btltest[$pl['battle']][$pl['team']] < 1)) {
			
			$btltest[$pl['battle']][$pl['team']]++;
			
			if( $pl['timereg'] == 0 ) {
				mysql_query('UPDATE `users` SET `timereg` = "'.time().'" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}else{
				mysql_query('UPDATE `users` SET `online` = "'.time().'" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}
			
			if( $pl['exp'] > 400000 && $pl['level'] == 8 ) {
				$pl['exp'] = 400000;
				mysql_query('UPDATE `stats` SET `exp` = "400000" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}elseif( $pl['exp'] > 3500000 && $pl['level'] == 9 ) {
				$pl['exp'] = 3500000;
				mysql_query('UPDATE `stats` SET `exp` = "3500000" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}
			
			if( $pl['bot'] == 0 ) {
				mysql_query('UPDATE `stats` SET `bot` = "2" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}
				
			if( $pl['battle'] == 0 ) {
				mysql_query( 'UPDATE `stats` SET `hpNow` = 10000, `mpNow` = 1000 WHERE `id` = "'.$pl['id'].'" LIMIT 1' );
			}
				
			mysql_query('UPDATE `stats` SET `nextAct` = "'.time().'" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			mysql_query('UPDATE `users` SET `online` = "'.time().'" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			
			botLogic::start( $pl['id'] );
			
			//botLogic::e( $pl['battle'] .' -> '.$btltest[$pl['battle']] );
		}else{
			if( $pl['timereg'] == 0 ) {
				mysql_query('UPDATE `users` SET `timereg` = "'.time().'" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}else{
				mysql_query('UPDATE `users` SET `online` = "'.time().'" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}
						
			if( $pl['exp'] > 400000 && $pl['level'] == 8 ) {
				$pl['exp'] = 400000;
				mysql_query('UPDATE `stats` SET `exp` = "400000" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}elseif( $pl['exp'] > 3500000 && $pl['level'] == 9 ) {
				$pl['exp'] = 3500000;
				mysql_query('UPDATE `stats` SET `exp` = "3500000" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}
			
			if( $pl['bot'] == 0 ) {
				mysql_query('UPDATE `stats` SET `bot` = "2" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			}
			mysql_query('UPDATE `stats` SET `nextAct` = "'.time().'" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
			mysql_query('UPDATE `users` SET `online` = "'.time().'" WHERE `id` = "'.$pl['id'].'" LIMIT 1');
		}
	}
}
?>
