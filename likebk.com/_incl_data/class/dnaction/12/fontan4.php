<?
if(isset($s[1]) && $s[1] == '12/fontan4') {
  $vad = array('go' => false,'go2'=>true);
  $vad['use_fontan'] = mysql_fetch_array(mysql_query('SELECT * FROM `dungeon_actions` WHERE `uid` = "'.$u->info['id'].'" AND `dn` = "'.$u->info['dnow'].'" AND `vars` = "use_fontan" AND `vals` = "4" LIMIT 1'));
  if(!isset($vad['use_fontan']['id'])) {
    $vad['all_uses'] = mysql_num_rows(mysql_query('SELECT * FROM `dungeon_actions` WHERE  `dn` = "'.$u->info['dnow'].'" AND `vars` = "use_fontan" AND `vals` = "4" LIMIT 5'));
    if($vad['all_uses'] >= 3) {
	  $r = '������ �� ��������, ���-�� ������� ����� ������.';
    } else {
	    $vad['bottle'] = mysql_fetch_array(mysql_query('SELECT * FROM `items_users` WHERE `item_id` = "2" AND `uid` = "'.$u->info['id'].'" AND `delete` = "0" AND `inOdet` = "0" AND `inShop` = "0" AND `inTransfer` = "0" ORDER BY `id` DESC LIMIT 1'));
        if(isset($vad['bottle']['id'])) {
		  if($vad['bottle']['inGroup'] == 0) {
		    $r = '������ ������� �� ������� ���������� � ������...';
		  } else {
		    $vad['gems']['query'] = mysql_query('SELECT `id`, `inGroup` FROM `items_users` WHERE `item_id` = "908" OR (`item_id` = "906" OR `item_id` = "907" OR `item_id` = "881" OR `item_id` = "878" OR `item_id` = "888") AND `uid` = "'.$u->info['id'].'" AND `delete` = "0" AND `inOdet` = "0" AND `inShop` = "0" AND `inTransfer` = "0" LIMIT 99'); 
		    $vad['gems']['query'] = mysql_result($vad['gems']['query'], (rand(0, (mysql_num_rows($vad['gems']['query'])-1))),0);
            if($vad['gems']['query'] != '') {
			  $vad['go'] = true;
		    } else {
			  $r = '� ��� ��� ����������� ������...';
		    }
		  }
	    } else {
		  $r = '� ��� ��� ������ �������.';
	    }
    }
  }elseif ($vad['go2'] == true) {
	  mysql_query('UPDATE `stats` SET `x` = "-3", `y` = "45", `res_x` = "-3", `res_y` = "45" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
	  header('location:main.php');
	  die();
  } else {
	if($u->info['sex'] == 1) { $a = '�'; } else { $a = ''; }
	$r = '��� �������, ��� ����� � ��� ���'.$a.'..';
  }
  if($vad['go'] == true) {
	mysql_query('INSERT INTO `dungeon_actions` (`uid`, `dn`, `x`, `y`, `time`, `vars`, `vals`) VALUES ( "'.$u->info['id'].'", "'.$u->info['dnow'].'", "'.$u->info['x'].'", "'.$u->info['y'].'", "'.time().'", "use_fontan", "4" )');
	$r = '������� ������ ������� � ������ �� ��������� �.';
	$vad['drug'] = array(0 => 2588, 1 => 2590, 2 => 2589, 3 => 2145);
	$u->deleteItem(intval($vad['gems']['query']), $u->info['id'], 1);
	$u->deleteItem(intval($vad['bottle']['id']), $u->info['id'], 1);
	$u->addItem(round($vad['drug'][rand(0,3)]), $u->info['id'], '|musor=2|nosale=1|noremont=1', 12, 3);
  }
  unset($vad);
}
?>