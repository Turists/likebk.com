<?php
if(!defined('GAME'))
{
	die();
}

if(isset($_POST['useitemon'])) {
	$_GET['login'] = $_POST['useitemon'];
}

class Magic {
	
	public $youuse = 0;
	public $c_magic = array(4174, 4175, 4176, 4177, 4178, 4179, 4180);
    public $e_magic = array(4185, 4186, 4187);
    public function Vesna($uid = 0){
		global $c;
		
		$noexp1 = mysql_fetch_array(mysql_query('SELECT `noletoexp` FROM `users` WHERE `id` = "'.mysql_real_escape_string($uid).'" LIMIT 1'));
		$noexp1 = $noexp1['noletoexp'] + 0;
		
    	if(round(date('m')) >= 3 && round(date('m')) < 6) {
    		$vesna = mysql_fetch_array(mysql_query('SELECT `id`, `data`, `timeUse` FROM `eff_users` WHERE `delete` = "0" AND `uid` = "0" AND `id_eff` = "1000"'));
			if($vesna)
			{
				$eftime = $vesna[2];
				if ($eftime > time()) {
					$efopit = $vesna[1];
				}
				else{
					$efid = $vesna[0];
					$efopit = 0;
					//mysql_query ('DELETE FROM `eff_users` WHERE `uid` = "'.$uid.'" AND `id_eff` = "555"');
					mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$efid.'" AND `id_eff` = "1000"');
				}
				if(round(date('w')) == 0 || round(date('w')) == 6 || $c['holiday'] == true) {
					$efopit = $efopit + 100;
				}
				return $efopit;
			}else{
				$ins = mysql_query('INSERT INTO `eff_users` (`id_eff`,`uid`,`name`,`data`,`timeUse`, `delete`) VALUES ("1000","0","�������� ����","100","1496275200", "0")');
				$id = mysql_insert_id();
				$efopit = 100;
				if(round(date('w')) == 0 || round(date('w')) == 6 || $c['holiday'] == true) {
					$efopit = $efopit + 100;
				}
				return $efopit;
			}
		}elseif(round(date('m')) >= 6 && round(date('m')) < 9) {
    		$leto = mysql_fetch_array(mysql_query('SELECT `id`, `data`, `timeUse` FROM `eff_users` WHERE `delete` = "0" AND `uid` = "0" AND `id_eff` = "1001"'));
			if($leto)
			{
				$eftime = $leto[2];
				if ($eftime > time()) {
					$efopit = 0;
					if( $noexp1 == 0 ) {
						$efopit = $leto[1];
					}
				}
				else{
					$efid = 0;
					if( $noexp1 == 0 ) {
						$efid = $leto[0];
					}
					$efopit = 0;
					//mysql_query ('DELETE FROM `eff_users` WHERE `uid` = "'.$uid.'" AND `id_eff` = "555"');
					mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$efid.'" AND `id_eff` = "1001"');
				}
				if(round(date('w')) == 0 || round(date('w')) == 6 || $c['holiday'] == true) {
					$efopit = $efopit + 100;
				}
				return $efopit;
			}else{
				/*
				$ins = mysql_query('INSERT INTO `eff_users` (`id_eff`,`uid`,`name`,`data`,`timeUse`, `delete`) VALUES ("1001","0","������ ����","100","1535760000", "0")');
				$id = mysql_insert_id();
				$efopit = 100;
				if(round(date('w')) == 0 || round(date('w')) == 6 || $c['holiday'] == true) {
					$efopit = $efopit + 100;
				}
				*/
				return $efopit;
			}
		}elseif(round(date('m')) >= 9 && round(date('m')) < 12) {
    		$leto = mysql_fetch_array(mysql_query('SELECT `id`, `data`, `timeUse` FROM `eff_users` WHERE `delete` = "0" AND `uid` = "0" AND `id_eff` = "1002"'));
			if($leto)
			{
				$eftime = $leto[2];
				if ($eftime > time()) {
					$efopit = $leto[1];
				}
				else{
					$efid = $leto[0];
					$efopit = 0;
					//mysql_query ('DELETE FROM `eff_users` WHERE `uid` = "'.$uid.'" AND `id_eff` = "555"');
					mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$efid.'" AND `id_eff` = "1002"');
				}
				if(round(date('w')) == 0 || round(date('w')) == 6 || $c['holiday'] == true) {
					$efopit = $efopit + 100;
				}
				return $efopit;
			}else{
				$ins = mysql_query('INSERT INTO `eff_users` (`id_eff`,`uid`,`name`,`data`,`timeUse`, `delete`) VALUES ("1002","0","������� ����","100","1480550400", "0")');
				$id = mysql_insert_id();
				$efopit = 100;
				if(round(date('w')) == 0 || round(date('w')) == 6 || $c['holiday'] == true) {
					$efopit = $efopit + 100;
				}
				return $efopit;
			}
		}elseif(round(date('m')) == 12 || round(date('m')) < 3) {
    		$leto = mysql_fetch_array(mysql_query('SELECT `id`, `data`, `timeUse` FROM `eff_users` WHERE `delete` = "0" AND `uid` = "0" AND `id_eff` = "1003"'));
			if($leto)
			{
				$eftime = $leto[2];
				if ($eftime > time()) {
					$efopit = $leto[1];
				}
				else{
					$efid = $leto[0];
					$efopit = 0;
					//mysql_query ('DELETE FROM `eff_users` WHERE `uid` = "'.$uid.'" AND `id_eff` = "555"');
					mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$efid.'" AND `id_eff` = "1003"');
				}
				if(round(date('w')) == 0 || round(date('w')) == 6 || $c['holiday'] == true) {
					$efopit = $efopit + 100;
				}
				return $efopit;
			}else{
				$ins = mysql_query('INSERT INTO `eff_users` (`id_eff`,`uid`,`name`,`data`,`timeUse`, `delete`) VALUES ("1003","0","������ ����","100","1488326400", "0")');
				$id = mysql_insert_id();
				$efopit = 100;
				if(round(date('w')) == 0 || round(date('w')) == 6 || $c['holiday'] == true) {
					$efopit = $efopit + 100;
				}
				return $efopit;
			}
		}else{
			$efopit = 0;
			return $efopit;
		}
	}

	//���������� ����� ���
	public function oslablenie($uid)
	{
		$ins = mysql_query('INSERT INTO `eff_users` (`id_eff`,`uid`,`name`,`data`,`timeUse`) VALUES ("5","'.$uid.'","���������� ����� ���","add_m10=-1000|add_m11=-1000","'.time().'")');
		if($ins)
		{
			return true;
		}else{
			return false;
		}
	}
	public function addekr($sum, $uid){
		$money = mysql_fetch_array(mysql_query('UPDATE `bank` SET `money2` = (`money2` + '.$sum.'), `battle_money` = (`battle_money` + '.$sum.') WHERE `uid` = "'.$uid.'"'));
		if($money){
			return true;
		}else{
			return false;
		}
	}
	public function addopit($uid)
	{	
		$myopit = mysql_fetch_array(mysql_query('SELECT `id`, `data`, `timeUse`, `delete` FROM `eff_users` WHERE `uid` = "'.$uid.'" AND `id_eff` = "555"'));
		if($myopit)
		{
			$timelimit = 7200;
			//$timelimit = 1000;
			$eftime = $myopit[3];
			if ($eftime > time()) {
				$efid = $myopit[0];
				$efopit = $myopit[1];
			}
			else{
				$efid = $myopit[0];
				$efopit = 0;
				//mysql_query ('DELETE FROM `eff_users` WHERE `uid` = "'.$uid.'" AND `id_eff` = "555"');
				mysql_query('UPDATE `eff_users` SET `data` = "0",`timeUse` = "'.time().'", `delete` = "'.(strtotime('+2 hours', time())).'" WHERE `id` = "'.$efid.'" AND `id_eff` = "555"');
			}
			$res = array('0'=>$efid, '1'=>$efopit);
			return $res;
		}else{
			$ins = mysql_query('INSERT INTO `eff_users` (`id_eff`,`uid`,`name`,`data`,`timeUse`, `delete`) VALUES ("555","'.$uid.'","������ �������������","0","'.time().'", "'.strtotime('+2 hours', time()).'")');
			$id = mysql_insert_id();
			$efid = $id;
			$efopit = 0;
			$res = array('0'=>$efid, '1'=>$efopit);
			return $res;
		}
	}
	public function updateopit($id, $i)
	{	
		$ins = mysql_query('UPDATE `eff_users` SET `data` = "'.$i.'",`timeUse` = "'.time().'", `delete` = "'.(strtotime('+2 hours', time())).'" WHERE `id` = "'.$id.'"');
		if($ins)
		{
			return true;
		}else{
			return false;
		}
	}
	//����������� (��������� ������ ����������� � �������� ��������� ����� �������)
	public $pgtype = array(
		//����������� �� ����
		1	=> 1, //����� ����������
		264	=> 1, //�������� ��������
		306 => 1, //������ ��������
		
		//����������� �� ��������
		8	=> 2,
		265	=> 2,
		308 => 2, //������ ����
		
		//����������� �� ��������
		7	=> 3,
		266	=> 3,
		307 => 3, //������ ������������
		
		//����������� �� ���������
		9	=> 4,
		267	=> 4,
		309 => 4, //������ ������
		333 => 4,
		
		//����������� �� ������ �� �����
		14	=> 5,
		27	=> 5,
		37	=> 5,
		361	=> 5,
		
		//����������� �� ������ �� �������� �����
		10 => 6,
		//����������� �� ������ �� �������� �����
		12 => 7,
		//����������� �� ������ �� ��������� �����
		13 => 8,
		//����������� �� ������ �� �������� �����
		11 => 9,
		
		//����������� �� ������ �� �����
		28	=> 10,
		38	=> 10,
		362	=> 10,
		
		//����������� �� ������ �� ����
		//?? => 11,
		//����������� �� ������ �� ����
		334 => 12,
		//����������� �� ������ �� �������
		//?? => 13,
		//����������� �� ������ �� �����
		//?? => 14,
		
		//�������������� ��������
		268 => 15,
		//�������������� ����
		300 => 16,
		
		10000000000000 => 0
	);
	
	//����������� (��������� ������)
	public $pgtype_second = array(		
		//����������� �� ������ �� �����
		14	=> array(6,7,8,9),
		27	=> array(6,7,8,9),
		37	=> array(6,7,8,9),
		361	=> array(6,7,8,9),
		
		//����������� �� ������ �� �������� �����
		10 => array(5,7,8,9),
		//����������� �� ������ �� �������� �����
		12 => array(6,5,8,9),
		//����������� �� ������ �� ��������� �����
		13 => array(6,7,5,9),
		//����������� �� ������ �� �������� �����
		11 => array(6,7,8,5),
		
		//����������� �� ������ �� �����
		//28	=> 10,
		//38	=> 10,
		
		//����������� �� ������ �� ����
		//?? => 11,
		//����������� �� ������ �� ����
		334 => 12,
		//����������� �� ������ �� �������
		//?? => 13,
		//����������� �� ������ �� �����
		//?? => 14,
		
		//�������������� ��������
		//268 => 15,
		//�������������� ����
		//300 => 16,
		
		10000000000000 => 0
	);
	
	//��������� �����������
	//�������� , ������������ ������� , ���������� ������ , ������� ������� ������ ������ ������� � ������ , ��� ����������� ���������
	public $pgpar = array(
		1 => array('����', 25, 29, 1.2, 's1', 301),
		2 => array('��������', 25, 29, 1.2, 's2', 302),
		3 => array('��������', 25, 29, 1.2, 's3', 303),
		4 => array('���������', 25, 29, 1.2, 's5', 304),
		
		5 => array('������ �� �����', 25, 175, 1.2, 'za', 321),		
		6 => array('������ �� �������� �����', 25, 98, 1.2, 'za1', 322),
		7 => array('������ �� �������� �����', 25, 98, 1.2, 'za2', 323),
		8 => array('������ �� ��������� �����', 25, 98, 1.2, 'za3', 324),
		9 => array('������ �� �������� �����', 25, 98, 1.2, 'za4', 325),
		
		10 => array('������ �� �����', 25, 175, 1.2, 'zm', 326),		
		11 => array('������ �� ����� ����', 25, 98, 1.2, 'zm1', 327),
		12 => array('������ �� ����� ����', 25, 98, 1.2, 'zm3', 328),
		13 => array('������ �� ����� �������', 25, 98, 1.2, 'zm2', 329),
		14 => array('������ �� ����� �����', 25, 98, 1.2, 'zm4', 330),
		
		15 => array('�������������� HP', 25, 294, 1.2, 'speedhp', 331),
		16 => array('�������������� MP', 25, 294, 1.2, 'speedmp', 332)
	);
	
	//�������� ����� ��� ������������
	public $pgel = array(
		//����
		1	=> array(5), //����� ����������
		264	=> array(7),  //�������� ��������
		306 => array(7),
		//��������
		8	=> array(5),
		265	=> array(7),
		308 => array(7),
		//��������
		7	=> array(5),
		266	=> array(7),
		307 => array(7),
		//���������
		9	=> array(5),
		267	=> array(7),
		309 => array(7),
		333 => array(5),
		//������ �� �����
		14	=> array(12),
		27	=> array(18),
		37	=> array(25),
		361 => array(45),
		//������ �� �������� �����
		10	=> array(12),
		//������ �� �������� �����
		11	=> array(12),
		//������ �� �������� �����
		12	=> array(12),
		//������ �� ��������� �����
		13	=> array(12),
		//������ �� �����
		28	=> array(18),
		38	=> array(25),
		362	=> array(45),
		
		//������ �� ����� ����
		334 => array(18), //�������� �������
		//�������������� ��
		268 => array(75),
		//�������������� ��
		300 => array(75)
	);
	
	public function paguba( $eff ) {
		//global $u;	
		/*if(isset($this->pgtype[$eff['id2']])) {
			global $u;
			$re = '';
			
			$tp = $this->pgtype[$eff['id2']];
			$tp_sec = $this->pgtype_second[$eff['id2']];
			$v = $this->pgpar[$tp];
			$el = $this->pgel[$eff['id2']];
			$pgb = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `v1` = "pgb'.$tp.'" AND `delete` = "0" AND `uid` = "'.$u->info['id'].'" ORDER BY `id` DESC LIMIT 1'));	
			if( is_array($tp_sec) ) {
				$i = 0;
				while( $i < count($tp_sec) ) {
					if( $tp_sec[$i] > 0 ) {
						$pgb_ref = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `v1` = "pgb'.$tp_sec[$i].'" AND `delete` = "0" AND `uid` = "'.$u->info['id'].'" ORDER BY `id` DESC LIMIT 1'));	
						if( isset($pgb_ref['id']) ) {
							$lvl = explode('[',$pgb['name']); 
							$lvl = explode(']',$lvl[1]);
							$lvl = $lvl[0];
							mysql_query('UPDATE `eff_users` SET `deactiveTime` = "'.(time()+$eff['actionTime']).'", `timeUse` = "'.(time()+floor($lvl*$this->pgpar[$tp_sec[$i]][3]*86400)).'" WHERE `id` = "'.$pgb_ref['id'].'" LIMIT 1');
						}
					}
					$i++;
				}
				unset($pgb_ref,$i);
			}
			if(!isset($pgb['id'])) {
				//����������� ���, �� ��� ����� ���������, ���� 10%
				if(rand(0,100) < 10) {
					//��������� �����������
					$d = 'add_'.$v[4].'=-'.ceil($v[2]/$v[1]*1);
					mysql_query('INSERT INTO `eff_users` (`v1`,`overType`,`id_eff`,`uid`,`name`,`timeUse`,`data`,`no_Ace`,`deactiveTime`) VALUES ("pgb'.$tp.'","0","'.$v[5].'","'.$u->info['id'].'","�������� ����������� [1]","'.(time()+floor($v[3]*86400)).'","'.$d.'","0","'.(time()+$eff['actionTime']).'")');
				}
			}else{
				$lvl = explode('[',$pgb['name']); 
				$lvl = explode(']',$lvl[1]);
				$lvl = $lvl[0]; 
				//����������� ���� � �������� �������� ��� ������� 5% , ���� ������ 75% ������� ��������
				if((rand(0,100)  < 5 || $u->info['admin'] > 0) && $lvl < $v[1]) {
					//��������� ����� �����������
					$lvl++;
					$d = 'add_'.$v[4].'=-'.ceil($v[2]/$v[1]*$lvl);
					mysql_query('DELETE FROM `eff_users` WHERE `id` = "'.$pgb['id'].'" LIMIT 1');
					mysql_query('INSERT INTO `eff_users` (`v1`,`overType`,`id_eff`,`uid`,`name`,`timeUse`,`data`,`no_Ace`,`deactiveTime`) VALUES ("pgb'.$tp.'","0","'.$v[5].'","'.$u->info['id'].'","�������� ����������� ['.$lvl.']","'.(time()+floor($lvl*$v[3]*86400)).'","'.$d.'","0","'.(time()+$eff['actionTime']).'")');
					$pgb = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `v1` = "pgb'.$tp.'" AND `delete` = "0" AND `uid` = "'.$u->info['id'].'" RODER BY `id` DESC LIMIT 1'));			
				}else{
					//��������� ����� �����������
					mysql_query('UPDATE `eff_users` SET `deactiveTime` = "'.(time()+$eff['actionTime']).'", `timeUse` = "'.(time()+floor($lvl*$v[3]*86400)).'" WHERE `id` = "'.$pgb['id'].'" LIMIT 1');
				}
				
				
				//�������������� ������ �����������
				$eff['mdata'] = $u->lookStats($eff['mdata']);
				$eff['mdata']['add_'.$v[4]] += floor($el[0]/$v[1]*$lvl);
				$eff['mdata'] = $u->impStats($eff['mdata']);
			}
		}*/
		return $eff;
	}





	public function inBattleLog($txt,$usr) {
		global $u;
		$lastHOD = mysql_fetch_array(mysql_query('SELECT * FROM `battle_logs` WHERE `battle` = "'.$u->info['battle'].'" ORDER BY `id_hod` DESC LIMIT 1'));
		if(isset($lastHOD['id'])) {
			$id_hod = $lastHOD['id_hod'];
			if($lastHOD['type']!=6) {
				$id_hod++;
			}
			mysql_query('INSERT INTO `battle_logs` (`time`,`battle`,`id_hod`,`text`,`vars`,`zona1`,`zonb1`,`zona2`,`zonb2`,`type`) VALUES ("'.time().'","'.$u->info['battle'].'","'.($id_hod).'","{tm1} '.$txt.'","login1='.$u->info['login'].'||t1='.$u->info['team'].'||login2='.$usr['login'].'||t2='.$usr['team'].'||time1='.time().'","","","","","6")');
		}
	}

	
	//������������� ����� ������� ��������\�����, ��������
	public function worse( $uid , $eff_id ) {
		global $u;
		
		$eff_id = round((int)$eff_id);
		
		$r = 0;
		
		$eff = mysql_fetch_array(mysql_query('SELECT `worse` FROM `eff_main` WHERE `id2` = "'.$eff_id.'" LIMIT 1'));
		$eff = explode(',',$eff['worse']);
		
		$i = 0;
		while( $i <= count($eff) ) {
			if( isset($eff[$i]) && $eff[$i] > 0 && $r == 0 ) {
				$test = mysql_fetch_array(mysql_query('SELECT `id` FROM `eff_users` WHERE `uid` = "'.$uid.'" AND `id_eff` = "'.$eff[$i].'" AND `delete` = 0 LIMIT 1'));
				if(isset($test['id'])) {
					$r = 1;
				}
			}
			$i++;
		}
		
		return $r;
	}
	
	
	//������������� ��������
	public function useItems($id,$uc = false)
	{
		global $u, $c, $code, $btl, $e_magic, $c_magic;
		
		if($uc != false){
			$u = $uc;
			unset($uc);
		}
		
		$itm = mysql_fetch_array(mysql_query('SELECT `im`.*,`iu`.* FROM `items_users` AS `iu` LEFT JOIN `items_main` AS `im` ON (`im`.`id` = `iu`.`item_id`) WHERE `iu`.`uid` = "'.$u->info['id'].'" AND `iu`.`inShop`="0" AND `iu`.`delete`="0" AND `iu`.`id` = "'.mysql_real_escape_string((int)$id).'" LIMIT 1'));
		$bs_is = mysql_fetch_array(mysql_query('SELECT * FROM FROM `bs_turnirs` WHERE `id` = "'.$u->info['inTurnir'].'" LIMIT 1'));
		
		if(isset($itm['id']))
		{
			
			
			
			if($itm['group'] == 1) {
				//������ ���������
				if($u->itemsX($itm['id'])>1) {
					//����������� ������� �� ������
					$itm = mysql_fetch_array(mysql_query('SELECT `im`.*, `iu`.* FROM `items_users` AS `iu` LEFT JOIN `items_main` AS `im` ON (`im`.`id` = `iu`.`item_id`) WHERE `iu`.`inOdet`="0" AND `iu`.`inShop`="0" AND `iu`.`delete`="0" AND `iu`.`id` = "'.$itm['id'].'" LIMIT 1'));
					//var_dump($itm);
					if(!isset($itm['id'])) {
						$this->error = '������ ��������� ��������...';
					}else{
						$itm['delete'] = 0;
					}
				}
			}
			
			$st = $u->lookStats($itm['data']);

			if($itm['magic_chance'] > 0 && $itm['magic_chance'] < 100) {
			  $itm['magic_chance'] += floor($u->stats['s5']*3);
			  if($itm['magic_chance'] >= 99) { $itm['magic_chance'] = 99; }
			}
            if(isset($bs_is['id'])) {
              if(in_array($itm['item_id'], $e_magic) || in_array($itm['item_id'], $c_magic)) {
                $itm['magic_chance'] += $bs_is['users'];
                if($itm['magic_chance'] >= 99) { $itm['magic_chance'] = 99; }
              }
            }
			
			if($itm['iznosNOW'] >= $itm['iznosMAX']) {
				$u->error = '�� �������� �������...';
			}elseif( $st['useOnlyInBattle'] == 1 && $u->info['battle'] == 0 ) {
				//����� ������������ ������ � ��������
				$u->error = '����� ������������ ������ � ��������';
			}elseif( $u->info['battle'] > 0 && $itm['btl_zd'] > 0 ) {
				//����� ������������ ������ � ��������
				$u->error = '�������� ������������� ��� '.$itm['btl_zd'].' �����';
				mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `btl_zd` = "0" WHERE `item_id` = "'.$itm['item_id'].'" AND `inOdet` > 0 AND `uid` = "'.$u->info['id'].'" AND `delete` = "0" LIMIT 20');
			}elseif( $st['useOnlyInBattle'] == 1 && $u->info['battle'] > 0 && $u->stats['hpNow'] < 1 ) {
				//����� ������������ ������ � ��������
				$u->error = '�� �������, ������ ������������ �������� � ������';
			} elseif($itm['magic_chance'] > 0 && rand(0, 100) > $itm['magic_chance']) {
				$u->error = '���� &quot;'.$itm['name'].'&quot; ������';
				$itm['iznosNOW']++;
				if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
				  mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = 0, `delete` = 0 WHERE `id` = "'.$itm['id'].'" LIMIT 1');
				}
				mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
				$u->addDelo(1, $u->info['id'],'&quot;<font color="maroon">System.inventory</font>&quot;:<B>(���� ������)</b> �������� ����������� &quot;'.$itm['name'].'&quot; ('.$us[1].') [itm:'.$itm['id'].'].',time(),$u->info['city'],'System.inventory',0,0);				
			
            } elseif(isset($st['usefromfile'])) {
				if($st['usefromfile']==1) {
					if(file_exists('_incl_data/class/magic/'.$itm['magic_inci'].'.php'))
					{
						require('_incl_data/class/magic/'.$itm['magic_inci'].'.php');
					}elseif(file_exists('../../_incl_data/class/magic/'.$itm['magic_inci'].'.php'))
					{
						require('../../_incl_data/class/magic/'.$itm['magic_inci'].'.php');
					}elseif(file_exists('../_incl_data/class/magic/'.$itm['magic_inci'].'.php'))
					{
						require('../_incl_data/class/magic/'.$itm['magic_inci'].'.php');
					}else{
						$u->error = '�� ������� ������������ ('.$itm['magic_inci'].')';
					}
				}else{
					if($itm['useInBattle'] > 0) {
						if(file_exists('../../_incl_data/class/priems/'.$st['usefromfile'].'.php'))
						{
							require('../../_incl_data/class/priems/'.$st['usefromfile'].'.php');
						}else{
							$u->error = '�� ������� ������������ ('.$st['usefromfile'].'.)';
						}
					}else{
						$u->error = '�� ������� ������������ ('.$st['usefromfile'].'!)';
					}
				}
			}elseif($itm['type']==30)
			{
				//��������
				$goodUse = 0; $use = array();
				if(isset($st['moment']))
				{
					//������� ������������ ����������� (�������������� �� ��� ��)
					if(isset($st['moment_hp'])) {
						//��������������� ��������
						if($u->stats['hpNow']<$u->stats['hpAll']) {
							$goodUse = 1;
							$use['moment_hp'] = $st['moment_hp'];
							
							if($u->stats['hpNow']+$use['moment_hp']>$u->stats['hpAll']) {
								$use['moment_hp'] = ceil($u->stats['hpAll']-$u->stats['hpNow']);							
							}
							
							$u->error .= '�� ������������ '.($use['moment_hp']).' HP.<br>';
						}else{
							$u->error = '���� �������� � ��� ��������� �������������';
							$goodUse = 0;
						}
					}	
					
					if(isset($st['moment_mp'])) {
						//��������������� ��������
						if($u->stats['mpNow'] < $u->stats['mpAll']) {
							$goodUse = 1;
							$use['moment_mp'] = $st['moment_mp'];
							if($u->stats['mpNow']+$use['moment_mp'] > $u->stats['mpAll']) {
							  $use['moment_mp'] = ceil($u->stats['mpAll']-$u->stats['mpNow']);							
							}
							$u->error .= '�� ������������ '.($use['moment_mp']).' MP.<br />';
						} else {
							$u->error = '���� ����� � ��� ��������� �������������';
							$goodUse = 0;
						}
					}	
					
					if($itm['iznosNOW']>=$itm['iznosMAX'])
					{
						$u->error = '������� ��� ��������...';
						$goodUse = 0;
					}
						
					if(($u->info['align']==2 || $u->info['haos']>time()) && isset($st['nohaos']))
					{
						$goodUse = 0;
						$u->error = '�������� �� ����� ������������ ������ �������';
					}
								
					//������� ������ � ��
					if($goodUse==1)
					{
						$itm['iznosNOW']++;
						$upd = mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
						if($upd) {
							$u->stats['hpNow'] += $use['moment_hp'];
							$u->info['hpNow'] += $use['moment_hp'];
                            $u->stats['mpNow'] += $use['moment_mp'];
							$u->info['mpNow'] += $use['moment_mp'];
							if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
								mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
							}
							mysql_query('UPDATE `stats` SET `hpNow` = "'.$u->info['hpNow'].'", `mpNow` = "'.$u->info['mpNow'].'" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
							$u->addDelo(1,$u->info['id'],'&quot;<font color="maroon">System.inventory</font>&quot;: �������� ����������� ������� &quot;'.$itm['name'].'&quot; (+'.$use['moment_hp'].' HP) [itm:'.$itm['id'].'].',time(),$u->info['city'],'System.inventory',0,0);
							$this->youuse++;
							 
							$u->error = '�� ������� ������������ ������� &quot;'.$itm['name'].'&quot;<br>'.$u->error.'';
							mysql_query('DELETE FROM `items_users` WHERE `id` = "'.$itm['id'].'" AND `iznosMAX` = "'.$itm['iznosNOW']++.'" LIMIT 100');
						}else{
							$u->error = '�� ������� ������������ �������...';
						}
					}
				}else{
					
					//�������� � ��������������� ��������
					$goodUse = 1;
					if(($u->info['align']==2 || $u->info['haos']>time()) && isset($st['nohaos']))
					{
						$goodUse = 0;
						$u->error = '�������� �� ����� ������������ ������ �������';
					}
					
					if( $this->worse( $u->info['id'] , $itm['magic_inci'] ) > 0 ) {						
						$goodUse = 0;
						$u->error = '� ��� ���� ����� ������� ����! ������ ������������ ������...';
					}
					
					// ��������� ������� �� ��������
					if($itm['overType'] == 1 && $goodUse == 1){
						$ef_us = mysql_query('SELECT * FROM `eff_users` WHERE `uid` = '.$itm['uid'].' AND `delete` = "0" AND `overType` = "1"');
						while($ef_del = mysql_fetch_array($ef_us)){
							mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$ef_del['uid'].'" AND `delete` = "0" AND `overType` = "1"');
						}
					}
					
					if($goodUse==1)
					{
						$upd1 = 1;
						$upd2 = 1;
						//��������� ������ ���������
						if(isset($st['onlyOne']))
						{
							//������� ������� �������
							$goodUse = 0;
							$upd1 = mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$u->info['id'].'" AND `delete` = "0" AND `id_eff` = "'.$itm['magic_inc'].'"');
							if($upd1)
							{
								$goodUse = 1;
							}
						}
						if(isset($st['oneType']))
						{
							//������� ������� �������
							$goodUse = 0;
							$upd2 = mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$u->info['id'].'" AND `delete` = "0" AND `overType` = "'.$itm['overType'].'"');
							if($upd1)
							{
								$goodUse = 1;
							}
						}
						if($goodUse == 1)
						{
							if($itm['magic_inc'] == '') {
								$itm['magic_inc'] = $itm['magic_inci'];
							}
							$us = $this->add_eff($u->info['id'],$itm['magic_inc']);
							if($us[0]==1)
							{
								$itm['iznosNOW']++;
								if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
								}
								mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
								$u->addDelo(1,$u->info['id'],'&quot;<font color="maroon">System.inventory</font>&quot;: �������� ����������� ������� &quot;'.$itm['name'].'&quot; ('.$us[1].') [itm:'.$itm['id'].'].',time(),$u->info['city'],'System.inventory',0,0);
								$this->youuse++;
								$u->error = '�� ������� ������������ ������� &quot;'.$itm['name'].'&quot;<br>'.$us[1].'';
								
								if($itm['item_id'] == 5109 || $itm['item_id'] == 5110) {
									mysql_query('UPDATE `achiev` SET `a17` = `a17` + 1 WHERE `uid` = '.$u->info['id'].' AND `a17lvl` < 3 LIMIT 1');
								}elseif($itm['item_id'] == 6046) {
									mysql_query('UPDATE `achiev` SET `a18` = `a18` + 1 WHERE `uid` = '.$u->info['id'].' AND `a17lvl` < 3 LIMIT 1');
								}
								
								if($itm['iznosMAX'] == ($itm['iznosNOW']+1)){
									//��������� ������ �������
									$u->addItem(2,$u->info['id'],'noodet=1|noremont=1');
								}
								mysql_query('DELETE FROM `items_users` WHERE `id` = "'.$itm['id'].'" AND `iznosMAX` = "'.$itm['iznosNOW']++.'" LIMIT 100');
							}else{
								$u->error = '�� ������� ������������ "'.$itm['name'].'"';
							}
						}else{
							$u->error = '�� ������� ������������ "'.$itm['name'].'"';
						}
					}
				}
				//---------------
			}elseif($itm['type']==29)
			{
				//���������� ��������
				$st = $u->lookStats($itm['data']);
				$jl = $_GET['login'];
				$_GET['login'] = urlencode($_GET['login']);
				//���������� �� ��������� (��� ����� ����)	
				$_GET['login'] = str_replace('%',' ',$_GET['login']);
				$_GET['login'] = str_replace('25','',$_GET['login']);
				$jl = str_replace('%',' ',$jl);
				$jl = str_replace('25','',$jl);
				
				if($itm['magic_inci']=='nextuplvl') {
					if($itm['iznosNOW']>=$itm['iznosMAX']) {
						$u->error = '������ ��� ��������...';
					}elseif( $u->info['battle'] > 0 ) {
						//
						$u->error = '�� �� ������ ������������ ������ � ���';
					}else{
						if( $u->info['twink'] > 0 ) {
							$u->error = '����������� ������ �� �������� ���������';
						}else{
							mysql_query('UPDATE `users` SET `stopexp` = 0 WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
							mysql_query('UPDATE `users_twink` SET `stopexp` = 0 WHERE `uid` = "'.$u->info['id'].'" LIMIT 1');
							$itm['iznosNOW']++;
							if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
								mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
							}
							mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
						}
					}
				}elseif(isset($st['useOnLogin']) && $st['useOnLogin']==1)
				{
					$jl = str_replace('+', ' ', $jl);
					if( $u->info['inTurnir'] == 0 ) {
						if( $u->info['battle'] > 0 ) {
							$usr = mysql_fetch_array(mysql_query('SELECT `u`.`molch1`,`st`.`atack`, `st`.`clone`, `u`.`bot_id`, `u`.`type_pers`,`u`.`inTurnir`,`st`.`zv`,`st`.`bot`,`st`.`hpNow`,`u`.`login`,`st`.`dnow`,`u`.`id`,`u`.`align`,`u`.`admin`,`u`.`clan`,`u`.`level`,`u`.`room`,`u`.`online`,`u`.`battle`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON (`u`.`id` = `st`.`id`) WHERE `u`.`city` = "'.$u->info['city'].'" AND `u`.`battle` = "'.$u->info['battle'].'" AND (`u`.`login`="'.mysql_real_escape_string($_GET['login']).'" OR `u`.`login`="'.mysql_real_escape_string($jl).'") LIMIT 1'));
							if( $u->info['admin'] > 0 ) {
							//	echo '[SELECT `st`.`atack`, `st`.`clone`, `u`.`bot_id`, `u`.`type_pers`,`u`.`inTurnir`,`st`.`zv`,`st`.`bot`,`st`.`hpNow`,`u`.`login`,`st`.`dnow`,`u`.`id`,`u`.`align`,`u`.`admin`,`u`.`clan`,`u`.`level`,`u`.`room`,`u`.`online`,`u`.`battle`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON (`u`.`id` = `st`.`id`) WHERE `u`.`city` = "'.$u->info['city'].'" AND `u`.`battle` = "'.$u->info['battle'].'" AND (`u`.`login`="'.mysql_real_escape_string($_GET['login']).'" OR `u`.`login`="'.mysql_real_escape_string($jl).'") LIMIT 1]';
							}
						}else{
							$usr = mysql_fetch_array(mysql_query('SELECT `u`.`molch1`,`st`.`atack`, `st`.`clone`, `u`.`bot_id`, `u`.`type_pers`,`u`.`inTurnir`,`st`.`zv`,`st`.`bot`,`st`.`hpNow`,`u`.`login`,`st`.`dnow`,`u`.`id`,`u`.`align`,`u`.`admin`,`u`.`clan`,`u`.`level`,`u`.`room`,`u`.`online`,`u`.`battle`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON (`u`.`id` = `st`.`id`) WHERE `u`.`city` = "'.$u->info['city'].'" AND (`u`.`login`="'.mysql_real_escape_string($_GET['login']).'" OR `u`.`login`="'.mysql_real_escape_string($jl).'") LIMIT 1'));
						}
					}else{
						if( $u->info['battle'] > 0 ) {
							$usr = mysql_fetch_array(mysql_query('SELECT `u`.`molch1`,`st`.`atack`,`st`.`clone`,`u`.`bot_id`,`u`.`type_pers`,`u`.`inTurnir`,`st`.`zv`,`st`.`bot`,`st`.`hpNow`,`u`.`login`,`st`.`dnow`,`u`.`id`,`u`.`align`,`u`.`admin`,`u`.`clan`,`u`.`level`,`u`.`room`,`u`.`online`,`u`.`battle`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON (`u`.`id` = `st`.`id`) WHERE `u`.`city` = "'.$u->info['city'].'" AND `u`.`battle` = "'.$u->info['battle'].'" AND (`u`.`login`="'.mysql_real_escape_string($_GET['login']).'" OR `u`.`login`="'.mysql_real_escape_string($jl).'") AND `u`.`inTurnir` > 0 LIMIT 1'));
						}else{
							$usr = mysql_fetch_array(mysql_query('SELECT `u`.`molch1`,`st`.`atack`,`st`.`clone`,`u`.`bot_id`,`u`.`type_pers`,`u`.`inTurnir`,`st`.`zv`,`st`.`bot`,`st`.`hpNow`,`u`.`login`,`st`.`dnow`,`u`.`id`,`u`.`align`,`u`.`admin`,`u`.`clan`,`u`.`level`,`u`.`room`,`u`.`online`,`u`.`battle`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON (`u`.`id` = `st`.`id`) WHERE `u`.`city` = "'.$u->info['city'].'" AND (`u`.`login`="'.mysql_real_escape_string($_GET['login']).'" OR `u`.`login`="'.mysql_real_escape_string($jl).'") AND `u`.`inTurnir` > 0 LIMIT 1'));
						}
					}
					if($usr['room'] != $u->info['room'] && $usr['real'] > 0) {
						$u->error = '�� ������ ���������� � ����� �������!';
					}elseif(isset($usr['id']))
					{
						//�������� ���������
						if( $u->info['battle'] > 0 && $u->stats['hpNow'] < 1 ) {
							$u->error = '������ ������������, �� ��������!';
						}elseif( $this->worse( $usr['id'] , $itm['magic_inci'] ) > 0 ) {						
							$u->error = '� ��� ���� ����� ������� ����! ������ ������������ ������...';
						}elseif($itm['iznosNOW']>=$itm['iznosMAX'])
						{
							$u->error = '������ ��� ��������...';
						}elseif($itm['magic_inci']=='snowball')
						{
							if( $u->info['battle'] == 0 ) {
								//echo 3;
								$usr = mysql_fetch_array(mysql_query('SELECT `u`.`pass`,`st`.`clone`,`u`.`type_pers`,`u`.`bot_id`,`st`.`zv`,`u`.`inTurnir`,`st`.`bot`,`st`.`hpNow`,`u`.`login`,`st`.`dnow`,`u`.`id`,`u`.`align`,`u`.`admin`,`u`.`clan`,`u`.`level`,`u`.`room`,`u`.`online`,`u`.`battle`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON (`u`.`id` = `st`.`id`) WHERE (`u`.`battle` = 0 OR `u`.`battle` = "'.$u->info['battle'].'") AND (`u`.`login`="'.mysql_real_escape_string($_GET['login']).'" OR `u`.`login`="'.mysql_real_escape_string($jl).'") LIMIT 1'));
							}else{
								$usr = mysql_fetch_array(mysql_query('SELECT `u`.`pass`,`st`.`clone`,`u`.`type_pers`,`u`.`bot_id`,`st`.`zv`,`u`.`inTurnir`,`st`.`bot`,`st`.`hpNow`,`u`.`login`,`st`.`dnow`,`u`.`id`,`u`.`align`,`u`.`admin`,`u`.`clan`,`u`.`level`,`u`.`room`,`u`.`online`,`u`.`battle`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON (`u`.`id` = `st`.`id`) WHERE (`u`.`login`="'.mysql_real_escape_string($_GET['login']).'" OR `u`.`login`="'.mysql_real_escape_string($jl).'") AND `u`.`battle` = "'.$u->info['battle'].'" LIMIT 1'));
							}
							if($usr['battle']>0 && $u->info['battle']!=$usr['battle'])
							{
								$u->error = '�������� ��������� � ���';
							}elseif($usr['battle']>0) {
								//�������� � ��������
								if($usr['team'] != $u->info['team'] && $usr['hpNow'] > 0) {
									$txt = 1;
									
									//���������
									if($usr['bot_id'] == 291 ) {
										if($usr['hpNow'] < 961) {
											$txt = 1982;
										}elseif($usr['hpNow'] > 980 && $usr['hpNow'] < 1981) {
											$txt = 1982;
										}
									}elseif($usr['bot_id'] == 48 ) {
										$txt = 1000;
									}elseif($usr['id'] == 1008 ) {
										$txt = $u->info['level']*250;
									}
									
									$usr['hpNow'] -= $txt;
									if($txt<0) {
										$txt = '+'.$txt;
									}elseif($txt==0) {
										$txt = '--';
									}else{
										$txt = '-'.$txt;
									}
									if($usr['hpNow']<0)
									{
										$usr['hpNow'] = 0;
									}
									$btl->stats[$btl->uids[$usr['id']]]['hpNow'] = $usr['hpNow'];
											$lastHOD = mysql_fetch_array(mysql_query('SELECT * FROM `battle_logs` WHERE `battle` = "'.$u->info['battle'].'" ORDER BY `id_hod` DESC LIMIT 1'));
											if(isset($lastHOD['id']))
											{
												$btl->stats[$btl->uids[$usr['id']]]['hpNow'] = floor($btl->stats[$btl->uids[$usr['id']]]['hpNow']);
												if($btl->stats[$btl->uids[$usr['id']]]['hpNow'] > $btl->stats[$btl->uids[$usr['id']]]['hpAll']) {
													$btl->stats[$btl->uids[$usr['id']]]['hpNow'] = $btl->stats[$btl->uids[$usr['id']]]['hpAll'];
												}
												if($btl->stats[$btl->uids[$usr['id']]]['hpNow'] < 1) {
													$btl->stats[$btl->uids[$usr['id']]]['hpNow'] = 0;
												}
												$id_hod = $lastHOD['id_hod'];
												if($lastHOD['type']!=6)
												{
													$id_hod++;
												}
												mysql_query('UPDATE `stats` SET `hpNow` = "'.$btl->stats[$btl->uids[$usr['id']]]['hpNow'].'" WHERE `id` = "'.$usr['id'].'" LIMIT 1');
												$itm['iznosNOW']++;
												if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
													mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
												}
												mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
												$txt = '<font color=#006699>'.$txt.'</font>';
												if($u->info['sex']==1) {
														$txt = '��������� {u1} ������� ����� ����� � {u2}. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['hpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['hpAll'].']';
												}else{
														$txt = '��������� {u1} ������ ����� ����� � {u2}. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['hpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['hpAll'].']';
												}
												mysql_query('INSERT INTO `battle_logs` (`time`,`battle`,`id_hod`,`text`,`vars`,`zona1`,`zonb1`,`zona2`,`zonb2`,`type`) VALUES ("'.time().'","'.$u->info['battle'].'","'.($id_hod).'","{tm1} '.$txt.'","login1='.$u->info['login'].'||t1='.$u->info['team'].'||login2='.$usr['login'].'||t2='.$usr['team'].'||time1='.time().'","","","","","6")');
											}
									
									unset($txt);
								}else{
									$u->error = '������ ������������ �� ������� ��������� (3)';
								}
							}elseif($u->info['dnow']!=$usr['dnow'])
							{
								$u->error = '�������� ��������� � ������ �������';
							}elseif($usr['id']==$u->info['id'])
							{
								$u->error = '������ �������� � ������ ����';
							}elseif($usr['online']<time()-520 && $usr['battle'] == 0 && $usr['bot'] == 0)
							{
								$u->error = '�������� ��������� � �������� ���� ;)';
							}elseif($usr['room']!=$u->info['room'])
							{
								$u->error = '�������� ��������� � ������ �������';
							}elseif($usr['admin']>0 && $u->info['admin']==0)
							{
								$u->error = '������ �������� � �������';
							}else{
								$usr['hpNow'] -= 10;
								if($usr['hpNow']<0)
								{
									$usr['hpNow'] = 0;
								}
								$upd = mysql_query('UPDATE `stats` SET `hpNow` = "'.$usr['hpNow'].'" WHERE `id` = "'.$usr['id'].'" LIMIT 1');
								if($upd)
								{
									$sx = '��'; $sx2 = '';
									if($u->info['sex']==1)
									{
										$sx = '��'; $sx2 = '�';
									}
									$itm['iznosNOW']++;
									if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									}
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
									$urs_st = $u->getStats($usr['id']);
									$rtxt = '[img[items/snowball1.gif]] �������'.$sx.' &quot;'.$u->info['login'].'&quot; ������'.$sx2.' ����� ����� � &quot;'.$usr['login'].'&quot;. <font color=red><b>-10</b></font> ['.floor($urs_st['hpNow']).'/'.$urs_st['hpAll'].']';
									mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	
									unset($sx,$sx2);
								}else{
									$u->error = '�� ������� ������ ������...';
								}								
							}
						}elseif($itm['magic_inci']=='snowball2')
						{
							if( $u->info['battle'] == 0 ) {
								//echo 3;
								$usr = mysql_fetch_array(mysql_query('SELECT `u`.`pass`,`st`.`clone`,`u`.`type_pers`,`u`.`bot_id`,`st`.`zv`,`u`.`inTurnir`,`st`.`bot`,`st`.`hpNow`,`u`.`login`,`st`.`dnow`,`u`.`id`,`u`.`align`,`u`.`admin`,`u`.`clan`,`u`.`level`,`u`.`room`,`u`.`online`,`u`.`battle`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON (`u`.`id` = `st`.`id`) WHERE (`u`.`battle` = 0 OR `u`.`battle` = "'.$u->info['battle'].'") AND (`u`.`login`="'.mysql_real_escape_string($_GET['login']).'" OR `u`.`login`="'.mysql_real_escape_string($jl).'") LIMIT 1'));
							}else{
								$usr = mysql_fetch_array(mysql_query('SELECT `u`.`pass`,`st`.`clone`,`u`.`type_pers`,`u`.`bot_id`,`st`.`zv`,`u`.`inTurnir`,`st`.`bot`,`st`.`hpNow`,`u`.`login`,`st`.`dnow`,`u`.`id`,`u`.`align`,`u`.`admin`,`u`.`clan`,`u`.`level`,`u`.`room`,`u`.`online`,`u`.`battle`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON (`u`.`id` = `st`.`id`) WHERE (`u`.`login`="'.mysql_real_escape_string($_GET['login']).'" OR `u`.`login`="'.mysql_real_escape_string($jl).'") AND `u`.`battle` = "'.$u->info['battle'].'" LIMIT 1'));
							}
							if($usr['battle']>0 && $u->info['battle']!=$usr['battle'])
							{
								$u->error = '�������� ��������� � ���';
							}elseif($u->info['dnow']!=$usr['dnow'])
							{
								$u->error = '�������� ��������� � ������ �������';
							}elseif($usr['id']==$u->info['id'])
							{
								$u->error = '������ �������� � ������ ����';
							}elseif($usr['online']<time()-520 && $usr['battle'] == 0 && $usr['bot'] == 0)
							{
								$u->error = '�������� ��������� � �������� ���� ;)';
							}elseif($usr['room']!=$u->info['room'])
							{
								$u->error = '�������� ��������� � ������ �������';
							}elseif($usr['admin']>0 && $u->info['admin']==0)
							{
								$u->error = '������ �������� � �������';
							}else{
								$usr['hpNow'] -= 10;
								if($usr['hpNow']<0)
								{
									$usr['hpNow'] = 0;
								}
								$upd = mysql_query('UPDATE `stats` SET `hpNow` = "'.$usr['hpNow'].'" WHERE `id` = "'.$usr['id'].'" LIMIT 1');
								if($upd)
								{
									$sx = '��'; $sx2 = '';
									if($u->info['sex']==1)
									{
										$sx = '��'; $sx2 = '�';
									}
									$itm['iznosNOW']++;
									if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									}
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
									$urs_st = $u->getStats($usr['id']);
									$rtxt = '[img[items/snowball1.gif]] �������'.$sx.' &quot;'.$u->info['login'].'&quot; ������'.$sx2.' ����� ����� � &quot;'.$usr['login'].'&quot;. <font color=red><b>-10</b></font> ['.floor($urs_st['hpNow']).'/'.$urs_st['hpAll'].']';
									mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	
									unset($sx,$sx2);
								}else{
									$u->error = '�� ������� ������ ������...';
								}								
							}
						}elseif($itm['magic_inci']=='atack')
						{	
											//�������� ���������
							$usta = $u->getStats($usr['id'],0); // ����� ����
							$rgd = $u->regen($usr['id'],$usta,1);
							$usta['hpNow'] = $rgd['hpNow'];
							$usta['mpNow'] = $rgd['mpNow'];
			                $minHp = floor($usta['hpAll']/100*33); // ����������� ����� �������� ���� ��� ������� ����� �������
							$batlatest = mysql_fetch_array(mysql_query('SELECT `id`,`time_start` FROM `battle` WHERE `id` = "'.$usr['battle'].'" AND `team_win` = -1 LIMIT 1'));
							/*/echo '<script>alert("��� - '.$minHp.' now = '.$usta['hpNow'].'");</script>';*/
							$itmart = mysql_fetch_array(mysql_query('SELECT `id` FROM `items_users` WHERE `uid` = "'.$u->info['id'].'" AND `delete` = 0 AND `inOdet` > 0 AND `data` LIKE "%art=%" LIMIT 1'));
							
							
							
							if(isset($batlatest['id'])) {
								
								if( ($u->info['room'] == 9 || $u->info['room'] == 323 || $u->info['room'] == 11 || $u->info['room'] == 213) && (
									(date('w',$batlatest['time_start']) == 2 && date('H',$batlatest['time_start']) >= 20 && date('H',$batlatest['time_start']) < 23) ||
									(date('w',$batlatest['time_start']) == 3 && date('H',$batlatest['time_start']) >= 18 && date('H',$batlatest['time_start']) <= 23) ||
									(date('w',$batlatest['time_start']) == 4 && date('H',$batlatest['time_start']) >= 20 && date('H',$batlatest['time_start']) < 23) ||
									(date('w',$batlatest['time_start']) == 5 && date('H',$batlatest['time_start']) >= 20 && date('H',$batlatest['time_start']) <= 23) ||
									(date('w',$batlatest['time_start']) == 6 && date('H',$batlatest['time_start']) >= 18 && date('H',$batlatest['time_start']) <= 23) ) ) {
										unset($itmart);
									}
							}
							//unset($itmart);
							if( $u->testClanBattle($u->info['id'],$usr['id']) == true ) {
								$u->error = '������ ����������� � �������� �����!';
							}elseif( $u->info['level'] - 2 > $usr['level'] ) {
								$u->error = '�������� ������� ���� ��� ���, ��������� ������ ���������';
							}elseif( $batlatest['id'] > 0 && ($u->info['room'] == 9 || $u->info['room'] == 323 || $u->info['room'] == 11 || $u->info['room'] == 213) && (
								(date('w',$batlatest['time_start']) == 2 && date('H',$batlatest['time_start']) >= 20 && date('H',$batlatest['time_start']) < 23) ||
								(date('w',$batlatest['time_start']) == 3 && date('H',$batlatest['time_start']) >= 18 && date('H',$batlatest['time_start']) <= 23) ||
								(date('w',$batlatest['time_start']) == 4 && date('H',$batlatest['time_start']) >= 20 && date('H',$batlatest['time_start']) < 23) ||
								(date('w',$batlatest['time_start']) == 5 && date('H',$batlatest['time_start']) >= 20 && date('H',$batlatest['time_start']) <= 23) ||
								(date('w',$batlatest['time_start']) == 6 && date('H',$batlatest['time_start']) >= 18 && date('H',$batlatest['time_start']) <= 23)
							) && isset($itmart['id']) && true == false ) {
								$u->error = '������ �������� � ���������� �� ����� �������������� ����!!!';
							}elseif( ($u->info['room'] == 9 || $u->info['room'] == 323 || $u->info['room'] == 11 || $u->info['room'] == 213) && (
								(date('w') == 2 && date('H') >= 20 && date('H') < 23) ||
								(date('w') == 3 && date('H') >= 18 && date('H') <= 23) ||
								(date('w') == 4 && date('H') >= 20 && date('H') < 23) ||
								(date('w') == 5 && date('H') >= 20 && date('H') <= 23) ||
								(date('w') == 6 && date('H') >= 18 && date('H') <= 23)
							) && isset($itmart['id']) && !isset($batlatest['id']) && true == false ) {
								$u->error = '������ �������� � ���������� �� ����� �������������� ����!';
							}elseif( $usr['pass'] == 'saintlucia' ) {
								$u->error = '������ �������, ��������� ������ ������!';
							}elseif($u->info['twink'] == 0 && $itm['item_id'] == 9983) {
								$u->error = '������ ����� ����� ������������ ������ �������';
							}elseif( time() - $usr['timereg'] < 86400*5 || $usr['level'] < 2 )
							{
								$u->error = '�������� �� �������� �����������! ������ ������ ����������� � ��������� ���� � �������...';
							}elseif($usr['atack']==1 || $usr['atack'] > time())
							{
								$u->error = '�� ��������� ����� ���������, ��������� ����� ��...';
							}elseif($u->info['dnow']!=$usr['dnow'])
							{
								$u->error = '�������� ��������� � ������ ������� (������)';
							}elseif($usr['inTurnirnew'] > 0)
							{
								$u->error = '�������� ��������� ������� � �������';
							}elseif($u->info['battle']>0)
							{
								$u->error = '�� ��� ���������� � ���';
							}elseif($usr['id']==$u->info['id'])
							{
								$u->error = '������ �������� �� ������ ����';
							}elseif($usr['online']<time()-120)
							{
								$u->error = '�������� �� � ����';
							}elseif($usr['room']!=$u->info['room'] && $u->info['battle'] != $usr['battle'] && $u->info['battle'] > 0)
							{
								$u->error = '�������� ��������� � ������ �������!';
							}elseif($usr['room']!=$u->info['room'])
							{
								$u->error = '�������� ��������� � ������ �������';
							}elseif($minHp > $usta['hpNow'] && !isset($batlatest['id']) && $usr['battle'] == 0)
							{
							//���� ��
								$u->error = '�������� ������� ���� ('.floor($usta['hpNow']).'HP)';
							}elseif($u->info['noatack']!=0)
							{
								$u->error = '� ���� ������� ��������� ���������.';
							}elseif($usr['zv'] != 0)
							{
								$u->error = '�������� ���������� � ������.';
							}elseif($usr['admin'] == 1 && $u->info['admin'] == 0)
							{
								$u->error = '�� ������� ��������� ���������� ��������.';
							}else{
								
								if( $itm['item_id'] >= 6843 && $itm['item_id'] <= 6921 ){
									$kroww=199;
								}elseif($usr['type_pers'] > 0) {
									$kroww=$usr['type_pers'];
								}elseif($itm['item_id']=='2391'){
									$kroww=99;
								}else{
									$kroww=0;
								}
								
								$kulak = 0;
								if( $itm['item_id'] == 4404 ) {
									
									if($u->info['room'] == 363 && $usr['room'] == 363) {
										$usr_user = mysql_fetch_array(mysql_query('SELECT `id`,`clan`,`level`,`align` FROM `users` WHERE `id` = '.$usr['id'].' AND `room` = 363 LIMIT 1'));
										$real_user = mysql_fetch_array(mysql_query('SELECT `id`,`clan`,`level`,`align`,`login` FROM `users` WHERE `inUser` = '.$usr_user['id'].' LIMIT 1'));
										$bs = mysql_fetch_array(mysql_query('SELECT `money`,`bsid` FROM `bs_turnirs` WHERE `id` = '.$u->info['inTurnir'].' LIMIT 1'));
										if(!isset($real_user['id'])) {
											$real_user = $usr_user;
										}
										if($u->info['align'] > 0) {
											$u_alg = '<img src=http://img.likebk.com/i/align/align'.$u->info['align'].'.gif>';
										}
										if($u->info['clan'] > 0) {
											$u_cln = '<img src=http://img.likebk.com/i/clan/'.$u->info['clan'].'.gif>';
										}
										if($real_user['align'] > 0) {
											$alg = '<img src=http://img.likebk.com/i/align/align'.$real_user['align'].'.gif>';
										}
										if($real_user['clan'] > 0) {
											$cln = '<img src=http://img.likebk.com/i/clan/'.$real_user['clan'].'.gif>';
										}
										$text_bs = ''.$u_alg.''.$u_cln.'<b>'.$u->info['login'].'</b>['.$u->info['level'].']<a href=http://likebk.com/inf.php?'.$u->info['id'].' target=_blank><img src=http://img.likebk.com/i/inf_capitalcity.gif></a>, �������� ����� ��������� ��������� �� '.$alg.''.$cln.'<b>'.$real_user['login'].'</b>['.$real_user['level'].']<a href=http://likebk.com/inf.php?'.$real_user['id'].' target=_blank><img src=http://img.likebk.com/i/inf_capitalcity.gif></a>';
										mysql_query('INSERT INTO `bs_logs` (`type`,`text`,`time`,`id_bs`,`city`,`u`,`m`) VALUES ("1","'.$text_bs.'","'.time().'","'.$bs['bsid'].'","capitalcity","1","'.$bs['money'].'")');
									}
									$kulak = 1;
								}
								
			                    if($u->info['inTurnir'] > 0) { $bsi = $u->info['inTurnir']; } else { $bsi = 0; }
								$atc = $this->atackUser($u->info['id'],$usr['id'],$usr['team'],$usr['battle'], 0, $kroww, $kulak, $bsi,$itm['item_id']);
								if($atc > 0)
								{
									
									if($kulak > 0) {
										mysql_query('UPDATE `battle` SET `kulak` = '.$kulak.' WHERE `id` = '.$atc.' LIMIT 1');
									}
									
									if( $kroww == 199 ) {
										mysql_query('DELETE FROM `eff_users` WHERE `uid` = "'.$usr['id'].'" AND `id_eff` = "263"');
									}
									if($itm['item_id'] == 9983) {
										mysql_query('UPDATE `battle` SET `twink` = 1 WHERE `id` = '.$atc.' LIMIT 1');
									}
									//���������� �������� � ���
									$sx = '';
									if($u->info['sex']==1)
									{
										$sx = '�';
									}
									$itm['iznosNOW']++;
									if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									}
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
									$rtxt = '[img[items/pal_button8.gif]] &quot;'.$u->info['login'].'&quot; �����������'.$sx.' ����� ��������� �� ��������� &quot;'.$usr['login'].'&quot;.';
									mysql_query("INSERT INTO `chat` (`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES ('".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','11','0','1')");	
									//������, ��������� �����
									die('<script>top.frames[\'main\'].location = "main.php";</script>');
								}else{
									if( $u->error == '' ) {
										$u->error = '�� ������� ������� �� ���������...';
									}
								}
							}
							
						}elseif($itm['magic_inci']=='sleep') {
							//��������
							$po = $u->lookStats($itm['data']);
							if($usr['molch1'] > time()) {
								$u->error = '�� ��������� ��� ���� ��������!';
							}else{
								
								mysql_query('UPDATE `users` SET `molch1` = "'.(time()+$po['sleep_time']).'" WHERE `id` = "'.$usr['id'].'" LIMIT 1');
								
								$itm['iznosNOW']++;
								mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
								
								if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
								}
								
								$rtxt = '[img[items/'.$itm['img'].']] �������� &quot;'.$u->info['login'].'&quot; ����������� &quot;'.$itm['name'].'&quot; �� &quot;'.$usr['login'].'&quot; ������ '.$u->timeOut($po['sleep_time']).'!';
					            mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");

								$u->error = '�� ������� ������������ &quot;'.$itm['name'].'&quot; �� ��������� &quot;'.$usr['login'].'&quot; ������ '.$u->timeOut($po['sleep_time']).'!';
							}
						}elseif($itm['magic_inci']=='cureHP') {
							//����� ��,MP
								$po = $u->lookStats($itm['data']);
								if($u->info['battle'] > 0) {
									//���������� ������ � ��������
									$tstbtl = mysql_fetch_array(mysql_query('SELECT * FROM `battle_heal` WHERE `uid` = "'.$u->info['id'].'" AND `btl` = "'.$u->info['battle'].'" LIMIT 1'));
									//$tstbtl2 = mysql_fetch_array(mysql_query('SELECT * FROM `battle_heal` WHERE `uid` = "'.$usr['id'].'" AND `btl` = "'.$u->info['battle'].'" LIMIT 1'));
									
									if(isset($tstbtl2['id']) && true == false) {
										$u->error = '�������� ��� ���������������� �� ���� ���!';
									}elseif(isset($tstbtl['id'])) {
										$u->error = '�� ��� ������������ ����, �������� ��� ���� ������!';
									}elseif( $usr['battle']!=$u->info['battle'] ) {
										$u->error = '��������� ������������, �������� � ������ ��������...';
									}elseif( $usr['team']!=$u->info['team'] && $u->info['admin'] == 0 ) {
										$u->error = '��������� ������������ �� ����������...';
									}elseif( $usr['hpNow'] < 1 ) {
										$u->error = '��������� ������������ �� �������...';
									}elseif( $u->info['hpNow'] < 1 ) {
										$u->error = '��������� ������������, �� �������...';
									}elseif( $po['magic_hpNow'] < 1 && $po['magic_mpNow'] < 1 ) {
										$u->error = '��������� ������������, � ���������� ������ ��� �����...';
									}elseif($u->info['admin'] > 0 || (($usr['battle']==$u->info['battle'] && ($u->info['team']==$usr['team'] && ($po['magic_hpNow']>0 || $po['magic_mpNow']>0))) && $usr['hpNow']>=1 && $u->info['hpNow']>=1)) {
										//�������
										if(isset($po['magic_hpNow'])) {
											
											$po['magic_hpNowOLD'] = $po['magic_hpNow'];
											
											$po['magic_hpNow'] = round($po['magic_hpNow']/100*(100+$btl->stats[$btl->uids[$usr['id']]]['min_heal_proc']));
											
											if( $po['magic_hpNowOLD'] < $po['magic_hpNow'] ) {
												$po['magic_hpNow'] = $po['magic_hpNowOLD'];
											}
											
											$txt = $po['magic_hpNow'];
											
											if($btl->stats[$btl->uids[$usr['id']]]['hpAll']-$btl->stats[$btl->uids[$usr['id']]]['hpNow'] < $txt) {
												$txt = floor($btl->stats[$btl->uids[$usr['id']]]['hpAll']-$btl->stats[$btl->uids[$usr['id']]]['hpNow']);
											}
                                            //653 - 400
                                            //253
											//453 1306
											$gdhh = round($txt/$btl->stats[$btl->uids[$usr['id']]]['hpAll']*5,2);
											$gdhd = round($gdhh/$btl->users[$btl->uids[$usr['id']]]['tactic7']*100);
											if($gdhd > 100) {
											  $txt = floor($txt/100*$gdhd);
											}
											$txt23 = $txt;
											
											if($btl->users[$btl->uids[$usr['id']]]['tactic7'] >= 1) {
												if($txt > 0) {
													$btl->stats[$btl->uids[$usr['id']]]['hpNow'] += $txt;
													$btl->users[$btl->uids[$usr['id']]]['tactic7'] -= $gdhh;
													if($btl->users[$btl->uids[$usr['id']]]['tactic7'] < 0) {
														$btl->users[$btl->uids[$usr['id']]]['tactic7'] = 0;
													}
												}
												$btl->stats[$btl->uids[$usr['id']]]['hpNow'] = floor($btl->stats[$btl->uids[$usr['id']]]['hpNow']);
												
												if($btl->stats[$btl->uids[$usr['id']]]['hpNow'] > $btl->stats[$btl->uids[$usr['id']]]['hpAll']) {
													$btl->stats[$btl->uids[$usr['id']]]['hpNow'] = $btl->stats[$btl->uids[$usr['id']]]['hpAll'];
												}
												if($btl->stats[$btl->uids[$usr['id']]]['hpNow'] < 1) {
													$btl->stats[$btl->uids[$usr['id']]]['hpNow'] = 0;
												}
												mysql_query('INSERT INTO `battle_heal` (`uid`,`btl`,`type`,`time`) VALUES ("'.$u->info['id'].'","'.$btl->info['id'].'","1","'.time().'")');
												mysql_query('UPDATE `stats` SET `last_hp` = "'.$txt.'", `hpNow` = "'.$btl->stats[$btl->uids[$usr['id']]]['hpNow'].'", `tactic7` = "'.$btl->users[$btl->uids[$usr['id']]]['tactic7'].'" WHERE `id` = "'.$usr['id'].'" LIMIT 1');
												if($txt > 0) {
													$txt = '+'.$txt;
												} elseif($txt == 0){
													$txt = '--';
												}
											} else {
												$txt = '--';
											}
											
											if( $btl->info['razdel'] != 1 && $u->info['dnow'] == 0 ) {
												$brnexp = mysql_fetch_array(mysql_query('SELECT * FROM `battle_rune_exp` WHERE `uid` = "'.$u->info['id'].'" LIMIT 1'));
												if(!isset($brnexp['id'])) { //���� ������� �� 30 , � �� �� 1
													mysql_query('INSERT INTO `battle_rune_exp` (`uid`,`x`) VALUES ("'.$u->info['id'].'","'.mysql_real_escape_string($txt23/1).'")');
												}else{
													mysql_query('UPDATE `battle_rune_exp` SET `x` = ( `x` + "'.mysql_real_escape_string($txt23/1).'" ) WHERE `uid` = "'.$u->info['id'].'" LIMIT 1');
												}
											}
											
											
											$lastHOD = mysql_fetch_array(mysql_query('SELECT * FROM `battle_logs` WHERE `battle` = "'.$u->info['battle'].'" ORDER BY `id_hod` DESC LIMIT 1'));
											if(isset($lastHOD['id']))
											{
												$id_hod = $lastHOD['id_hod'];
												if($lastHOD['type'] != 6)
												{
													$id_hod++;
												}
												$txt = '<font color=#006699>'.$txt.'</font>';
												if($u->info['id']==$usr['id']) {
													if($u->info['sex']==1) {
														$txt = '{u1} ������������ &quot;<b>'.$itm['name'].'</b>&quot; �� ����. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['hpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['hpAll'].']';
													}else{
														$txt = '{u1} ����������� &quot;<b>'.$itm['name'].'</b>&quot; �� ����. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['hpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['hpAll'].']';
													}
												}else{
													if($u->info['sex']==1) {
														$txt = '{u1} ������������ &quot;<b>'.$itm['name'].'</b>&quot; �� {u2}. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['hpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['hpAll'].']';
													}else{
														$txt = '{u1} ����������� &quot;<b>'.$itm['name'].'</b>&quot; �� {u2}. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['hpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['hpAll'].']';
													}
												}
												mysql_query('INSERT INTO `battle_logs` (`time`,`battle`,`id_hod`,`text`,`vars`,`zona1`,`zonb1`,`zona2`,`zonb2`,`type`) VALUES ("'.time().'","'.$u->info['battle'].'","'.($id_hod).'","{tm1} '.$txt.'","login1='.$u->info['login'].'||t1='.$u->info['team'].'||login2='.$usr['login'].'||t2='.$usr['team'].'||time1='.time().'","","","","","6")');
											}									
										}
										$itm['iznosNOW']++;
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
										
										// ��������� � ��� ���
										$sx = '��'; $sx2 = '';
										if($u->info['sex']==1)
										{
											$sx = '��'; $sx2 = '�';
										}
										$u->error = '������ &quot;'.$itm['name'].'&quot; ��� ������� �����������.';										
									}else{
										$u->error = '������ ������������ �� ������� ��������� (1)';
									}
								}elseif($u->info['dnow']!=$usr['dnow'])
								{
									$u->error = '�������� ��������� � ������ ������� [������]';
								}elseif($usr['online']<time()-120 && $usr['bot'] == 0)
								{
									$u->error = '�������� ��������� � �������� ����';
								}elseif($usr['room']!=$u->info['room'])
								{
									$u->error = '�������� ��������� � ������ �������';
								}elseif($usr['battle']!=$u->info['battle'])
								{
									$u->error = '�������� ��������� � ��������';
								}elseif($usr['id']!=$u->info['id'])
								{
									$u->error = '��������� �������� ������ �� ����...';
								}else{
									//�������
									if(isset($po['magic_hpNow'])) {
										mysql_query('UPDATE `stats` SET `hpNow` = `hpNow` + '.$po['magic_hpNow'].' WHERE `id` = "'.$usr['id'].'" LIMIT 1');
									}									
									
									$itm['iznosNOW']++;
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
									
									if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									}
									
									// ��������� � ���
									$sx = '��'; $sx2 = '';
									if($u->info['sex']==1)
									{
										$sx = '��'; $sx2 = '�';
									}
									$u->error = '������ &quot;'.$itm['name'].'&quot; ��� ������� �����������.';
									$rtxt = '[img[items/'.$itm['img'].']] �������� &quot;'.$u->info['login'].'&quot; �����������'.$sx2.' &quot;'.$itm['name'].'&quot; �� &quot;'.$usr['login'].'&quot;.';
					                mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");
								}
						}elseif($itm['magic_inci']=='cureMP') {
							//����� ��,MP
								$po = $u->lookStats($itm['data']);
								$tstbtl = mysql_fetch_array(mysql_query('SELECT * FROM `battle_heal` WHERE `uid` = "'.$u->info['id'].'" AND `btl` = "'.$u->info['battle'].'" LIMIT 1'));
								//$tstbtl2 = mysql_fetch_array(mysql_query('SELECT * FROM `battle_heal` WHERE `uid` = "'.$usr['id'].'" AND `btl` = "'.$u->info['battle'].'" LIMIT 1'));
								
								if(isset($tstbtl2['id']) && true == false) {
									$u->error = '�������� ��� ���������������� �� ���� ���!';
								}elseif(isset($tstbtl['id'])) {
									$u->error = '�� ��� ������������ ����, �������� ��� ���� ������!';
								}elseif($u->info['battle'] > 0) {
									//���������� ������ � ��������
									if(($usr['battle']==$u->info['battle'] && ($u->info['team']==$usr['team'] && ($po['magic_hpNow']>0 || $po['magic_mpNow']>0))) && $usr['hpNow']>1 && $u->info['hpNow']>=1) {
										//�������
										if(isset($po['magic_mpNow'])) {
											$txt = $po['magic_mpNow'];
											
											if($btl->stats[$btl->uids[$usr['id']]]['mpAll']-$btl->stats[$btl->uids[$usr['id']]]['mpNow'] < $txt) {
												$txt = floor($btl->stats[$btl->uids[$usr['id']]]['mpAll']-$btl->stats[$btl->uids[$usr['id']]]['mpNow']);
											}
											
											$gdhh = round($txt/$btl->stats[$btl->uids[$usr['id']]]['mpAll']*5);
											$gdhd = round($gdhh/$btl->users[$btl->uids[$usr['id']]]['tactic7']*100);
											if( $gdhd > 100 ) {
												$txt = floor($txt/100*$gdhd);
											}
											$txt = round($txt/100*(100+$btl->stats[$btl->uids[$usr['id']]]['min_heal_proc']));
											$txt23 = $txt;
											
											if( $btl->info['razdel'] != 1 && $u->info['dnow'] == 0 ) {
												$brnexp = mysql_fetch_array(mysql_query('SELECT * FROM `battle_rune_exp` WHERE `uid` = "'.$u->info['id'].'" LIMIT 1'));
												if(!isset($brnexp['id'])) {
													mysql_query('INSERT INTO `battle_rune_exp` (`uid`,`x`) VALUES ("'.$u->info['id'].'","'.mysql_real_escape_string($txt23/50).'")');
												}else{
													mysql_query('UPDATE `battle_rune_exp` SET `x` = ( `x` + "'.mysql_real_escape_string($txt23/50).'" ) WHERE `uid` = "'.$u->info['id'].'" LIMIT 1');
												}
											}
											
											if($btl->users[$btl->uids[$usr['id']]]['tactic7'] >= 1) {
												if($txt > 0) {
													$btl->stats[$btl->uids[$usr['id']]]['mpNow'] += $txt;
													$btl->users[$btl->uids[$usr['id']]]['tactic7'] -= $gdhh;
													
													$btl->stats[$btl->uids[$usr['id']]]['mpNow'] = floor($btl->stats[$btl->uids[$usr['id']]]['mpNow']);
													if($btl->stats[$btl->uids[$usr['id']]]['mpNow'] > $btl->stats[$btl->uids[$usr['id']]]['mpAll']) {
														$btl->stats[$btl->uids[$usr['id']]]['mpNow'] = $btl->stats[$btl->uids[$usr['id']]]['mpAll'];
													}
													if($btl->stats[$btl->uids[$usr['id']]]['mpNow']<1) {
														$btl->stats[$btl->uids[$usr['id']]]['mpNow'] = 0;
													}
													
													if($btl->users[$btl->uids[$usr['id']]]['tactic7'] < 0) {
														$btl->users[$btl->uids[$usr['id']]]['tactic7'] = 0;
													}
												}
												mysql_query('INSERT INTO `battle_heal` (`uid`,`btl`,`type`,`time`) VALUES ("'.$u->info['id'].'","'.$btl->info['id'].'","2","'.time().'")');
												mysql_query('UPDATE `stats` SET `mpNow` = '.$btl->stats[$btl->uids[$usr['id']]]['mpNow'].', `tactic7` = "'.$btl->users[$btl->uids[$usr['id']]]['tactic7'].'" WHERE `id` = "'.$usr['id'].'" LIMIT 1');
												if($txt>0) {
													$txt = '+'.$txt;
												}elseif($txt==0){
													$txt = '--';
												}
											} else {
												$txt = '--';
											}
											$lastHOD = mysql_fetch_array(mysql_query('SELECT * FROM `battle_logs` WHERE `battle` = "'.$u->info['battle'].'" ORDER BY `id_hod` DESC LIMIT 1'));
											if(isset($lastHOD['id']))
											{
												$id_hod = $lastHOD['id_hod'];
												if($lastHOD['type']!=6)
												{
													$id_hod++;
												}
												$txt = '<font color=#006699>'.$txt.'</font>';
												if($u->info['id']==$usr['id']) {
													if($u->info['sex']==1) {
														$txt = '{u1} ������������ &quot;<b>'.$itm['name'].'</b>&quot; �� ����. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['mpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['mpAll'].'] (����)';
													}else{
														$txt = '{u1} ����������� &quot;<b>'.$itm['name'].'</b>&quot; �� ����. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['mpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['mpAll'].'] (����)';
													}
												}else{
													if($u->info['sex']==1) {
														$txt = '{u1} ������������ &quot;<b>'.$itm['name'].'</b>&quot; �� {u2}. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['mpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['mpAll'].'] (����)';
													}else{
														$txt = '{u1} ����������� &quot;<b>'.$itm['name'].'</b>&quot; �� {u2}. <b>'.$txt.'</b> ['.$btl->stats[$btl->uids[$usr['id']]]['mpNow'].'/'.$btl->stats[$btl->uids[$usr['id']]]['mpAll'].'] (����)';
													}
												}
												mysql_query('INSERT INTO `battle_logs` (`time`,`battle`,`id_hod`,`text`,`vars`,`zona1`,`zonb1`,`zona2`,`zonb2`,`type`) VALUES ("'.time().'","'.$u->info['battle'].'","'.($id_hod).'","{tm1} '.$txt.'","login1='.$u->info['login'].'||t1='.$u->info['team'].'||login2='.$usr['login'].'||t2='.$usr['team'].'||time1='.time().'","","","","","6")');
											}									
										}
										$itm['iznosNOW']++;
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
										
										// ��������� � ��� ���
										$sx = '��'; $sx2 = '';
										if($u->info['sex']==1)
										{
											$sx = '��'; $sx2 = '�';
										}
										$u->error = '������ &quot;'.$itm['name'].'&quot; ��� ������� �����������.';										
									}else{
										$u->error = '������ ������������ �� ������� ��������� (2)';
									}
								}elseif($u->info['dnow']!=$usr['dnow'])
								{
									$u->error = '�������� ��������� � ������ ������� [������]';
								}elseif($usr['online']<time()-120 && $usr['bot'] == 0)
								{
									$u->error = '�������� ��������� � �������� ����';
								}elseif($usr['room']!=$u->info['room'])
								{
									$u->error = '�������� ��������� � ������ �������';
								}elseif($usr['battle']!=$u->info['battle'])
								{
									$u->error = '�������� ��������� � ��������';
								}elseif($usr['id']!=$u->info['id'])
								{
									$u->error = '��������� �������� ������ �� ����...';
								}else{
									//�������
									if(isset($po['magic_mpNow'])) {
										mysql_query('UPDATE `stats` SET `mpNow` = `mpNow` + '.$po['magic_mpNow'].' WHERE `id` = "'.$usr['id'].'" LIMIT 1');
									}									
									
									$itm['iznosNOW']++;
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
									
									if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									}
									
									// ��������� � ���
									$sx = '��'; $sx2 = '';
									if($u->info['sex']==1)
									{
										$sx = '��'; $sx2 = '�';
									}
									$u->error = '������ &quot;'.$itm['name'].'&quot; ��� ������� �����������.';
									$rtxt = '[img[items/'.$itm['img'].']] �������� &quot;'.$u->info['login'].'&quot; �����������'.$sx2.' &quot;'.$itm['name'].'&quot; �� &quot;'.$usr['login'].'&quot;.';
					                mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");
								}
						}elseif($itm['magic_inci']=='lech_1' or $itm['magic_inci']=='lech_2' or $itm['magic_inci']=='lech_3'){    
								if($u->info['battle'] > 0) {
									//���������� ������ � ��������
									
								}elseif($u->info['dnow']!=$usr['dnow'])
								{
									$u->error = '�������� ��������� � ������ ������� [������]';
								}elseif($usr['online']<time()-120 && $usr['bot'] == 0)
								{
									$u->error = '�������� ��������� � �������� ����';
								}elseif($usr['room']!=$u->info['room'])
								{
									$u->error = '�������� ��������� � ������ �������';
								}elseif($usr['battle']!=$u->info['battle'])
								{
									$u->error = '�������� ��������� � ��������';
								}elseif( $usr['level'] >= 12 && $itm['item_id'] != 9989 && $itm['item_id'] != 9990 && $itm['item_id'] != 9991) {
									$u->error = '��������� ����� �������� ������ ����������� �������� ��� 12-21 �������!';
								}else{
							
									$travm = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid`="'.$usr['id'].'" and `id_eff`="4" and `delete`="0" ORDER BY `v1` DESC LIMIT 1'));
									//$type_lechenie = $travm['v1'];
									$itm['magic_inci'] = 'lech_'.$travm['v1'];
									if($itm['magic_inci']=='lech_1'){
										$type_lechenie=1; // ��� ������ ������ �����
										$text_msg='&quot;������ ������&quot;';
										$text_msg2 = '������';
									}elseif($itm['magic_inci']=='lech_2'){
										$type_lechenie=2; // ��� ������ ������ �����
										$text_msg='&quot;������� ������&quot;';
										$text_msg2 = '�������';
									}elseif($itm['magic_inci']=='lech_3'){
										$type_lechenie=3; // ��� ������ ������ �����
										$text_msg='&quot;������� ������&quot;';
										$text_msg2 = '�������';
									}elseif($travm['id']){
										$lech_aa = array( 0 , 0 , 0 , 0 );
										$travm_cep = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid`="'.$usr['id'].'" and `id_eff`="335" and `delete`="0" and `v1`="'.$type_lechenie.'" LIMIT 1'));
										if( $travm_cep['timeUse'] < time() - 360 ) {
											unset($travm_cep);
										}
										
										$cep_users = explode(',',$travm_cep['data']);
										$it_i = 0;
										$it_no = 0;
										$it_users = '';
										while( $it_i < count($cep_users) ) {
											$it_u = $cep_users[$it_i];
											if( $it_u == $u->info['id'] ) {
												$it_no = 1;
											}
											$it_u = mysql_fetch_array(mysql_query('SELECT `id`,`login`,`level`,`align`,`clan`,`room` FROM `users` WHERE `id` = "'.$it_u.'" LIMIT 1'));
											if( isset($it_u['id']) ) {
												$it_users .= ', '.$it_u['login'].'';
											}
											$it_i++;
										}
										$it_u = ltrim($it_u,', ');
										
										$lech_co = round($travm_cep['x']+1);
										if( $it_no == 1 ) {
											$u->error = '�� ��� ���� �� �������';
										}elseif( $lech_co >= $lech_aa[$type_lechenie] ) {
									        mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm['id'].'" LIMIT 1');
									        $itm['iznosNOW']++;
									        mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
											if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
												mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
											}
											
											//$rtxt = '[img[items/cure_g1.gif]] &quot;'.$u->info['login'].'&quot; ����� ���� ��������� �� ������ &quot;'.$usr['login'].'&quot;.';
					                        //mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	

											//mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm_cep['id'].'" LIMIT 1');
									        mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$usr['id'].'" AND `id_eff` = 4 AND `delete` = 0 LIMIT 1');
									        
											// ��������� � ���
											$u->error = '�������� ������� �� '.$text_msg.'.';
														$rtxt = '[img[items/cure'.$type_lechenie.'.gif]] &quot;'.$u->info['login'].$it_users.'&quot; ������� �� '.$text_msg.' ������ &quot;'.$usr['login'].'&quot;.';
					                                    mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	
										}else{
											if( isset($travm_cep['id']) ) {
												$travm_cep['x']++;
												$u->error = '�� �������������� � ���� ��������� ��� &quot;'.$text_msg.'&quot; (��������� '.$text_msg2.' �����)';
												mysql_query('UPDATE `eff_users` SET `x` = "'.$travm_cep['x'].'"
												,`data` = "'.$travm_cep['data'].','.$u->info['id'].'"
												WHERE `id` = "'.$travm_cep['id'].'" LIMIT 1');
											}else{
												$u->error = '�� ������� ���� ��������� ��� &quot;'.$text_msg.'&quot; (��������� '.$text_msg2.' �����), � ��������� ������� ���� 5 �����, ����� ��������� ����������';
												mysql_query('INSERT INTO `eff_users`
												(
													`id_eff`,`uid`,`name`,`data`,`overType`,`timeUse`,`user_use`,`v1`,`x`
												) VALUES (
													"335","'.$usr['id'].'","���� ���������","'.$u->info['id'].'","28","'.time().'","'.$u->info['id'].'","'.$type_lechenie.'","1"
												)');
											}
											//mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm['id'].'" LIMIT 1');
									        $itm['iznosNOW']++;
									        mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
											if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
												mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
											}
											// ��������� � ���
											$rtxt = '[img[items/cure_g1.gif]] &quot;'.$u->info['login'].'&quot; ����� ���� ��������� �� ������ &quot;'.$usr['login'].'&quot;.';
					                        mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	

										}
									}else{
										$u->error = '�������� �� ����� ������ ������.';
									}
								
								}
						}elseif($itm['magic_inci']=='lech_free_1' or $itm['magic_inci']=='lech_free_2' or $itm['magic_inci']=='lech_free_3'){		            
								if($u->info['battle'] > 0) {
									//���������� ������ � ��������
									
								}elseif($u->info['dnow']!=$usr['dnow'])
								{
									$u->error = '�������� ��������� � ������ ������� [������]';
								}elseif($usr['online']<time()-120 && $usr['bot'] == 0)
								{
									$u->error = '�������� ��������� � �������� ����';
								}elseif($usr['room']!=$u->info['room'])
								{
									$u->error = '�������� ��������� � ������ �������';
								}elseif($usr['battle']!=$u->info['battle'])
								{
									$u->error = '�������� ��������� � ��������';
								}elseif( $usr['level'] >= 12 && $itm['item_id'] != 9989 && $itm['item_id'] != 9990 && $itm['item_id'] != 9991) {
									$u->error = '��������� ����� �������� ������ ����������� �������� ��� 12-21 �������!';
								}else{
							
									$travm = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid`="'.$usr['id'].'" and `id_eff`="4" and `delete`="0" and `data` NOT LIKE "%|nelich=%" ORDER BY `v1` DESC LIMIT 1'));
									//$type_lechenie = $travm['v1'];
									//$itm['magic_inci'] = 'lech_free_'.$travm['v1'];
									if($itm['magic_inci']=='lech_free_1'){
										$type_lechenie=1; // ��� ������ ������ �����
										$text_msg='&quot;������ ������&quot;';
										$text_msg2 = '������';
									}elseif($itm['magic_inci']=='lech_free_2'){
										$type_lechenie=2; // ��� ������ ������ �����
										$text_msg='&quot;������� ������&quot;';
										$text_msg2 = '�������';
									}elseif($itm['magic_inci']=='lech_free_3'){
										$type_lechenie=3; // ��� ������ ������ �����
										$text_msg='&quot;������� ������&quot;';
										$text_msg2 = '�������';
									}
									if($travm['v1'] != $type_lechenie) {
										$u->error = '������������ ������ ��� ������ ������.';
									}elseif($travm['id']){
										$lech_aa = array( 0 , 0 , 0 , 0 );
										$travm_cep = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid`="'.$usr['id'].'" and `id_eff`="335" and `delete`="0" and `v1`="'.$type_lechenie.'" LIMIT 1'));
										if( $travm_cep['timeUse'] < time() - 360 ) {
											unset($travm_cep);
										}
										
										$cep_users = explode(',',$travm_cep['data']);
										$it_i = 0;
										$it_no = 0;
										$it_users = '';
										while( $it_i < count($cep_users) ) {
											$it_u = $cep_users[$it_i];
											if( $it_u == $u->info['id'] ) {
												$it_no = 1;
											}
											$it_u = mysql_fetch_array(mysql_query('SELECT `id`,`login`,`level`,`align`,`clan`,`room` FROM `users` WHERE `id` = "'.$it_u.'" LIMIT 1'));
											if( isset($it_u['id']) ) {
												$it_users .= ', '.$it_u['login'].'';
											}
											$it_i++;
										}
										$it_u = ltrim($it_u,', ');
										
										$lech_co = round($travm_cep['x']+1);
										if( $it_no == 1 ) {
											$u->error = '�� ��� ���� �� �������';
										}elseif( $lech_co >= $lech_aa[$type_lechenie] ) {
									        mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm['id'].'" LIMIT 1');
									        $itm['iznosNOW']++;
									        mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
											if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
												mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
											}
											
											//$rtxt = '[img[items/cure_g1.gif]] &quot;'.$u->info['login'].'&quot; ����� ���� ��������� �� ������ &quot;'.$usr['login'].'&quot;.';
					                        //mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	

											//mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm_cep['id'].'" LIMIT 1');
									        mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$usr['id'].'" AND `id_eff` = 4 AND `delete` = 0 LIMIT 1');
									        
											// ��������� � ���
											
											if($u->info['id'] != $usr['id']) {	
												if($itm['magic_inci'] == "lech_free_1") { //�����
													mysql_query('UPDATE `achiev` SET `a12` = `a12` + "1" WHERE `uid` = '.$u->info['id'].' AND `a12lvl` = 0 LIMIT 1');
												}elseif($itm['magic_inci'] == "lech_free_2") { //�������
													mysql_query('UPDATE `achiev` SET `a12` = `a12` + "1" WHERE `uid` = '.$u->info['id'].' AND `a12lvl` = 1 LIMIT 1');
												}elseif($itm['magic_inci'] == "lech_free_3") { //�������
													mysql_query('UPDATE `achiev` SET `a12` = `a12` + "1" WHERE `uid` = '.$u->info['id'].' AND `a12lvl` = 2 LIMIT 1');
												}
											}
											
											$u->error = '�������� ������� �� '.$text_msg.'.';
														$rtxt = '[img[items/cure'.$type_lechenie.'.gif]] &quot;'.$u->info['login'].$it_users.'&quot; ������� �� '.$text_msg.' ������ &quot;'.$usr['login'].'&quot;.';
					                                    mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	
										}else{
											if( isset($travm_cep['id']) ) {
												$travm_cep['x']++;
												$u->error = '�� �������������� � ���� ��������� ��� &quot;'.$text_msg.'&quot; (��������� '.$text_msg2.' �����)';
												mysql_query('UPDATE `eff_users` SET `x` = "'.$travm_cep['x'].'"
												,`data` = "'.$travm_cep['data'].','.$u->info['id'].'"
												WHERE `id` = "'.$travm_cep['id'].'" LIMIT 1');
											}else{
												$u->error = '�� ������� ���� ��������� ��� &quot;'.$text_msg.'&quot; (��������� '.$text_msg2.' �����), � ��������� ������� ���� 5 �����, ����� ��������� ����������';
												mysql_query('INSERT INTO `eff_users`
												(
													`id_eff`,`uid`,`name`,`data`,`overType`,`timeUse`,`user_use`,`v1`,`x`
												) VALUES (
													"335","'.$usr['id'].'","���� ���������","'.$u->info['id'].'","28","'.time().'","'.$u->info['id'].'","'.$type_lechenie.'","1"
												)');
											}
											//mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm['id'].'" LIMIT 1');
									        $itm['iznosNOW']++;
									        mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
											if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
												mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
											}
											// ��������� � ���
											$rtxt = '[img[items/cure_g1.gif]] &quot;'.$u->info['login'].'&quot; ����� ���� ��������� �� ������ &quot;'.$usr['login'].'&quot;.';
					                        mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	

										}
									}else{
										$u->error = '�������� �� ����� ������ ������.';
									}
								
								}						        
						}elseif($itm['magic_inci']=='lech_free_dark'){		            
								if($u->info['battle'] > 0) {
									//���������� ������ � ��������
									
								}elseif($u->info['dnow']!=$usr['dnow'])
								{
									$u->error = '�������� ��������� � ������ ������� [������]';
								}elseif($u->info['id']!=$usr['id'])
								{
									$u->error = '�������� �������� ������ ����...';
								}elseif($usr['online']<time()-120 && $usr['bot'] == 0)
								{
									$u->error = '�������� ��������� � �������� ����';
								}elseif($usr['room']!=$u->info['room'])
								{
									$u->error = '�������� ��������� � ������ �������';
								}elseif($usr['battle']!=$u->info['battle'])
								{
									$u->error = '�������� ��������� � ��������';
								}else{
							
									$travm = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid`="'.$usr['id'].'" and `id_eff`="4" and `delete`="0" and `data` LIKE "%|nelich=%" ORDER BY `v1` DESC LIMIT 1'));
									//$type_lechenie = $travm['v1'];
									//$itm['magic_inci'] = 'lech_free_'.$travm['v1'];
									//if($itm['magic_inci']=='lech_free_1'){
										$type_lechenie=3; // ��� ������ ������ �����
										$text_msg='&quot;����������� ������&quot;';
										$text_msg2 = '�����������';
									//}elseif($itm['magic_inci']=='lech_free_2'){
									//	$type_lechenie=2; // ��� ������ ������ �����
									//	$text_msg='&quot;������� ������&quot;';
									//	$text_msg2 = '�������';
									//}elseif($itm['magic_inci']=='lech_free_3'){
									//	$type_lechenie=3; // ��� ������ ������ �����
									//	$text_msg='&quot;������� ������&quot;';
									//	$text_msg2 = '�������';
									//}
									if($travm['v1'] != $type_lechenie) {
										$u->error = '������������ ������ ��� ������ ������.';
									}elseif($travm['id']){
										$lech_aa = array( 0 , 0 , 0 , 0 );
										$travm_cep = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid`="'.$usr['id'].'" and `id_eff`="335" and `delete`="0" and `v1`="'.$type_lechenie.'" LIMIT 1'));
										if( $travm_cep['timeUse'] < time() - 360 ) {
											unset($travm_cep);
										}
										
										$cep_users = explode(',',$travm_cep['data']);
										$it_i = 0;
										$it_no = 0;
										$it_users = '';
										while( $it_i < count($cep_users) ) {
											$it_u = $cep_users[$it_i];
											if( $it_u == $u->info['id'] ) {
												$it_no = 1;
											}
											$it_u = mysql_fetch_array(mysql_query('SELECT `id`,`login`,`level`,`align`,`clan`,`room` FROM `users` WHERE `id` = "'.$it_u.'" LIMIT 1'));
											if( isset($it_u['id']) ) {
												$it_users .= ', '.$it_u['login'].'';
											}
											$it_i++;
										}
										$it_u = ltrim($it_u,', ');
										
										$lech_co = round($travm_cep['x']+1);
										if( $it_no == 1 ) {
											$u->error = '�� ��� ���� �� �������';
										}elseif( $lech_co >= $lech_aa[$type_lechenie] ) {
									        mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm['id'].'" LIMIT 1');
									        $itm['iznosNOW']++;
									        mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
											if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
												mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
											}
											
											//$rtxt = '[img[items/cure_g1.gif]] &quot;'.$u->info['login'].'&quot; ����� ���� ��������� �� ������ &quot;'.$usr['login'].'&quot;.';
					                        //mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	

											//mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm_cep['id'].'" LIMIT 1');
									        mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$usr['id'].'" AND `id_eff` = 4 AND `delete` = 0 LIMIT 1');
									        
											// ��������� � ���
											$u->error = '�������� ������� �� '.$text_msg.'.';
														$rtxt = '[img[items/cure'.$type_lechenie.'.gif]] &quot;'.$u->info['login'].$it_users.'&quot; ������� �� '.$text_msg.' ������ &quot;'.$usr['login'].'&quot;.';
					                                    mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	
										}else{
											if( isset($travm_cep['id']) ) {
												$travm_cep['x']++;
												$u->error = '�� �������������� � ���� ��������� ��� &quot;'.$text_msg.'&quot; (��������� '.$text_msg2.' �����)';
												mysql_query('UPDATE `eff_users` SET `x` = "'.$travm_cep['x'].'"
												,`data` = "'.$travm_cep['data'].','.$u->info['id'].'"
												WHERE `id` = "'.$travm_cep['id'].'" LIMIT 1');
											}else{
												$u->error = '�� ������� ���� ��������� ��� &quot;'.$text_msg.'&quot; (��������� '.$text_msg2.' �����), � ��������� ������� ���� 5 �����, ����� ��������� ����������';
												mysql_query('INSERT INTO `eff_users`
												(
													`id_eff`,`uid`,`name`,`data`,`overType`,`timeUse`,`user_use`,`v1`,`x`
												) VALUES (
													"335","'.$usr['id'].'","���� ���������","'.$u->info['id'].'","28","'.time().'","'.$u->info['id'].'","'.$type_lechenie.'","1"
												)');
											}
											//mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm['id'].'" LIMIT 1');
									        $itm['iznosNOW']++;
									        mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
											if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
												mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
											}
											// ��������� � ���
											$rtxt = '[img[items/cure_g1.gif]] &quot;'.$u->info['login'].'&quot; ����� ���� ��������� �� ������ &quot;'.$usr['login'].'&quot;.';
					                        mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	

										}
									}else{
										$u->error = '�������� �� ����� ������ ������.';
									}
								
								}						        
						}else{
							if( $u->info['id'] != $usr['id'] ) {
								$lsct = mysql_fetch_array(mysql_query('SELECT `id_eff` FROM `eff_users` WHERE `uid` = "'.$usr['id'].'" AND `delete` = "0" AND (`overType` = "'.$itm['overType'].'" OR (`id_eff` = "'.$itm['magic_inc'].'" AND "'.(0+$st['onlyOne']).'" != "0")) LIMIT 1'));
								$lsct['good'] = 1;
								//�����
								if( $lsct['id_eff'] >= 291 && $lsct['id_eff'] <= 296 && $itm['magic_inc'] >= 291 && $itm['magic_inc'] <= 296 ) {
									if( $lsct['id_eff'] > $itm['magic_inc'] ) {
										$u->error = '�� ��������� ���� ���� ����� �����!';
										$lsct['good'] = 0;
									}
								}
							}else{
								$lsct['good'] = 1;
							}
							//������ ���������� �� ���������
							if( $this->worse( $usr['id'] , $itm['magic_inci'] ) > 0 ) {						
								$u->error = '� ��� ���� ����� ������� ����! ������ ������������ ������...';
							}elseif($lsct['good'] == 0) {
								
							} elseif($u->info['dnow'] != $usr['dnow']) {
							  $u->error = '�������� ��������� � ������ ������� [������]';
                            } elseif($usr['inTurnir'] != 0 && ($u->info['inTurnir'] != $usr['inTurnir'])) {
							  $u->error = '��������� � ������� ����� ������...';
							} elseif($usr['id']==$u->info['id'] && isset($st['useOnlyUser'])) {
								$u->error = '������ ������������ ��� �������� �� ������ ����';
							}elseif($usr['online']<time()-120 && $usr['bot'] == 0)
							{
								$u->error = '�������� ��������� � �������� ���� ;)';
							}elseif($usr['room']!=$u->info['room'] && $usr['battle'] != $u->info['battle'] && $u->info['battle'] > 0)
							{
								$u->error = '�������� ��������� � ������ ������� ['.$usr['room'].' '.$u->info['room'].']';
							}elseif($usr['admin']>0 && $u->info['admin']==0 && isset($st['useNoAdmin']))
							{
								$u->error = '������ ������������ ������ �������� �� �������';
							}elseif($usr['battle']>0 && $u->info['battle']!=$usr['battle'])
							{
								$u->error = '�������� ��������� � ���';
							}elseif(($u->info['align']==2 || $u->info['haos']>time()) && isset($st['nohaos']))
							{
								$u->error = '�������� �� ����� ������������ ������ ��������';
							}else{
								//��������� ������ ���������
								$goodUse = 1;
								if(isset($st['onlyOne']))
								{
									//������� ������� �������
									$goodUse = 0;
									$upd1 = mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$usr['id'].'" AND `delete` = "0" AND `id_eff` = "'.$itm['magic_inc'].'"');
									if($upd1)
									{										
										$goodUse = 1;
									}
								}
								if(isset($st['oneType']))
								{
									//������� ������� �������									
									$goodUse = 0;
									$upd2 = mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$usr['id'].'" AND `delete` = "0" AND `overType` = "'.$itm['overType'].'"');
									if($upd1)
									{
										$goodUse = 1;
									}
								}
								if( $goodUse == 1 && $itm['magic_inc'] == 'unclone' ) {
									//���������� �����
									if($usr['clone'] > 0 && $usr['hpNow'] >= 1 && $usr['team'] != $u->info['team']) {
										mysql_query('UPDATE `stats` SET `team` = "'.$u->info['team'].'" WHERE `id` = "'.$usr['id'].'" LIMIT 1');
										if( $u->info['sex'] == 0 ) {
											$txt_m = '{u1} <b>��������� �����</b> {u2} �� ���� �������.';
										}else{
											$txt_m = '{u1} <b>����������</b> ����� {u2} �� ���� �������.';	
										}
										$this->inBattleLog($txt_m,$usr);
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.($itm['iznosNOW'] + 1).'" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `btl_zd` = "1" WHERE `item_id` = "'.$itm['item_id'].'" AND `inOdet` > 0 AND `uid` = "'.$u->info['id'].'" AND `delete` = "0" LIMIT 20');
										$u->error = '�� ������� ������������ ���������� &quot;'.$itm['name'].'&quot; �� &quot;'.$usr['login'].'&quot;';
									}else{
										$u->error = '�� �� ������ ������������ ������� ���������...';
									}
								}elseif($goodUse == 1)
								{
									if($itm['magic_inc'] == '') {
										$itm['magic_inc'] = $itm['magic_inci'];
									}
									$us = $this->add_eff($usr['id'],$itm['magic_inc']);
									if($us[0]==1)
									{
										$itm['iznosNOW']++;
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
										if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
											mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
										}
										if($u->info['id']!=$usr['id'])
										{
											$u->addDelo(1,$u->info['id'],'&quot;<font color="maroon">System.inventory</font>&quot;: �������� ����������� ���������� &quot;'.$itm['name'].'&quot; ('.$us[1].') �� ��������� &quot;'.$usr['login'].'&quot; (id'.$usr['id'].') [itm:'.$itm['id'].'].',time(),$u->info['city'],'System.inventory',0,0);
											$u->addDelo(1,$usr['id'],'&quot;<font color="maroon">System.inventory</font>&quot;: �������� &quot;'.$u->info['login'].'&quot; (id'.$u->info['id'].') ����������� ���������� &quot;'.$itm['name'].'&quot; ('.$us[1].') �� ��������� [itm:'.$itm['id'].'].',time(),$usr['city'],'System.inventory',0,0);
											$u->error = '�� ������� ������������ ���������� &quot;'.$itm['name'].'&quot; �� ��������� &quot;'.$usr['login'].'&quot;<br>'.$us[1].'';
											$rtxt = '[img[items/'.$itm['img'].']] &quot;'.$u->info['login'].'&quot; �����������'.$sx.' ���������� &quot;'.$itm['name'].'&quot; �� ��������� &quot;'.$usr['login'].'&quot;.';
											mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES ('1','".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	
										}else{
											$u->addDelo(1,$u->info['id'],'&quot;<font color="maroon">System.inventory</font>&quot;: �������� ����������� ���������� &quot;'.$itm['name'].'&quot; ('.$us[1].') �� ��������� ������ ���� [itm:'.$itm['id'].'].',time(),$u->info['city'],'System.inventory',0,0);
											$u->error = '�� ������� ������������ ���������� &quot;'.$itm['name'].'&quot; �� ������ ����<br>'.$us[1].'';
											/*
												$rtxt = '[img[items/'.$itm['img'].']] &quot;'.$u->info['login'].'&quot; �����������'.$sx.' ���������� &quot;'.$itm['name'].'&quot; �� ����.';
												mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES ('1','".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	
											*/
										}
										$this->youuse++;
									}else{
										$u->error = '�� ������� ������������ "'.$itm['name'].'" ...';
									}
								}else{
									$u->error = '�� ������� ������������ "'.$itm['name'].'"';
								}
							}
						}
					}else{
						$u->error = '�������� "'.$jl.'" �� ������ � ���� ������ ('.$u->info['city'].')';
					}
				}elseif(isset($st['useOnItem']) && $st['useOnItem']==1)
				{
					//���������� �� �������
					
				}else{
					//�� ����
					$goodUse = 1;
					if( $this->worse( $u->info['id'] , $itm['magic_inci'] ) > 0 ) {						
							$u->error = '� ��� ���� ����� ������� ����! ������ ������������ ������...';
					}elseif(($u->info['align']==2 || $u->info['haos']>time()) && isset($st['nohaos'])) {
						$goodUse = 0;
						$u->error = '�������� �� ����� ������������ ������ ��������';
					}
					
					if($itm['magic_inci'] == 'sanich2') {
						if($u->info['battle'] == 0) {						
							$sz = $u->testAction('`uid` = "'.$u->info['id'].'" AND `vars` = "sanich2" AND `time` > '.(time()-1*60).' LIMIT 1',1);
							if(!isset($sz['id'])) {														
								$slech = 0;
								$strm = mysql_fetch_array(mysql_query('SELECT `id`,`v1` FROM `eff_users` WHERE `uid` = "'.$u->info['id'].'" AND `id_eff` = 4 AND `delete` = "0" LIMIT 1'));
								if(isset($strm['id'])) {
									if($strm['v1'] == 1) {
										$slech = 1;
									}elseif($strm['v1'] == 2) {
										$slech = 2;
									}elseif($strm['v1'] == 3) {
										$slech = 3;
									}
								}								
								if($slech > 0) {
									
									$goodUse = 0;
									
									$slf = '������';
									if($slech == 2) {
										$slf = '�������';
									}elseif($slech == 3) {
										$slf = '�������';
									}
	
									if($u->info['sex'] == 1) {
										$rtxt = '[img[items/'.$itm['img'].']] &quot;'.$u->info['login'].'&quot; ������������ &quot;'.$itm['name'].' ������&quot; � �������� �� '.$slf.' ������.';
									}else{
										$rtxt = '[img[items/'.$itm['img'].']] &quot;'.$u->info['login'].'&quot; ����������� &quot;'.$itm['name'].' ������&quot; � ��������� �� '.$slf.' ������.';
									}
									mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");	
								
									mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$strm['id'].'" LIMIT 1');
									$u->error = '�� ������� ���������� �� '.$slf.' ������.';
									$itm['iznosNOW'] += $slech;
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
									$u->addAction(time(),'sanich2',$slech);
								}else{
									$u->error = '� ��������� ��� ���������� ������ ������� ����� ��������';
								}
								
							}else{
								$u->error = '�������� ������������� '.$u->timeOut(($sz['time']+1*60)-time()).'.';
							}							
						}else{
							$u->error = '���������� ������������ � ���';
						}
					}elseif($itm['magic_inci'] == 'sanich1' && $u->info['battle'] > 0) {
						$sz = $u->testAction('`uid` = "'.$u->info['id'].'" AND `vars` = "sanich1" AND `time` > '.(time()-3*60).' LIMIT 1',1);
						if($u->stats['hpNow'] < 1) {
							$u->error = '�� ������� � �� ������ ������������ ���...';
						}elseif(!isset($sz['id'])) {
							$goodUse = 0;
							$u->error = '�� ������� ������������ &quot;'.$itm['name'].'&quot;';
							$z = 1;
							while($z <= 5) {
								$u->info['tactic'.$z]++;
								if($u->info['tactic'.$z] > 25) {
									$u->info['tactic'.$z] = 25;
								}elseif($u->info['tactic'.$z] < 0) {
									$u->info['tactic'.$z] = 0;
								}
								$z++;
							}
							if($u->info['sex'] == 1) {
								$this->inBattleLog('{u1} ������������ &quot;<b>'.$itm['name'].' ������</b>&quot;.');
							}else{
								$this->inBattleLog('{u1} ����������� &quot;<b>'.$itm['name'].' ������</b>&quot;.');
							}
							mysql_query('UPDATE `stats` SET `tactic1` = "'.$u->info['tactic1'].'",`tactic2` = "'.$u->info['tactic2'].'",`tactic3` = "'.$u->info['tactic3'].'",`tactic4` = "'.$u->info['tactic4'].'",`tactic5` = "'.$u->info['tactic5'].'" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
							$itm['iznosNOW']++;
							mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
							$u->addAction(time(),'sanich1',$u->info['battle']);
						}else{
							$u->error = '�������� ������������� '.$u->timeOut(($sz['time']+3*60)-time()).'.';
						}
										
					}elseif($itm['magic_inci'] == 'sanich3' && $u->info['battle'] > 0) {
						
						$sz = $u->testAction('`uid` = "'.$u->info['id'].'" AND `vars` = "sanich3" AND `time` > '.(time()-3*60*60).' LIMIT 1',1);
						if( $u->stats['hpNow'] < 1 ) {
							$u->error = '�� ������� � �� ������ ������������ ���...';
						}elseif(!isset($sz['id'])) {
							
							$usr = mysql_fetch_array(mysql_query('SELECT `u`.`id`,`u`.`pass`,`u`.`level`,`s`.`hpNow`,`s`.`team`,`u`.`login`,`u`.`sex` FROM `users` AS `u` LEFT JOIN `stats` AS `s` ON `s`.`id` = `u`.`id` WHERE `u`.`id` = "'.$u->info['enemy'].'" AND `u`.`battle` = "'.$u->info['battle'].'" LIMIT 1')); 
							if(isset($usr['id']) && $usr['hpNow'] >= 1) {
								$iznslvl = $usr['level'];
								
								$goodUse = 0;
								$u->error = '�� ������� ������������ &quot;'.$itm['name'].'&quot; �� '.$usr['login'].'';
								
								if($u->info['sex'] == 1) {
									$this->inBattleLog('{u1} ������������ &quot;<b>'.$itm['name'].' ������</b>&quot; �� {u2}.',$usr);
								}else{
									$this->inBattleLog('{u1} ����������� &quot;<b>'.$itm['name'].' ������</b>&quot; �� {u2}.',$usr);
								}
								
								mysql_query('UPDATE `stats` SET `hpNow` = "'.$usr['hpNow'].'" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
								mysql_query('UPDATE `stats` SET `hpNow` = "'.$u->stats['hpNow'].'" WHERE `id` = "'.$usr['id'].'" LIMIT 1');
								$itm['iznosNOW'] += $iznslvl;
								mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
								$u->addAction(time(),'sanich3',$u->info['battle']);
							}else{
								$u->error = '��� ����������� ����������';
							}
							
						}else{
							$u->error = '�������� ������������� '.$u->timeOut(($sz['time']+3*60*60)-time()).'.';
						}
										
					}elseif($itm['magic_inci']=='aligndark' or $itm['magic_inci']=='alignsvet' or $itm['magic_inci']=='alignneitr'){
						$goodUse = 0;
							if($u->info['clan'] > 0 ) {
								$u->error = '������ ������ ���������� �������� � ����� �� ������!';
							}elseif($u->info['battle'] > 0) {
								//���������� ������ � ��������	
							}else{
								$align = 0;
								if($itm['magic_inci']=='aligndark'){
									$align = 3;
								}elseif($itm['magic_inci']=='alignsvet'){
									$align = 1;
								}elseif($itm['magic_inci']=='alignneitr'){
									$align = 7;
								}
								if($u->testAlign($u->info['id'],$align) != false) {
									$u->error = '� ��� �������� �� ����� ���������� ��� '.$u->timeOut($u->testClan($u->info['id'],$align)-time()).'.';
								}else{
									$upd = mysql_query('UPDATE `users` SET `align` = "'.$align.'" WHERE `id` = "'.$u->info['id'].'"');
									if($upd){
										$u->addAlignClan($u->info['id'],$align,$u->info['clan']);
										$u->error = '�� ������� �������� ����������!';	
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.($itm['iznosNOW'] + 1).'" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									}else{
										$u->error = '��� �� ������� �������� ����������.';
									}
								}
							}
					}elseif($itm['magic_inci']=='addrep'){
						$goodUse = 0;
							if($u->info['battle'] > 0) {
								//���������� ������ � ��������	
							}else{
								$rep = 100;
								$upd = mysql_query('UPDATE `rep` SET `rep1` = `rep1` + "'.$rep.'" WHERE `id` = "'.$u->info['id'].'"');
								if($upd){
									$u->error = '�� ������� ������������ '.$itm['name'];	
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.($itm['iznosNOW'] + 1).'" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
								}else{
									$u->error = '��� �� ������� ������������ '.$itm['name'];
								}
							}
					}elseif($itm['magic_inci']=='lech')
					{
						$goodUse = 0;
					    if($u->info['level']>=2 and $u->info['level']<=7){
						    $travm = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid`="'.$u->info['id'].'" and `id_eff`="4" and `delete`="0" LIMIT 1'));
                                if($travm) {
									mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm['id'].'" LIMIT 1');
									$itm['iznosNOW']++;
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
									if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									}
								}else{
									$u->error = '� ��� ��� ������.';
								}
						}else{
						    $u->error = '��� ������� �� �������� ��� ������������� ������.';
						}
					}elseif($itm['magic_inci']=='lech_dark')
					{
								$goodUse = 0;
					   	 		$travm = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid`="'.$u->info['id'].'" and `id_eff`="4" and `delete`="0" and `data` LIKE "%|nelich=%" LIMIT 1'));
                                if($travm) {
									mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id` = "'.$travm['id'].'" LIMIT 1');
									$itm['iznosNOW']++;
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
									if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									}
								}else{
									$u->error = '� ��� ��� ����������� �����.';
								}
					}
									
					if($goodUse==1)
					{
						
						$upd1 = 1;
						$upd2 = 1;
						//��������� ������ ���������
						if(isset($st['onlyOne']))
						{
							//������� ������� �������
							$goodUse = 0;
							$upd1 = mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$u->info['id'].'" AND `delete` = "0" AND `id_eff` = "'.$itm['magic_inc'].'"');
							//var_dump($upd1);
							if($upd1)
							{
								$goodUse = 1;
							}
						}
						if(isset($st['oneType']))
						{
							//������� ������� �������
							$goodUse = 0;
							$upd2 = mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$u->info['id'].'" AND `delete` = "0" AND `overType` = "'.$itm['overType'].'"');
							if($upd2)
							{
								$goodUse = 1;
							}
						}
						
						if($itm['magic_inci']=='unclone')
						{
							//������ ������������
							if( $u->info['hpNow'] < 1 ) {
								$u->error = '��� �� ������� ���������� �����...';
							}elseif( $u->info['battle'] == 0 ) {
								$u->error = '����� ������������ ������ � ��������...';
							}else{
								//�����������
								$u->error = '����������...';
							}
						}elseif($itm['magic_inci']=='cloneMe')
						{
							//������ ������������
							if( $u->info['hpNow'] < 1 ) {
								$u->error = '�� ������� ����������� ���� ���� ;)';
							}elseif( $u->info['battle'] == 0 ) {
								$u->error = '����� ������������ ������ � ��������...';
							}else{
								$bot_cou = mysql_fetch_array(mysql_query('SELECT COUNT(`id`) FROM `users` WHERE `login` LIKE "%'.$u->info['login'].' (����%" AND `battle` = "'.$u->info['battle'].'" LIMIT 1'));
								$bot_cou = $bot_cou[0]+1;
								//��������� ����
								$clone = array(
									'id' => $u->info['id'],
									'login' => $u->info['login'].' (���� '.$bot_cou.')',
									'level' => $u->info['level'],
									'city' => $u->info['city'],
									'cityreg' => $u->info['cityreg'],
									'name' => $u->info['name'],
									'sex' => $u->info['sex'],
									'deviz' => $u->info['deviz'],
									'hobby' => $u->info['hobby'],
									'time_reg' => $u->info['time_reg'],
									'obraz' => $u->info['obraz'],
									'stats' => $u->info['stats'],
									'upLevel' => $u->info['upLevel'],
									'priems' => $u->info['priems'],
									'loclon' => true,
                                    'inTurnir' => $u->info['inTurnir']
								);
								$bot = $u->addNewbot(1,NULL,$clone,NULL,true);
								if( $bot > 0 ) {
									mysql_query('UPDATE `stats` SET `team` = "'.$u->info['team'].'",`hpNow` = "'.$u->stats['hpNow'].'",`mpNow` = "'.$u->stats['mpNow'].'" WHERE `id` = "'.$bot.'" LIMIT 1');
									mysql_query('UPDATE `users` SET `battle` = "'.$u->info['battle'].'" WHERE `id` = "'.$bot.'" LIMIT 1');
									//��������� ���
									if( $u->info['sex'] == 0 ) {
										$txt_m = '{u1} ����������� &quot;'.$itm['name'].'&quot; � <b>������� �����</b>.';
									}else{
										$txt_m = '{u1} ������������ &quot;'.$itm['name'].'&quot; � <b>�������� �����</b>.';
									}
									$this->inBattleLog($txt_m,NULL);
									if( $u->info['sex'] == 0 ) {
										$txt_m = '<b>'.$u->info['login'].' (���� '.$bot_cou.')</b>['.$u->info['level'].'] �������� � ��������!';
									}else{
										$txt_m = '<b>'.$u->info['login'].' (���� '.$bot_cou.')</b>['.$u->info['level'].'] ��������� � ��������!';
									}
									$this->inBattleLog($txt_m,$usr_m);
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.($itm['iznosNOW'] + 1).'" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `btl_zd` = "1" WHERE `item_id` = "'.$itm['item_id'].'" AND `inOdet` > 0 AND `uid` = "'.$u->info['id'].'" AND `delete` = "0" LIMIT 20');
									$u->error = '�������� &quot;'.$itm['name'].'&quot; ���� ������� ������������';
								}else{
									$u->error = '��������� ������������ ��������...';
								}
								unset($txt_m,$usr_m,$clone,$bot_cou,$bot);
							}
						
                        } elseif($itm['magic_inci'] == 'scan') {
                          if($u->info['inTurnir'] != 0) {
                            $sp = mysql_query('SELECT `st`.*, `u`.* FROM `stats` AS `st` LEFT JOIN `users` AS `u` ON (`st`.`id` = `u`.`id`) WHERE `inTurnir` = "'.$u->info['inTurnir'].'"');
                            while($pl = mysql_fetch_array($sp)) {
                             $rrm = mysql_fetch_array(mysql_query('SELECT * FROM `bs_map` WHERE `x` = "'.$pl['x'].'" AND `y` = "'.$pl['y'].'"'));
                             $trnt .= $pl['login'].' ������� : '.$rrm['name'].', ';
                            }
                            $trnt = rtrim($trnt,', ');
                            $it_ = $u->addItem(2435, $u->info['id'], 'noodet=1|noremont=1|sudba='.$u->info['login'].'');
                            mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `use_text` = 500 WHERE `id` = "'.$it_.'" LIMIT 1');
                            mysql_query('INSERT INTO `items_text` (`item_id`,`time`,`login`,`text`,`city`,`x`,`type`) VALUES ("'.$it_.'","'.time().'","","'.mysql_real_escape_string($trnt).'","'.$u->info['city'].'","1","1")');
                            mysql_query('DELETE FROM `items_users` WHERE `id` = "'.$itm['id'].'" LIMIT 1');
                            $u->error = '�� �������� �������...';
                            
                          } else {
                            $u->error = '������������ ������ � ����� ������...';
                          }
                        }elseif($itm['magic_inci']=='tactic')
						{
							//������ �������
							if( $u->stats['hpNow'] >= 1 ) {
								$trtct = mysql_fetch_array(mysql_query('SELECT `id`,`time` FROM `battle_actions` WHERE `uid` = "'.$u->info['id'].'" AND `vars` = "use_cast_tactic" AND `btl` = "'.$u->info['battle'].'" AND `time` > "'.(time()-180).'" LIMIT 1'));
								if(isset($trtct['id'])) {
									$u->error = '�������� ������������� ��� '.$u->timeOut($trtct['time']-time()+180);
								}else{
									mysql_query('INSERT INTO `battle_actions` (`uid`,`btl`,`time`,`vars`,`vals`) VALUES (
										"'.$u->info['id'].'","'.$u->info['battle'].'","'.time().'","use_cast_tactic",""
									)');
									if($st['addtac'] == 10){
										$u->info['tactic1'] += $st['addtacv'];
										$u->info['tactic2'] += $st['addtacv'];
										$u->info['tactic3'] += $st['addtacv'];
										$u->info['tactic4'] += $st['addtacv'];
										$u->info['tactic5'] += $st['addtacv'];
										$tact = '`tactic1` = "'.$u->info['tactic1'].'", `tactic2` = "'.$u->info['tactic2'].'", `tactic3` = "'.$u->info['tactic3'].'", `tactic4` = "'.$u->info['tactic4'].'", `tactic5` = "'.$u->info['tactic5'].'"';
										mysql_query('UPDATE `stats` SET '.$tact.' WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
									}else{
										$u->info['tactic'.$st['addtac']] += $st['addtacv'];
										mysql_query('UPDATE `stats` SET `tactic'.$st['addtac'].'` = "'.$u->info['tactic'.$st['addtac']].'" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
									}
									//��������� ���
									if( $u->info['sex'] == 0 ) {
										$txt_m = '{u1} �������� ���������� &quot;<b>'.$itm['name'].'</b>&quot;.';
									}else{
										$txt_m = '{u1} ��������� ���������� &quot;<b>'.$itm['name'].'</b>&quot;.';
									}
									$this->inBattleLog($txt_m,NULL);
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.($itm['iznosNOW'] + 1).'" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									$u->error = '�������� &quot;'.$itm['name'].'&quot; ���� ������� ������������';
								}
							}else{
								$u->error = '�� �������...';
							}
						}elseif($itm['magic_inci']=='add_animal')
						{
							if($u->info['animal']>0)
							{
								$u->error = '�� ������� ������������ "'.$itm['name'].'", � ��� ��� ���� �����.';
							}else{
								$anm = array('type'=>1,'name'=>'','obraz'=>'','stats'=>'','sex'=>0);
								
								//�������� ��� �����
								
								if($itm['name'] == '�������� ����') {
									$anm['type'] = 2;
								}elseif($itm['name'] == '�������� ��������') {
									$anm['type'] = 3;
								}elseif($itm['name'] == '�������� ����') {
									$anm['type'] = 1;
								}elseif($itm['name'] == '�������� �������') {
									$anm['type'] = 4;
								}elseif($itm['name'] == '�������� �����') {
									$anm['type'] = 6;
								}elseif($itm['name'] == '�������� ���') {
									$anm['type'] = 5;
								}
								
								if($anm['type']==1)
								{
									$anm['name'] = '���';
									$anm['sex'] = 0;
									//$anm['obraz'] = array(1=>'20864.gif',2=>'21301.gif',3=>'21139.gif',4=>'20427.gif');
									$anm['obraz'] = '20864.gif';
									$anm['stats'] = 's1=2|s2=5|s3=2|s4=5|rinv=40|m9=5|m6=10';									
								}elseif($anm['type']==2)
								{
									$anm['name'] = '����';
									$anm['sex'] = 1;
									//$anm['obraz'] = array(1=>'21415.gif',2=>'21722.gif',3=>'21550.gif');
									$anm['obraz'] = '21572.gif';
									$anm['stats'] = 's1=2|s2=2|s3=5|s4=5|rinv=40|m9=5|m6=10';									
								}elseif($anm['type']==3)
								{
									$anm['name'] = '�������';
									$anm['sex'] = 0;
									//$anm['obraz'] = array(1=>'22277.gif',2=>'22265.gif',3=>'22333.gif',4=>'22298.gif');
									$anm['obraz'] = '22277.gif';
									$anm['stats'] = 's1=3|s2=10|s3=3|s4=4|rinv=40|m9=5|m6=10';									
								}elseif($anm['type']==4)
								{
									$anm['name'] = '�������';
									$anm['sex'] = 0;
									//$anm['obraz'] = array(1=>'22177.gif',2=>'21976.gif',3=>'21877.gif');
									$anm['obraz'] = '23002.gif';
									$anm['stats'] = 's1=5|s2=3|s3=3|s4=5|rinv=40|m9=5|m6=10';									
								}elseif($anm['type']==5)
								{
									$anm['name'] = '���';
									$anm['sex'] = 0;
									//$anm['obraz'] = array(1=>'22352.gif',2=>'23024.gif',3=>'22900.gif',4=>'22501.gif',5=>'22700.gif');
									$anm['obraz'] = '23023.gif';
									$anm['stats'] = 's1=5|s2=3|s3=3|s4=5|rinv=40|m9=5|m6=10';									
								}elseif($anm['type']==6)
								{
									$anm['name'] = '����';
									$anm['sex'] = 0;
									//$anm['obraz'] = array(1=>'24000.gif',2=>'25000.gif',3=>'27000.gif',4=>'28000.gif');
									$anm['obraz'] = '25004.gif';
									$anm['stats'] = 's1=5|s2=3|s3=3|s4=5|rinv=40|m9=5|m6=10';									
								}
								//$anm['obraz'] = $anm['obraz'][rand(1,count($anm['obraz']))];
								$anm['obraz'] = str_replace('.gif','',$anm['obraz']);
								$anm['obraz'] = str_replace('.jpg','',$anm['obraz']);
								$anm['obraz'] = str_replace('.png','',$anm['obraz']);
								$ins = mysql_query('INSERT INTO `users_animal` (`type`,`name`,`uid`,`obraz`,`stats`,`sex`) VALUES ("'.$anm['type'].'","'.$anm['name'].'","'.$u->info['id'].'","'.$anm['obraz'].'","'.$anm['stats'].'","'.$anm['sex'].'")');
								if($ins)
								{
									
									$u->info['animal'] = mysql_insert_id();
									mysql_query('UPDATE `users` SET `animal` = "'.$u->info['animal'].'" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
									$u->error = '�� ������� ������������ "'.$itm['name'].'" � ������� - &quot;�� � ������ �� ���, ���� ���������&quot;.';
									$itm['iznosNOW']++;
									mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
									if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
										mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
									}
									$u->addDelo(1,$u->info['id'],'&quot;<font color="maroon">System.inventory</font>&quot;: �������� ����������� ���������� &quot;'.$itm['name'].'&quot; ('.$us[1].') [itm:'.$itm['id'].'].',time(),$u->info['city'],'System.inventory',0,0);
								}else{
									$u->error = '�� ������� ������������ "'.$itm['name'].'", ���-�� ����� �� ��� ...';
								}
							}
						}elseif($goodUse == 1)
						{
							if($itm['magic_inc'] == '') {
								$itm['magic_inc'] = $itm['magic_inci'];
							}
							
							$us = $this->add_eff($u->info['id'],$itm['magic_inc']);
							if($us[0]==1)
							{
								$itm['iznosNOW']++;
								mysql_query('UPDATE `items_users` SET `iznosNOW` = "'.$itm['iznosNOW'].'" WHERE `id` = "'.$itm['id'].'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
								if($itm['inGroup'] > 0 && $itm['delete'] == 0) {
									mysql_query('UPDATE `items_users` SET `inGroup` = "0", `delete` = "0" WHERE `id` = "'.$itm['id'].'" LIMIT 1');
								}
								$u->addDelo(1,$u->info['id'],'&quot;<font color="maroon">System.inventory</font>&quot;: �������� ����������� ���������� &quot;'.$itm['name'].'&quot; ('.$us[1].') [itm:'.$itm['id'].'].',time(),$u->info['city'],'System.inventory',0,0);
								$this->youuse++;
								$u->error = '�� ������� ������������ ���������� &quot;'.$itm['name'].'&quot;<br>'.$us[1].'';
								$rtxt = '[img[items/'.$itm['img'].']] &quot;'.$u->info['login'].'&quot; �����������'.$sx.' ���������� &quot;'.$itm['name'].'&quot; �� ����.';
								mysql_query("INSERT INTO `chat` (`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES ('".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','11','0','1')");	
								mysql_query('DELETE FROM `items_users` WHERE `id` = "'.$itm['id'].'" AND `iznosMAX` = "'.$itm['iznosNOW']++.'" LIMIT 100');
							}else{
								if($u->error != '') {
									$u->error = '�� ������� ������������ "'.$itm['name'].'"...<br>'.$u->error;
								}else{
									$u->error = '�� ������� ������������ "'.$itm['name'].'"...';
								}
							}
						}else{
							if($u->error != '') {
								$u->error = '�� ������� ������������ "'.$itm['name'].'"<br>'.$u->error;
							}else{
								$u->error = '�� ������� ������������ "'.$itm['name'].'"';
							}
						}
					}
				 //------------------------------
				}				
			}		
		}else{
			$u->error = '������� �� ������ � ���������';
		}
	}


	public function add_eff($uid,$id,$is_no = NULL)
	{
		global $u;
		$g = array(0=>0,1=>'');
		$eff = mysql_fetch_array(mysql_query('SELECT * FROM `eff_main` WHERE `id2` = "'.$id.'" LIMIT 1'));	
		
		//if($is_no != NULL) {
			//��������� ������ ���������
			if($eff['onlyOne'] > 0)
			{
				//������� ������� �������
				$goodUse = 0;
				$upd1 = mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$uid.'" AND `delete` = "0" AND `id_eff` = "'.$eff['id2'].'"');
				if($upd1)
				{
					$goodUse = 1;
				}
			}
			if($eff['oneType'] > 0)
			{
				//������� ������� �������
				$goodUse = 0;
				$upd2 = mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `uid` = "'.$uid.'" AND `delete` = "0" AND `overType` = "'.$eff['oneType'].'"');
				if($upd2)
				{
					$goodUse = 1;
				}
			}
		//}
			$goodUse = 1;
		if($goodUse == 1 || $is_no == NULL) {
			if(isset($eff['id2']))
			{
				//$eff = $this->paguba($eff);
				$uidu = mysql_fetch_array(mysql_query('SELECT `id`,`battle` FROM `users` WHERE `id` = "'.$uid.'" LIMIT 1'));
				if( isset($uidu['id']) &&$uidu['battle'] > 0 ) {
					$uidu = 1;
				}else{
					$uidu = 0;
				}
				$n = $eff['mname'];
				$d = $eff['mdata'];
				$u_u = $u->info['id'];
				if( $eff['id2'] >= 316 && $eff['id'] <= 320 ) {
					$u_u = 0;
				}
				$ins = mysql_query('INSERT INTO `eff_users` (`user_use`,`endbattle`,`overType`,`id_eff`,`uid`,`name`,`timeUse`,`data`,`no_Ace`) VALUES (
				"'.$u_u.'","'.$uidu.'","'.$eff['oneType'].'","'.$eff['id2'].'","'.$uid.'","'.$n.'","'.time().'","'.$d.'","'.$eff['noAce'].'")');
				if($ins)
				{
					$g[0] = 1;
					$g[1] = '...';
				}
			}
		}
		return $g;
	}
	
	//�������� ����������� � ��������, ���� �����������
	public function testAlignAtack( $u1 , $u2 , $btl_test ) {
		$r = true;
		if( $btl_test['type'] != 500 && $btl_test['dn_id'] == 0 && $btl_test['team_win'] == -1 ) { 
			$u1 = mysql_fetch_array(mysql_query('SELECT `id`,`align` FROM `users` WHERE `id` = "'.mysql_real_escape_string($u1).'" LIMIT 1'));
			$u2 = mysql_fetch_array(mysql_query('SELECT `id`,`team` FROM `stats` WHERE `id` = "'.mysql_real_escape_string($u2).'" LIMIT 1'));
			
			//$u1['align'] = floor($u1['align']);
			
			$tm = $tm[$u1['team']];
			$no_align = array();
			if( $u1['align'] == 1 ) {
				$no_align[3] = true;
			}elseif( $u1['align'] == 3 ) {
				$no_align[1] = true;
			}
			
			$sp = mysql_query('SELECT `u`.`align`,`st`.`team` FROM `users` AS `u` LEFT JOIN `stats` AS `st` ON `st`.`id` = `u`.`id` WHERE `u`.`battle` = "'.$btl_test['id'].'" AND `st`.`team` != "'.$u2['team'].'"');
			while( $pl = mysql_fetch_array($sp) ) {
				if( $pl['align'] > 1 && $pl['align'] < 2 ) {
					//����
				}elseif( $pl['align'] > 3 && $pl['align'] < 4 ) {
					//�������
				}elseif( $no_align[floor($pl['align'])] == true ) {
					$r = false;
				}
			}
		}
		return $r;
	}
	
	//�������� ������
	public function testTravma( $uid , $vals ) {
		$r = false;		
		$tr_pl = mysql_fetch_array(mysql_query('SELECT `id`,`v1` FROM `eff_users` WHERE `id_eff` = 4 AND `uid` = "'.$uid.'" AND `delete` = "0" ORDER BY `v1` DESC LIMIT 1'));
		if( isset($tr_pl['id']) && $tr_pl['v1'] >= $vals ) {
			$r = true;
		}
		return $r;
	}
	
	//������� ��������� �� ���������
	public function atackUser($uid1, $uid2, $tm, $btl, $addExp = 0, $type = 0, $kulak = 0, $bsid = 0 , $item_id = 0) {
		global $u;
		$usr = mysql_fetch_array(mysql_query('SELECT `u`.*,`s`.* FROM `users` AS `u` LEFT JOIN `stats` AS `s` ON `u`.`id` = `s`.`id` WHERE `u`.`id` = "'.$uid2.'" LIMIT 1'));
		$btl_test = mysql_fetch_array(mysql_query('SELECT * FROM `battle` WHERE `id` = "'.$btl.'" AND `team_win` = -1 LIMIT 1'));
		$good = 0;
		//������� ��-�� ������� ������ ��������
		$efsno = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid` = "'.$uid2.'"
		AND `name` LIKE "%����� ������%" AND `delete` = "0"
		LIMIT 1'));
		$itmart = mysql_fetch_array(mysql_query('SELECT `id` FROM `items_users` WHERE `uid` = "'.$u->info['id'].'" AND `delete` = 0 AND `inOdet` > 0 AND `data` LIKE "%art=%" LIMIT 1'));
		if( $type == 199 ) {
			$drat = mysql_fetch_array(mysql_query('SELECT * FROM `dark_attack` WHERE `uid1` = "'.$uid1.'" AND `uid2` = "'.$uid2.'" AND `date` = "'.date('d.m.Y').'" LIMIT 1'));
		}
		
		if($u->info['room'] == 9 && $usr['room'] == 9) {
			$ng = mysql_fetch_array(mysql_query('SELECT `id` FROM `ng_quests` WHERE `uid` = '.$u->info['id'].' AND `etap` = 2 LIMIT 1'));
			if(isset($ng['id'])) {
				mysql_query('UPDATE `ng_quests` SET `cp` = `cp` + 1 WHERE `id` = '.$ng['id'].' LIMIT 1');
			}
		}
		
		//
		$ltm = array(1=>2, 2=>1);
		$usck = mysql_fetch_array(mysql_query('SELECT `id`,`login`,`clan` FROM `users` WHERE `clan` = "'.$u->info['clan'].'" AND `battle` = "'.$btl_test['id'].'" AND `id` IN (SELECT `id` FROM `stats` WHERE `team` != "'.$ltm[$tm].'") LIMIT 1'));
		//
		$noak = mysql_fetch_array(mysql_query('SELECT * FROM `users_noatack` WHERE `uid` = "'.$usr['id'].'" AND `time` > "'.time().'" ORDER BY `time` DESC LIMIT 1'));
		$noak2 = mysql_fetch_array(mysql_query('SELECT * FROM `users_noatack` WHERE `uid` = "'.$u->info['id'].'" AND `battle` = "'.$usr['battle'].'" LIMIT 1'));
		
		$mga1 = $u->testInbattle($usr,$btl_test);
		
		//unset($itmart);
		
		if( $usr['id'] == 129431185 ) {
			$u->error = '������ ��� ����������� ��������... (����������� ��������� 1%)';
		}elseif( $mga1 != '-1' ) {
			$u->error = $mga1;
		}elseif( isset($noak2['id']) ) {
			$u->error = '������ ������������ � ���� ���. �� ��� ��������!';
		}elseif($u->info['room'] != $usr['room']) {
			$u->error = '�� ���������� � ������ ��������...';
		}elseif( isset($noak['id']) ) {
			$u->error = '������ �������� �� ��������� ��� '.$u->timeOut($noak['time']-time()).'.';
		}elseif( $u->info['clan'] == $usr['clan'] && $usr['clan'] > 0 ) {
			$u->error = '�� �� ������ ��������� ������ <b>'.$usr['login'].'</b>. �������� �������� ����� ��������!';
		}elseif(isset($usck['id']) && isset($btl_test['id']) && $usck['clan'] > 0) {
			$u->error = '�� �� ������ ��������� ������ <b>'.$usck['login'].'</b>. �������� �������� ����� ��������!';
		}elseif(isset($drat['id']) && $u->info['admin'] == 0) {
			$u->error = '�� ��� ��������� ������ ��������� �� ����� ���������. ��������� ������... (�������� '.$u->timeOut((strtotime(date('d.m.Y'))+86400)-time()).')';
		}elseif( $btl_test['id'] > 0 && ($u->info['room'] == 9 || $u->info['room'] == 323 || $u->info['room'] == 11 || $u->info['room'] == 213) && (
				(date('w',$btl_test['time_start']) == 2 && date('H',$btl_test['time_start']) >= 20 && date('H',$btl_test['time_start']) < 23) ||
				(date('w',$btl_test['time_start']) == 3 && date('H',$btl_test['time_start']) >= 18 && date('H',$btl_test['time_start']) <= 23) ||
				(date('w',$btl_test['time_start']) == 4 && date('H',$btl_test['time_start']) >= 20 && date('H',$btl_test['time_start']) < 23) ||
				(date('w',$btl_test['time_start']) == 5 && date('H',$btl_test['time_start']) >= 20 && date('H',$btl_test['time_start']) <= 23) ||
				(date('w',$btl_test['time_start']) == 6 && date('H',$btl_test['time_start']) >= 18 && date('H',$btl_test['time_start']) <= 23)
		) && isset($itmart['id']) && true == false ) {
			$u->error = '������ �������� � ���������� �� ����� �������������� ����!!!';
		}elseif( !isset($btl_test['id']) && ($u->info['room'] == 9 || $u->info['room'] == 323 || $u->info['room'] == 11 || $u->info['room'] == 213) && (
				(date('w') == 2 && date('H') >= 20 && date('H') < 23) ||
				(date('w') == 3 && date('H') >= 18 && date('H') <= 23) ||
				(date('w') == 4 && date('H') >= 20 && date('H') < 23) ||
				(date('w') == 5 && date('H') >= 20 && date('H') <= 23) ||
				(date('w') == 6 && date('H') >= 18 && date('H') <= 23)
		) && isset($itmart['id']) && !isset($batlatest['id']) && true == false ) {
			$u->error = '������ �������� � ���������� �� ����� �������������� ����!';
		}elseif( isset($efsno['id']) && $efsno['delete'] > 0 ) {
			$u->error = '���������� �������, ��������� ���-�� �����...';
		}elseif($this->testTravma($uid2 , 2) == true) {
			$u->error = '��������� ������ �����������, ������ �������!';
		} elseif($this->testTravma($uid1 , 2) == true) {
			$u->error = '�� ������������, ������ �������!';
        } elseif($bsid != 0 && ($u->info['x'] != $usr['x'] || $u->info['y'] != $usr['y'] )) {
            $u->error = '�� ���������� � ������ ��������...';
		} elseif($usr['clan'] != 0 && ($usr['clan'] == $u->info['clan'])) {
			$u->error = '����� ����� ����� ��������.';
		} elseif($btl == 0) {
			$s01 = $u->getStats($uid1,0);
			if($s01['hpNow'] < floor($s01['hpAll']/100*33) && $usr['room'] != 363 ) {
				$u->error = '������ �������, � ���������� �� �������������� ��������';
			} else {
				$addExp += $usr['bbexp'];
				//�������� �� ���������
				$tmtout = array(
					(1 * 60) ,
					(1 * 60) ,
					(2 * 60) ,
					(2 * 60) ,
					(2 * 60) ,
					(3 * 60)
				);
				$tmtout = $tmtout[rand(0,5)];
								
				$ins = mysql_query('INSERT INTO `battle` (`kulak`,`city`,`time_start`,`players`,`timeout`,`type`,`invis`,`noinc`,`travmChance`,`typeBattle`,`addExp`,`money`, `inTurnir`) VALUES (
																		"'.$kulak.'",
																		"'.$u->info['city'].'",
																		"'.time().'",
																		"'.$u->info['login'].','.$usr['login'].'",
																		"'.$tmtout.'",
																		"'.$type.'",
																		"0",
																		"0",
																		"50",
																		"9",
																		"'.$addExp.'",
																		"0", "'.$bsid.'")');
				if($ins)
				{
					$btl_id = mysql_insert_id();
					
					if( $type == 199 ) {
						if( $item_id == 6921 ) {
							$drttime = 7;
						}else{
							$drttime = $item_id - 6842;
							if( $drttime < 1 ) {
								$drttime = 1;
							}elseif( $drttime > 5 ) {
								$drttime = 5;
							}
						}
						mysql_query('INSERT INTO `dark_attack` (`time`,`uid1`,`uid2`,`date`,`battle`) VALUES ("'.$drttime.'","'.$u->info['id'].'","'.$uid2.'","'.date('d.m.Y').'","'.$btl_id.'")');
					}
					
					//��������� �� � �� �������
					if($s01['level']<=7)
					{
						$s01['tactic7'] = floor(10/$s01['hpAll']*$s01['hpNow']);
					}elseif($s01['level']==8)
					{
						$s01['tactic7'] = floor(20/$s01['hpAll']*$s01['hpNow']);
					}elseif($s01['level']==9)
					{
						$s01['tactic7'] = floor(30/$s01['hpAll']*$s01['hpNow']);
					}elseif($s01['level']>=10)
					{
						$s01['tactic7'] = floor(40/$s01['hpAll']*$s01['hpNow']);
					}
					$s01 = array( 'hpAll' => $s01['hpAll'] , 'hpNow' => $s01['hpNow'] , 'mpAll' => $s01['mpAll'] , 'mpNow' => $s01['mpNow']  );
					$s02 = $u->getStats($uid2,0);
					if($s02['level']<=7)
					{
						$s02['tactic7'] = floor(10/$s02['hpAll']*$s02['hpNow']);
					}elseif($s02['level']==8)
					{
						$s02['tactic7'] = floor(20/$s02['hpAll']*$s02['hpNow']);
					}elseif($s02['level']==9)
					{
						$s02['tactic7'] = floor(30/$s02['hpAll']*$s02['hpNow']);
					}elseif($s02['level']>=10)
					{
						$s02['tactic7'] = floor(40/$s02['hpAll']*$s02['hpNow']);
					}
					
					if( $s01['s7'] > 49 ) {
						mysql_query('DELETE FROM `eff_users` WHERE `name` = "��������" AND `uid` = "'.$uid1.'"');
						mysql_query("
							INSERT INTO `eff_users` ( `id_eff`, `uid`, `name`, `data`, `overType`, `timeUse`, `timeAce`, `user_use`, `delete`, `v1`, `v2`, `img2`, `x`, `hod`, `bj`, `sleeptime`, `no_Ace`, `file_finish`, `tr_life_user`, `deactiveTime`, `deactiveLast`, `mark`, `bs`) VALUES
							( 22, '".$uid1."', '��������', 'add_spasenie=1', 0, 77, 0, '".$uid1."', 0, 'priem', 324, 'preservation.gif', 1, -1, '��������', 0, 0, '', 0, 0, 0, 1, 0);
						");
					}
					if( $s02['s7'] > 49 ) {
						mysql_query('DELETE FROM `eff_users` WHERE `name` = "��������" AND `uid` = "'.$uid2.'"');
						mysql_query("
							INSERT INTO `eff_users` ( `id_eff`, `uid`, `name`, `data`, `overType`, `timeUse`, `timeAce`, `user_use`, `delete`, `v1`, `v2`, `img2`, `x`, `hod`, `bj`, `sleeptime`, `no_Ace`, `file_finish`, `tr_life_user`, `deactiveTime`, `deactiveLast`, `mark`, `bs`) VALUES
							( 22, '".$uid2."', '��������', 'add_spasenie=1', 0, 77, 0, '".$uid2."', 0, 'priem', 324, 'preservation.gif', 1, -1, '��������', 0, 0, '', 0, 0, 0, 1, 0);
						");
					}
					
					$s01['tactic7'] += floor($s01['s7']/$s01['hpAll']*$s01['hpNow']);
					$s02['tactic7'] += floor($s02['s7']/$s02['hpAll']*$s02['hpNow']);
					
					$s02 = array( 'hpAll' => $s02['hpAll'] , 'hpNow' => $s02['hpNow'] , 'mpAll' => $s02['mpAll'] , 'mpNow' => $s02['mpNow']  );				
					
					
					$upd2  = mysql_query('UPDATE `users` SET `battle`="'.$btl_id.'" WHERE `id` = "'.$uid1.'" OR `id` = "'.$uid2.'" LIMIT 2');
							 mysql_query('UPDATE `stats` SET `tactic7` = "'.$s01['tactic7'].'",`hpNow` = "'.$s01['hpNow'].'",`mpNow` = "'.$s01['mpNow'].'",`team`="1",`zv` = "0" WHERE `id` = "'.$uid1.'" LIMIT 1');
							 mysql_query('UPDATE `stats` SET `tactic7` = "'.$s02['tactic7'].'",`hpNow` = "'.$s02['hpNow'].'",`mpNow` = "'.$s02['mpNow'].'",`team`="2",`zv` = "0" WHERE `id` = "'.$uid2.'" LIMIT 1');
					
					if( $kulak > 0 ) {
						mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inOdet` = "0" WHERE ( `uid` = "'.$uid1.'" OR `uid` = "'.$uid2.'" ) AND `delete` = "0"');
					}
					$good = $btl_id;
                    if($bsid != 0) {
                        $bs = mysql_fetch_array(mysql_query('SELECT * FROM `bs_turnirs` WHERE `id` = "'.$u->info['inTurnir'].'" LIMIT 1'));
                      if($u->info['sex'] == 0) {
                        $text = '<img src="http://img.likebk.com/i/items/atackk.gif" /> {u1} ����� �� {u2} ��������� ��� <a target=_blank href=/logs.php?log='.$btl_id.' >��</a>';
	                  } else {
	                    $text = '<img src="http://img.likebk.com/i/items/atackk.gif" /> {u1} ������ �� {u2} ��������� ��� <a target=_blank href=/logs.php?log='.$btl_id.' >��</a>';
	                  }
                      $usr_real = mysql_fetch_array(mysql_query('SELECT `id`, `login`, `align`, `clan`, `battle`, `level` FROM `users` WHERE (`inUser` = "'.$usr['id'].'" OR `id` = "'.$usr['id'].'") LIMIT 1'));
                      if(!isset($usr_real['id'])) { $usr_real = $usr; }
                      if(isset($usr_real['id'])) {
                        $usrreal = '';
                        if($usr_real['align'] > 0) { $usrreal .= '<img src=http://img.likebk.com/i/align/align'.$usr_real['align'].'.gif width=12 height=15 >'; }
                        if($usr_real['clan'] > 0) { $usrreal .= '<img src=http://img.likebk.com/i/clan/'.$usr_real['clan'].'.gif width=24 height=15 >'; }
                        $usrreal .= '<b>'.$usr_real['login'].'</b>['.$usr_real['level'].']<a target=_blank href=/inf.php?'.$usr_real['id'].' ><img width=12 hiehgt=11 src=http://img.likebk.com/i/inf_capitalcity.gif ></a>';
                      } else {
                        $usrreal = '<i>���������</i>[??]';
                      }
                      $me_real = mysql_fetch_array(mysql_query('SELECT `id`,`login`,`align`,`clan`,`battle`,`level` FROM `users` WHERE `inUser` = "'.$u->info['id'].'" AND `login` = "'.$u->info['login'].'" LIMIT 1'));
                      if(isset($me_real['id'])) {
					    $mereal = '';
					    if($me_real['align'] > 0) { $mereal .= '<img src=http://img.likebk.com/i/align/align'.$me_real['align'].'.gif width=12 height=15 >'; }
					    if($me_real['clan'] > 0) { $mereal .= '<img src=http://img.likebk.com/i/clan/'.$me_real['clan'].'.gif width=24 height=15 >'; }
					    $mereal .= '<b>'.$me_real['login'].'</b>['.$me_real['level'].']<a target=_blank href=/inf.php?'.$me_real['id'].' ><img width=12 hiehgt=11 src=http://img.likebk.com/i/inf_capitalcity.gif ></a>';
				      } else {
					    $mereal = '<i>���������</i>[??]';
				      }
                      $text = str_replace('{u1}', $mereal, $text);
				      $text = str_replace('{u2}', $usrreal, $text);
                      mysql_query('INSERT INTO `bs_logs` (`type`,`text`,`time`,`id_bs`,`count_bs`,`city`,`m`,`u`) VALUES (
					  "1", "'.mysql_real_escape_string($text).'", "'.time().'", "'.$bs['id'].'", "'.$bs['count'].'", "'.$bs['city'].'",
					  "'.round($bs['money']*0.85,2).'","'.$i.'")');
				      unset($text, $usrreal, $mereal, $usr_real, $me_real);
                    }
				}
			}
		}elseif($u->info['inTurnirnew']>0){
			$u->error = '�� �� ������ ���������, �� ���������� � �������!';
		}elseif($usr['inTurnirnew']>0){
			$u->error = '�� �� ������ ��������� � ���� ����������, �� ��������� � �������!';
		}elseif($usr['inUser']>0){
			$u->error = '�� �� ������ ��������� � ���� ����������, �� ��������� � �������!';
		}elseif( isset($btl_test['id']) && $btl_test['type'] == 500 && $usr['team'] == 1 ){
			$u->error = '������ ��������� �� ������� ��������!';
		}elseif($u->info['twink'] == 0 && ($btl_test['twink'] > 0)) {
			$u->error = '� ���� �������� ����� ��������� ������ ������';
		}elseif( isset($btl_test['id']) && $btl_test['invis'] > 0 ){
			$u->error = '������ ����������� � ��������� ���!';
		}elseif( $this->testAlignAtack( $uid1, $uid2, $btl_test) == false ) {
			$u->error = '������ �������� ��������� �����������!';
		//}elseif( $btl_test['noinc'] > 0 ) {
		}elseif( $btl_test['noatack'] > 0 ) {
			$u->error = '� ���� �������� ������ �����������! �� ���������� �� �������� ����!';
		}elseif( isset($noak2['id']) ) {
			$u->error = '������ ������������ � ���� ���. �� ��� ��������!';
		}else{
			//����������� � ���
			$upd = mysql_query('UPDATE `users` SET `battle`="'.$btl.'" WHERE `id` = "'.$uid1.'" LIMIT 1');
			if($upd)
			{
				
				if( $kulak > 0 /*|| $btl_test['kulak'] > 0*/ ) {
					mysql_query('UPDATE `items_users` SET `lastUPD`="'.time().'", `inOdet` = "0" WHERE `uid` = "'.$uid1.'" AND `delete` = "0"');
				}
				
				$uid1st = $u->getStats($uid1);
				$uid1u = mysql_fetch_array(mysql_query('SELECT `id`,`login`,`level`,`clan`,`align`,`sex` FROM `users` WHERE `id` = "'.$uid1.'" LIMIT 1'));
				
				if($uid1u['level']<=7)
				{
					$uid1st['tactic7'] = floor(10/$uid1st['hpAll']*$uid1st['hpNow']);
				}elseif($uid1u['level']==8)
				{
					$uid1st['tactic7'] = floor(20/$uid1st['hpAll']*$uid1st['hpNow']);
				}elseif($uid1u['level']==9)
				{
					$uid1st['tactic7'] = floor(30/$uid1st['hpAll']*$uid1st['hpNow']);
				}elseif($uid1u['level']>=10)
				{
					$uid1st['tactic7'] = floor(40/$uid1st['hpAll']*$uid1st['hpNow']);
				}else{
					$uid1st['tactic7'] = floor(10/$uid1st['hpAll']*$uid1st['hpNow']);
				}
				
				$uid1st['tactic7'] += floor($uid1st['s7']/$uid1st['hpAll']*$uid1st['hpNow']);
				
				if( $uid1st['s7'] > 49 ) {
					mysql_query('DELETE FROM `eff_users` WHERE `name` = "��������" AND `uid` = "'.$uid1.'"');
					mysql_query("
						INSERT INTO `eff_users` ( `id_eff`, `uid`, `name`, `data`, `overType`, `timeUse`, `timeAce`, `user_use`, `delete`, `v1`, `v2`, `img2`, `x`, `hod`, `bj`, `sleeptime`, `no_Ace`, `file_finish`, `tr_life_user`, `deactiveTime`, `deactiveLast`, `mark`, `bs`) VALUES
						( 22, '".$uid1."', '��������', 'add_spasenie=1', 0, 77, 0, '".$uid1."', 0, 'priem', 324, 'preservation.gif', 1, -1, '��������', 0, 0, '', 0, 0, 0, 1, 0);
					");
				}
				
				$btxt = '';
				if( $uid1u['align'] > 0 ) {
					$btxt = $btxt.'<img width=12 height=15 src=http://img.likebk.com/i/align/align'.$uid1u['align'].'.gif >';
				}
				if( $uid1u['clan'] > 0 ) {
					$btxt = $btxt.'<img width=24 height=15 src=http://img.likebk.com/i/clan/'.$uid1u['clan'].'.gif >';
				}
				$btxt = $btxt.'<b>{u1}</b>['.$uid1u['level'].']<a href=inf.php?'.$uid1u['id'].' target=_blank ><img width=12 height=11 src=http://img.likebk.com/i/inf_capitalcity.gif ></a>';
				if( $uid1u['sex'] == 1 ) {
					$btxt = $btxt.' ��������� � ��������.';
				}else{
					$btxt = $btxt.' �������� � ��������.';
				}
				
				if( $kulak > 0 ) {
					$btxt .= ' (�������� ���������)';
				}
				
				$lastHOD = mysql_fetch_array(mysql_query('SELECT * FROM `battle_logs` WHERE `battle` = "'.$btl.'" ORDER BY `id_hod` DESC LIMIT 1'));
				if(isset($lastHOD['id'])) {
					$id_hod = $lastHOD['id_hod'];
					if($lastHOD['type']!=6) {
						$id_hod++;
					}
					mysql_query('INSERT INTO `battle_logs` (`time`,`battle`,`id_hod`,`text`,`vars`,`zona1`,`zonb1`,`zona2`,`zonb2`,`type`) VALUES ("'.time().'","'.$btl.'","'.($id_hod).'","{tm1} '.$btxt.'","login1='.$uid1st['login'].'||t1='.$uid1st['team'].'||login2='.$uid1st['login'].'||t2='.$uid1st['team'].'||time1='.time().'","","","","","6")');
				}
				
				// ���� ����� animal_bonus ---------------------------------
						if($u->info['animal'] > 0) {
							$a = mysql_fetch_array(mysql_query('SELECT * FROM `users_animal` WHERE `uid` = "'.$u->info['id'].'" AND `id` = "'.$u->info['animal'].'" AND `pet_in_cage` = "0" AND `delete` = "0" LIMIT 1'));
							if(isset($a['id'])) {
								if($a['eda']>=1) {
									$anl = mysql_fetch_array(mysql_query('SELECT `bonus` FROM `levels_animal` WHERE `type` = "'.$a['type'].'" AND `level` = "'.$a['level'].'" LIMIT 1'));
									$anl = $anl['bonus'];
									
									$tpa = array(1=>'cat',2=>'owl',3=>'wisp',4=>'demon',5=>'dog',6=>'pig',7=>'dragon');
									$tpa2 = array(1=>'����',2=>'����',3=>'��������',4=>'�������',5=>'���',6=>'�����',7=>'�������');
									$tpa3 = array(1=>'������� ��������',2=>'�������� ����',3=>'���� ������',4=>'������������ ����',5=>'����',6=>'������ �����',7=>'�������');
																		
									mysql_query('INSERT INTO `eff_users` (`hod`,`v2`,`img2`,`id_eff`,`uid`,`name`,`data`,`overType`,`timeUse`,`v1`,`user_use`) VALUES ("-1","201","summon_pet_'.$tpa[$a['type']].'.gif",22,"'.$u->info['id'].'","'.$tpa3[$a['type']].' ['.$a['level'].']","'.$anl.'","0","77","priem","'.$u->info['id'].'")');
									
									if( $tpa[$a['type']] == 'dog' ) {
										$anlhp = str_replace('add_hpAll=','',$anl);
										$anlhp = (int)$anlhp;
										mysql_query('UPDATE `stats` SET `hpNow` = `hpNow` + "'.$anlhp.'" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
										$u->info['hpNow'] += $anlhp;
										$u->stats['hpNow'] += $anlhp;
									}
									
									/*$anl = $u->lookStats($anl);
									
									$vLog = 'time1='.time().'||s1='.$u->info['sex'].'||t1='.$u->info['team'].'||login1='.$u->info['login'].'';
									$vLog .= '||s2=1||t2='.$u->info['team'].'||login2='.$a['name'].' (����� '.$u->info['login'].')';
									
									$mas1 = array('time'=>time(),'battle'=>$btl,'id_hod'=>1,'text'=>'','vars'=>$vLog,'zona1'=>'','zonb1'=>'','zona2'=>'','zonb2'=>'','type'=>'1');
									
									$ba = '';
									$i6 = 0;
									while($i6<count($u->items['add'])) {
										if(isset($anl['add_'.$u->items['add'][$i6]])) {
											if($anl['add_'.$u->items['add'][$i6]] > 0) {
												$ba .= $u->is[$u->items['add'][$i6]].': +'.$anl['add_'.$u->items['add'][$i6]].', ';
											}
										}
										$i6++;
									}
									$ba = trim($ba,', ');
									if($ba == '') {
										$ba = '������ ����������';
									}
									*/
									//$mas1['text'] = '{tm1} {u2} ������� �� ���������, � ������� �������� &quot;<b>'.$tpa3[$a['type']].' ['.$a['level'].']</b>&quot; �� {u1}. ('.$ba.')';
									//$nxtlg[count($nxtlg)] = $mas1;
									//mysql_query('UPDATE `users_animal` SET `eda` = `eda` - 1 WHERE `id` = "'.$a['id'].'" LIMIT 1');
									//$btl->add_log($mas1);
									//$btl->get_comment();*/
								}else{
									$u->send('',$u->info['room'],$u->info['city'],'',$u->info['login'],'<b>'.$a['name'].'</b> ��������� � ���...',time(),6,0,0,0,1);
								}
							}
						}
				// ���� ����� animal_bonus ---------------------------------
				$ltm = array(1=>2, 2=>1);
				mysql_query('UPDATE `stats` SET `hpNow` = "'.$uid1st['hpNow'].'",`mpNow` = "'.$uid1st['mpNow'].'",`team`="'.$ltm[$tm].'",`tactic7`="'.(0+$uid1st['tactic7']).'" WHERE `id` = "'.$uid1.'" LIMIT 1');
				$good = $btl;
				unset($uid1st);
                if($bsid != 0) {
                    $bs = mysql_fetch_array(mysql_query('SELECT * FROM `bs_turnirs` WHERE `id` = "'.$u->info['inTurnir'].'" LIMIT 1'));
                      if($u->info['sex'] == 0) {
                        $text = '<img src="http://img.likebk.com/i/items/atackk.gif" /> {u1} �������� � �������� ������ {u2} <a target=_blank href=/logs.php?log='.$btl_id.' >��</a>';
	                  } else {
	                    $text = '<img src="http://img.likebk.com/i/items/atackk.gif" /> {u1} ��������� � �������� ������ {u2} <a target=_blank href=/logs.php?log='.$btl_id.' >��</a>';
	                  }
                      $usr_real = mysql_fetch_array(mysql_query('SELECT `id`, `login`, `align`, `clan`, `battle`, `level` FROM `users` WHERE `inUser` = "'.$usr['id'].'" LIMIT 1'));
                      if(!isset($usr_real['id'])) { $usr_real = $usr; }
                      if(isset($usr_real['id'])) {
                        $usrreal = '';
                        if($usr_real['align'] > 0) { $usrreal .= '<img src=http://img.likebk.com/i/align/align'.$usr_real['align'].'.gif width=12 height=15 >'; }
                        if($usr_real['clan'] > 0) { $usrreal .= '<img src=http://img.likebk.com/i/clan/'.$usr_real['clan'].'.gif width=24 height=15 >'; }
                        $usrreal .= '<b>'.$usr_real['login'].'</b>['.$usr_real['level'].']<a target=_blank href=/inf.php?'.$usr_real['id'].' ><img width=12 hiehgt=11 src=http://img.likebk.com/i/inf_capitalcity.gif ></a>';
                      } else {
                        $mereal = '<i>���������</i>[??]';
                      }
                      $me_real = mysql_fetch_array(mysql_query('SELECT `id`,`login`,`align`,`clan`,`battle`,`level` FROM `users` WHERE `inUser` = "'.$u->info['id'].'" AND `login` = "'.$u->info['login'].'" LIMIT 1'));
                      if(isset($me_real['id'])) {
					    $mereal = '';
					    if($me_real['align'] > 0) { $mereal .= '<img src=http://img.likebk.com/i/align/align'.$me_real['align'].'.gif width=12 height=15 >'; }
					    if($me_real['clan'] > 0) { $mereal .= '<img src=http://img.likebk.com/i/clan/'.$me_real['clan'].'.gif width=24 height=15 >'; }
					    $mereal .= '<b>'.$me_real['login'].'</b>['.$me_real['level'].']<a target=_blank href=/inf.php?'.$me_real['id'].' ><img width=12 hiehgt=11 src=http://img.likebk.com/i/inf_capitalcity.gif ></a>';
				      } else {
					    $mereal = '<i>���������</i>[??]';
				      }
                      $text = str_replace('{u1}', $mereal, $text);
				      $text = str_replace('{u2}', $usrreal, $text);
                      mysql_query('INSERT INTO `bs_logs` (`type`,`text`,`time`,`id_bs`,`count_bs`,`city`,`m`,`u`) VALUES (
					  "1", "'.mysql_real_escape_string($text).'", "'.time().'", "'.$bs['id'].'", "'.$bs['count'].'", "'.$bs['city'].'",
					  "'.round($bs['money']*0.85,2).'","'.$i.'")');
				      unset($text,$usrreal,$mereal,$usr_real,$me_real);
                    }
			}
		}
		return $good;
	}
	
	//��������� �� ����������� �������
 public function magicCentralAttack() {
   global $c, $code, $u, $re;
 }
}

$magic = new Magic;

?>