<?php
exit();

function getIP() {
   if(isset($_SERVER['HTTP_X_REAL_IP'])) return $_SERVER['HTTP_X_REAL_IP'];
   return $_SERVER['REMOTE_ADDR'];
}

/*if(getIP() != $_SERVER['SERVER_ADDR'] && getIP() != '127.0.0.1' && getIP() != '' && getIP() != '188.134.44.67') {
	die(getIP().'<br>'.$_SERVER['SERVER_ADDR']);
}*/

define('GAME',true);

include('_incl_data/__config.php');
include('_incl_data/class/__db_connect.php');
include('_incl_data/class/__user.php');

/*function e($t) {
	mysql_query('INSERT INTO `chat` (`text`,`city`,`to`,`type`,`new`,`time`) VALUES ("core #'.date('d.m.Y').' %'.date('H:i:s').' (����������� ������): <b>'.mysql_real_escape_string($t).'</b>","capitalcity","ENERGY STAR","6","1","-1")');
}

function send_chat($type,$from,$text,$time) {
	mysql_query('INSERT INTO `chat` (`text`,`city`,`login`,`to`,`type`,`new`,`time`,`room`) VALUES ("'.mysql_real_escape_string($text).'","capitalcity","'.mysql_real_escape_string($from).'","","'.$type.'","1","'.mysql_real_escape_string($time).'","3")');
}


// ������ ������� ��� �� ������� ������� �������


$i = 1;
$sp = mysql_query('SELECT `id`,`login`,`timereg`,`city`,`room` FROM `users` WHERE `activ` = "0" AND `ip` != "0" AND `pass` != "" ORDER BY `timereg` ASC');
while( $pl = mysql_fetch_array($sp) ) {
	if( date('d.m',$pl['timereg']) == date('d.m') && date('Y',$pl['timereg']) < date('Y') ) {
		$test = mysql_fetch_array(mysql_query('SELECT * FROM `aaa_birthday` WHERE `uid` = "'.$pl['id'].'" AND `date` = "'.date('d.m.Y').'" LIMIT 1'));
		if(!isset($test['id'])) {
			mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`) VALUES ('1','".$pl['city']."','".$pl['room']."','','".$pl['login']."','<font color=red>��������!</font> ���������� ���� ����������� ��� � ���� �������� � ���� ����! �� �������� ������� �� ������.','-1','10','0')");
			//
			$i3 = $u->addItem(4540,$pl['id'],'|nosale=1|notr=1|sudba='.$pl['login'],NULL,1);
			mysql_query('UPDATE `items_users` SET `gift` = "�����",`gtxt1` = "� ���� ��������! �����������! ����� � ���� � �����!" WHERE `id` = "'.$i3.'" LIMIT 1');
			//
			mysql_query('INSERT INTO `aaa_birthday` (`uid`,`date`) VALUES ("'.$pl['id'].'","'.date('d.m.Y').'")');
		}
	}
	$i++;
}
*/
$sp = mysql_query('SELECT * FROM `users` WHERE `real` = "1"');
while( $pl = mysql_fetch_array($sp) ) {
	//������
	$re = $u->addItem(6805,$pl['id'],'|sudba='.$pl['login'].'|nosale=1',NULL,0);
	if( $re > 0 ) {
		mysql_query('UPDATE `items_users` SET `gift` = "�������������" WHERE `id` = "'.$re.'" LIMIT 1');
	}
}

?>