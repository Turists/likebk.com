<?
if( isset($s[1]) && $s[1] == '3/altar2' ) {
	/*
		������
		* ����� �������� ���� �� 4 eff
	*/
	//��� ���������� ��������� � ������� $vad !
	$vad = array(
		'go' => true
	);
	$vad['test1'] = mysql_fetch_array(mysql_query('SELECT COUNT(*) FROM `dungeon_actions` WHERE `dn` = "'.$u->info['dnow'].'" AND `vars` = "obj_act'.$obj['id'].'" LIMIT 1'));
	if( $vad['test1'][0] > 0 ) {
		$r = '������ �� ���������...';
		$vad['go'] = false;
	}
	
	if( $vad['go'] == true ) {
		
		mysql_query('INSERT INTO `dungeon_actions` (`dn`,`time`,`x`,`y`,`uid`,`vars`,`vals`) VALUES ("'.$u->info['dnow'].'","'.time().'","'.$obj['x'].'","'.$obj['y'].'","'.$u->info['id'].'","obj_act'.$obj['id'].'","'.$vad['bad'].'")');
		
		$sp = mysql_query('SELECT `id` FROM `eff_users` WHERE `uid` = "'.$u->info['id'].'" AND `data` LIKE "%|dun=3%"');
		while($pl = mysql_fetch_array($sp)) {
			mysql_query('DELETE FROM `eff_users` WHERE `id` = "'.$pl['id'].'"');
		}
		$r = '�� ����������...';
	}
	
	unset($vad);
}

?>