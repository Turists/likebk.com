<?
if(!defined('GAME'))
{
	die();
}

$re = '';
if(isset($u->error2))
{
	$re = $u->error2;
}

if( isset($_GET['nightatack'])) {
	//if( date('H') >= 22 || date('H') < 6 ) {
		if( 
			$u->room['name'] == '����������� �������' ||
			$u->room['name'] == '����������� �����' ||
			$u->room['name'] == '�������� �������' ||
			$u->room['name'] == '��������� �������'
		) {
			
			if($u->room['noatack'] == 0) {
							
				$ua = mysql_fetch_array(mysql_query('SELECT `s`.*,`u`.* FROM `stats` AS `s` LEFT JOIN `users` AS `u` ON `s`.`id` = `u`.`id` WHERE `u`.`login` = "'.mysql_real_escape_string($_GET['login']).'" LIMIT 1'));
				
				/*if( $ua['battle'] == 0 && $ua['align'] > 1 && $ua['align'] < 2 ) {
					$u->error = '�������� �� &quot;�����������&quot; ���������!';
				}else*/
				if(isset($ua['id']) && $ua['online'] > time()-520) {
					$usta = $u->getStats($ua['id'],0);
					$minHp = floor($usta['hpAll']/100*33);
			
					if($ua['battle'] > 0 ) {
						$uabt = mysql_fetch_array(mysql_query('SELECT `id`,`time_start` FROM `battle` WHERE `id` = "'.$ua['battle'].'" AND `team_win` = "-1" LIMIT 1'));
						if(!isset($uabt['id'])) {
							$ua['battle'] = 0;
						}
					}
			
					$itmart = mysql_fetch_array(mysql_query('SELECT `id` FROM `items_users` WHERE `uid` = "'.$u->info['id'].'" AND `delete` = 0 AND `inOdet` > 0 AND `data` LIKE "%art=%" LIMIT 1'));
					//unset($itmart);
					$testb = $u->testInbattle($ua,$uabt);
					
					
					if( $testb != '-1' ) {
						$re = $testb;
					}elseif( $u->testClanBattle($u->info['id'],$ua['id']) == true ) {
						$re = '������ ����������� � �������� �����!';
					}elseif( $u->info['level'] - 2 > $ua['level'] ) {
						$re = '�������� ������� ���� ��� ���, ��������� ������ ���������';
					}elseif( $usta['hpNow'] < $minHp ) {
						$re = '�������� ������� ���� ����� ���������...';
					}elseif( ($u->info['room'] == 9 || $u->info['room'] == 323 || $u->info['room'] == 11 || $u->info['room'] == 213) && (
						(date('w') == 2 && date('H') >= 20 && date('H') < 23) ||
						(date('w') == 3 && date('H') >= 18 && date('H') <= 23) ||
						(date('w') == 4 && date('H') >= 20 && date('H') < 23) ||
						(date('w') == 5 && date('H') >= 20 && date('H') <= 23) ||
						(date('w') == 6 && date('H') >= 18 && date('H') <= 23)
					) && isset($itmart['id']) && !isset($ua['id']) && true == false ) {
						echo '������ �������� � ���������� �� ����� �������������� ����!';
					}elseif( ($u->info['room'] == 9 || $u->info['room'] == 323 || $u->info['room'] == 11 || $u->info['room'] == 213) && (
						(date('w',$uabt['time_start']) == 2 && date('H',$uabt['time_start']) >= 20 && date('H',$uabt['time_start']) < 23) ||
						(date('w',$uabt['time_start']) == 3 && date('H',$uabt['time_start']) >= 18 && date('H',$uabt['time_start']) <= 23) ||
						(date('w',$uabt['time_start']) == 4 && date('H',$uabt['time_start']) >= 20 && date('H',$uabt['time_start']) < 23) ||
						(date('w',$uabt['time_start']) == 5 && date('H',$uabt['time_start']) >= 20 && date('H',$uabt['time_start']) <= 23) ||
						(date('w',$uabt['time_start']) == 6 && date('H',$uabt['time_start']) >= 18 && date('H',$uabt['time_start']) <= 23)
					) && isset($itmart['id']) && isset($uabt['id']) && true == false ) {
						echo '������ �������� � ���������� �� ����� �������������� ����!';
					}elseif( $ua['level'] < 2 ) {
						$re = '�������� �� �������� �����������! ������ ������ ����������� � ��������� ���� � �������...';
                    } elseif($ua['id'] == $u->info['id']) {
                        $re = '�� ���� �������� ������...';
					}elseif($ua['room']==$u->info['room'] && ($minHp <= $usta['hpNow'] || $ua['battle'] > 0))
					{
						if( $ua['type_pers'] == 0 ) {
							if( $cruw == 2 ) {
								$ua['type_pers'] = 99;
							}else{
								$ua['type_pers'] = 50;
							}
						}
						if( $ua['no_ip'] == 'trupojor' ) {
							$ua['type_pers'] = 500;
						}
						$u->error = '';
						$magic->atackUser($u->info['id'],$ua['id'],$ua['team'],$ua['battle'],$ua['bbexp'],$ua['type_pers']);
						if( $u->error != '' ) {
							
						}else{
							if( $cruw == 2 ) {
								$rtxt = '[img[items/pal_button9.gif]] &quot;'.$u->info['login'].'&quot; ��������'.$sx.' �������� ��������� �� ��������� &quot;'.$ua['login'].'&quot;.';
							}else{
								$rtxt = '[img[items/pal_button8.gif]] &quot;'.$u->info['login'].'&quot; ��������'.$sx.' ��������� �� ��������� &quot;'.$ua['login'].'&quot;.';
							}
							mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");		
							
							header('location: main.php');
							die();
						}
					}else{
						if($ua['room'] != $u->info['room']){
							$u->error = '�������� ��������� � ������ �������';
						}else{
							$u->error = '�������� ����� ������� ����� ������� ������.';
						}
					}
				}else{
					//�� ��������� ������ �������
					$u->error = '�������� �� � ����, ���� �� ��� ��� �����';
				}
			}
			//$u->error = '��� ����������� ��������� ��� ����������...';
			//$re = $u->error;
			
		}else{
			$re = '�������� �������� ������ �� �����...';
		}
	//}else{
	//	$re = '��������� �������� ������ �����...';
	//}
}

function thisInfRm($id,$tp = NULL, $json = false){
	global $u;
	$rm = mysql_fetch_array(mysql_query('SELECT * FROM `room` WHERE `code` = "'.mysql_real_escape_string($id).'" AND `city` = "'.$u->info['city'].'" LIMIT 1'));
	$inf = '������ ���� ���������';
	if(isset($rm['id'])){
		$rown = mysql_fetch_array(mysql_query('SELECT COUNT(`id`) FROM `users` WHERE `online` > '.(time()-120).' AND `city` = "'.$u->info['city'].'" AND `room` = "'.$rm['id'].'"'));
		if($tp==NULL){
			$inf = '<b>'.$rm['name'].'</b><br>������ � ������� '.(0+$rown[0]).' ���.';
		}else{
			$inf = $rm['name']."\n������ � ������� ".(0+$rown[0]).' ���.';
		}
		if($json == true)
			return array($rm['code'], iconv("WINDOWS-1251", "UTF-8", $rm['name']), (0+$rown[0]));
	}
	if($json == true)
			return array('false', iconv("WINDOWS-1251", "UTF-8", $inf), (0+$rown[0]));
	if($tp==NULL){
		if($rm['name'] == '�����'){
			if($u->info['level'] > 7){
				echo 'onMouseOver="top.hi(this,\'<div align=right>'.$inf.'</div>\',event,0,1,1,1,\'max-height:240px\');" onMouseOut="top.hic();" onMouseDown="top.hic();" onClick="goLocal(\'main.php?loc='.$rm['code'].'\',\''.$rm['name'].'\');"';
			}
			else{
				echo 'onClick="errortxt();" onMouseOver="top.hi(this,\'<div align=right>'.$inf.'</div>\',event,0,1,1,1,\'max-height:240px\');" onMouseOut="top.hic();" onMouseDown="top.hic();"';
			}
		}
		else{
			echo 'onMouseOver="top.hi(this,\'<div align=right>'.$inf.'</div>\',event,0,1,1,1,\'max-height:240px\');" onMouseOut="top.hic();" onMouseDown="top.hic();" onClick="goLocal(\'main.php?loc='.$rm['code'].'\',\''.$rm['name'].'\');"';
		}
	}else{
		echo $inf;
	}
}
function thisInfRm_cp($img_b, $img, $id,$tp = NULL, $json = false){
	global $u;
	$rm = mysql_fetch_array(mysql_query('SELECT * FROM `room` WHERE `code` = "'.mysql_real_escape_string($id).'" AND `city` = "'.$u->info['city'].'" LIMIT 1'));
	$inf = '������ ���� ���������';
	if(isset($rm['id'])){
		$rown = mysql_fetch_array(mysql_query('SELECT COUNT(`id`) FROM `users` WHERE `online` > '.(time()-120).' AND `city` = "'.$u->info['city'].'" AND `room` = "'.$rm['id'].'"'));
		if($tp==NULL){
			$inf = '<b>'.$rm['name'].'</b><br>������ � ������� '.(0+$rown[0]).' ���.';
		}else{
			$inf = $rm['name']."\n������ � ������� ".(0+$rown[0]).' ���.';
		}
		if($json == true)
			return array($rm['code'], iconv("WINDOWS-1251", "UTF-8", $rm['name']), (0+$rown[0]));
	}
	if($json == true)
			return array('false', iconv("WINDOWS-1251", "UTF-8", $inf), (0+$rown[0]));
	if($tp==NULL){
		if($rm['name'] == '�����'){
			if($u->info['level'] > 7){
				echo 'onMouseOver="this.src=\'http://img.likebk.com/loca/cpnews/'.$img_b.'\';top.hi(this,\'<div align=right>'.$inf.'</div>\',event,0,1,1,1,\'max-height:240px\');" onMouseOut="this.src=\'http://img.likebk.com/loca/cpnews/'.$img.'\';top.hic();" onMouseDown="top.hic();" onClick="goLocal(\'main.php?loc='.$rm['code'].'\',\''.$rm['name'].'\');"';
			}
			else{
				echo 'onClick="errortxt();" onMouseOver="top.hi(this,\'<div align=right>'.$inf.'</div>\',event,0,1,1,1,\'max-height:240px\');" onMouseOut="top.hic();" onMouseDown="top.hic();"';
			}
		}
		else{
			if( $img_b != false ) {
				echo 'onMouseOver="this.src=\'http://img.likebk.com/loca/cpnews/'.$img_b.'\';top.hi(this,\'<div align=right>'.$inf.'</div>\',event,0,1,1,1,\'max-height:240px\');" onMouseOut="this.src=\'http://img.likebk.com/loca/cpnews/'.$img.'\';top.hic();" onMouseDown="top.hic();" onClick="goLocal(\'main.php?loc='.$rm['code'].'\',\''.$rm['name'].'\');"';
			}else{
				echo 'onMouseOver="top.hi(this,\'<div align=right>'.$inf.'</div>\',event,0,1,1,1,\'max-height:240px\');" onMouseOut="top.hic();" onMouseDown="top.hic();" onClick="goLocal(\'main.php?loc='.$rm['code'].'\',\''.$rm['name'].'\');"';
			}
		}
	}else{
		echo $inf;
	}
}

if(isset($_GET['loc']))
{
	$go = mysql_fetch_array(mysql_query('SELECT * FROM `room` WHERE `code` = "'.mysql_real_escape_string($_GET['loc']).'" AND `city` = "'.$u->info['city'].'" LIMIT 1'));
							if($u->info['id']=='340379' or $u->info['id']=='399105'){
							//print_r($u->info);
							}
	$tr_pl = mysql_fetch_array(mysql_query('SELECT `id`,`v1` FROM `eff_users` WHERE `id_eff` = 4 AND `uid` = "'.$u->info['id'].'" AND `delete` = "0" ORDER BY `v1` DESC LIMIT 1'));
	
	if( $u->room['block_all'] == 0 && isset($tr_pl['id']) ) {
		//��������� �������
		$kos1 = mysql_fetch_array(mysql_query('SELECT `id`,`item_id` FROM `items_users` WHERE `inOdet` = 3 AND `uid` = "'.$u->info['id'].'" AND `delete` = 0 LIMIT 1'));
		$kos2 = mysql_fetch_array(mysql_query('SELECT `id`,`item_id` FROM `items_users` WHERE `inOdet` = 14 AND `uid` = "'.$u->info['id'].'" AND `delete` = 0 LIMIT 1'));
		
		$zadej = 0;
				
		if( $kos1['item_id'] == 630 || $kos1['item_id'] == 631 ) {
			$kos1['good'] = 1;
		}else{
			$kos1['good'] = 0;
		}
		if( $kos2['item_id'] == 630 || $kos2['item_id'] == 631 ) {
			$kos2['good'] = 1;
		}else{
			$kos2['good'] = 0;
		}
		if( $tr_pl['v1'] == 1 ) {
			//��� ��
		}elseif( $tr_pl['v1'] == 2 ) {
			if( $kos1['good'] == 0 && $kos2['good'] == 0 ) {
				$re = '�� �������������. �� �������� � ������ �������� ������������ ��� ��������.';
				$zadej = -1;
			}else{
				$zadej = 20;
			}
		}elseif( $tr_pl['v1'] == 3 ) {
			if( $kos1['good'] == 0 || $kos2['good'] == 0 ) {
				$re = '�� �������������. �� �������� � ������ �������� ������������ ��� ��������.';
				$zadej = -1;
			}else{
				$zadej = 30;
			}
		}
	}
	$sleep = $u->testAction('`vars` = "sleep" AND `uid` = "'.$u->info['id'].'" LIMIT 1', 1);

	if( isset($sleep['id']) ) {
		$re = '������������� �� ����� ��� ���������!';
	}elseif( $u->room['extdlg'] > 0 ) {
		header('location: main.php?talk='.$u->room['extdlg'].'');
	}elseif( isset($zadej) && $zadej == -1 ) {
		if( !isset($re) || $re == '' ) {
			$re = '� ��� ������, ������ ������������...';
		}
		//������...
	}elseif($u->info['align'] == 2 && $go['nochaos'] == 1) {
		$re = '������ ��� ��������� ������!';
	}elseif($u->info['inTurnir'] > 0 && true == false)
	{
		$re = '�� �� ������ ������������, �� ������� ������ �� ������ ...';
	}elseif( $u->room['block_all'] == 0 && $u->info['admin'] == 0 && (!isset($zadej) || $zadej == 0) && $u->aves['now']>=$u->aves['max'] && $u->room['name']!='���������' && $u->room['name']!='���. ���� 1' && $u->room['name']!='���. ���� 2' && $u->room['name']!='���. ���� 3')
	{
		$re = '�� �� ������ ������������, ������ ���������� ...';
	}elseif($u->room['name']=='������� ��� ��������' && $u->info['activ'] != '' && $u->info['activ'] != '0')
	{
		echo '<script>alert("��� ���� ����� ������� � ����� �� ������ ������������ ��������� ����� ��� E-mail.");</script>';
	}elseif(isset($go['id']))
	{
		$rmgo = array();
		$rg = explode(',',$u->room['roomGo']);
		$mlvl = explode('-',$go['level']);
		$i = 0;
		while($i<count($rg))
		{
			if($rg[$i]>=0)
			{
				$rmgo[$rg[$i]] = 1;	
		
			}
			$i++;
		}
		$sleep = $u->testAction('`vars` = "sleep" AND `uid` = "'.$u->info['id'].'" LIMIT 1',1);
		if(isset($sleep['id']) && $sleep['vars']=='sleep' && $go['name'] != '���. ���� 1' && $go['name'] != '���. ���� 2' && $go['name'] != '���. ���� 3')
		{
			$re = '<font color=red><b>�� ������ ������������ ������ ����� �����������.</b></font>';
			echo '&nbsp;'.$re;
		}elseif($u->info['timeGo']>=time())
		{
			$re = '�� �� ������ ������������ ��� '.($u->info['timeGo']-time()).' ���.';
		}elseif($rmgo[$go['id']]==1 || $u->info['admin']>0)
		{
			$alg = explode('-',$go['align']);
			if( $u->info['dn'] > 0 && true == false ) {
				$re = '�� ������ ������ � ������!';
			}elseif( $u->info['inTurnirnew'] > 0 && true == false ) {
				$re = '�� ���������� � �������!';
			}elseif(($alg[0] > $u->info['align'] || $alg[1] < $u->info['align']) && $go['align']!=0 && $u->info['admin'] == 0)
			{
				$re = '�� �� ������ ������� � ��� �������';
			}elseif($u->info['zv']>0)
			{
				$re = '������ ������ � �������?.. �� ������!';
			}elseif((($go['clan'] > 0 && $u->info['clan'] != $go['clan']) || ($go['clan'] == -1 && $u->info['clan'] == 0)) && $u->info['admin'] == 0)
			{
				$re = '�� �� ������ ������� � ��� �������';
			}elseif($go['sex']>0 && $go['sex']-1!=$u->info['sex'] && $u->info['invis'] != 1 && $u->info['invis'] < time() && $u->info['admin'] == 0)
			{
				$re = '�� �� ������ ������� � ��� �������';
			}elseif($mlvl[0]>$u->info['level'] && $u->info['admin']==0)
			{
				$re = '�� �� ������ ������� � ��� �������, ������� ������� ;)';
			}elseif(($u->info['twink'] > 0) && ($go['id'] == 13 || $go['id'] == 226 || $go['id'] == 321 || $go['id'] == 272)) {
				$re = '������� ���� ��������! ������������� �� ��������� ���������';
			}elseif($u->info['twink'] == 0 && $go['id'] == 428) {
				$re = '���� �������� ������ �������';
			}elseif($mlvl[1]<$u->info['level'] && $u->info['admin']==0)
			{
				$re = '�� �� ������ ������� � ��� �������, ������� ��������� ;)';
			}elseif($go['close']==0 || $u->info['admin']>0)
			{
			$travms = mysql_fetch_array(mysql_query('SELECT * FROM `eff_users` WHERE `uid` = "'.$u->info['id'].'" and (`v1`="2" or `v1`="3") and `delete`=0 ORDER by v1 DESC'));
                
				//���������� ����������� ��� �������
				$plus_timeGo = 0 + $zadej; // ���������� ����� ��� ������
				if( $plus_timeGo < 0 ) {
					$plus_timeGo = 0;
				}
				$tr_nogo=false; // ���� ���������� ����������� �� ������
				//end freez time go
				
				if($tr_nogo == false){
					$u->info['timeGo'] = time()+$go['timeGO']+$plus_timeGo;
					$u->info['timeGoL'] = time();
					$upd = mysql_query('UPDATE `stats` SET `timeGo` = "'.$u->info['timeGo'].'",`timeGoL` = "'.$u->info['timeGoL'].'" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
				}
				if($upd)
				{				
					$upd2 = mysql_query('UPDATE `users` SET `room` = "'.$go['id'].'",`online` = "'.time().'" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
					if($upd2)
					{
						
						/*if( $u->room['file'] == 'bsenter' && $go['file'] != 'bsenter' ) {
							//������� ��� ������ � ��
							$sp_bs = mysql_query('SELECT `id`,`bsid`,`money` FROM `bs_zv` WHERE `uid` = "'.$u->info['id'].'" AND `inBot` = "0" AND `finish` = "0"');
							while( $pl_bs = mysql_fetch_array($sp_bs) ) {
								mysql_query('UPDATE `bs_turnirs` SET `users` = `users` - 1 WHERE `id` = "'.$pl_bs['bsid'].'" LIMIT 1');
							}
							unset($sp_bs,$pl_bs);
							mysql_query('UPDATE `bs_zv` SET `finish` = "'.time().'" WHERE `uid` = "'.$u->info['id'].'" AND `inBot` = "0" AND `finish` = "0"');
						}*/
						
						$smt = $u->testAction('`uid` = "'.$u->info['id'].'" AND `time`>='.(time()-600).' AND `vars` = "create_snowball_cp" LIMIT 1',1);
						if(isset($smt['id']))
						{
							mysql_query('DELETE FROM `actions` WHERE `id` = "'.$smt['id'].'" LIMIT 1');
						}
						mysql_query('UPDATE `eff_users` SET `delete` = "'.time().'" WHERE `id_eff` = "24" AND `uid` = "'.$u->info['id'].'" AND `delete` = "0" LIMIT 24');
						
						$u->info['room'] = $go['id'];
						$u->room = $go;
							
						/*
						if(!isset($socketio)) {
							include_once ('socket.io.php');
							$socketio = new SocketIO();
						}
						$socketio->send('localhost', 8081, 'message', 'reflesh-chat-'.time());
						*/	
											
						if(!isset($_GET['mAjax']))
							echo '<script>top.chat.socUp('.$u->room['id'].',"'.$u->room['name'].'");top.chat.reflesh();</script>';
					}else{
						$re = '�� �� ������ ������� � �������, �������� ��� ���� ���������';
					}
				}elseif($tr_nogo==true){
					$re = '�� �������������. �� �������� � ������ �������� ������������ ��� ��������.';
				}else{
					$re = '�� �� ������ ������� � �������';
				}
			} elseif($go['destroy'] == 1) {
				$re = '������ ���� ���������, � ������ ������ ��� ��������������';
			}else{
				$re = '�������� �������';
			}
		}else{
			$re = '������ �� ����������';
		}
	}else{
		$re = '������ �� ����������';
	}
}

if($u->info['room']==209)
{
	include('_incl_data/class/__zv.php');
}

if($re!=''){ $re = $re.'&nbsp;'; }

if(isset($_GET['mAjax'])){
	$tmGo  = $u->info['timeGo']-time()+1; //������� ������ ��������
	$tmGol = $u->info['timeGo']-$u->info['timeGoL']+1; //������� ������ ���� �����
	if($tmGo<0){
		$tmGo = 0;
	}
	if($tmGol<1){
		$tmGol = 1;
	}
	$rowonmax = '';
	$rowonmax2 = 0;
	$rowonmax2 = mysql_fetch_array(mysql_query('SELECT COUNT(`id`) FROM `users` WHERE `online` > '.(time()-520).' AND `inUser` = "0" AND `city` = "'.$u->info['city'].'" AND `no_ip` != "trupojor" LIMIT 1'));
	$rowonmax = '<span class="onlineusers">������ � ������: <strong>'.$rowonmax2[0].' ���.</strong></span>';
	$rowonmax =  ''.$rowonmax.'';
	$rowonmax2c = mysql_fetch_array(mysql_query('SELECT COUNT(`id`) FROM `users` WHERE `online` > '.(time()-520).' AND `inUser` = "0" AND `no_ip` != "trupojor" LIMIT 1'));
	$rowonmax3c = mysql_fetch_array(mysql_query('SELECT COUNT(`id`) FROM `users` WHERE `online` > '.(time()-520).' AND `inUser` = "0" AND `no_ip` != "trupojor" LIMIT 1'));
	$rowonmaxc = '����� � ����: '.$rowonmax2c[0].' ���.';
	$rowonmaxc =  ''.$rowonmaxc.'';
	
	//
	//$rowonmaxc = '';
	//$rowonmax = '<span title="������ � ������: '.$rowonmax3c[0].' ���.">'.$rowonmax.'</span>';
	unset($sil,$pil,$rowonmax2);	
	
	if($u->room['file']!=''){
		include_once('modules_data/location/fight-club.database.php');
	}
	exit(json_encode($Response));	
}

if(isset($_GET['ajaxHostel'])){ // ��� ���������, �������� �� ����� ���������� ��������� � ������.
		include_once('modules_data/location/room_hostel.php'); 
}


?><svg height="0" xmlns="http://www.w3.org/2000/svg">
    <filter id="drop-shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="rgba(255,255,255,1)"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
</svg>
<style>
.MoveLine {
	background:url(http://img.likebk.com/i/move/wait2.gif) 0px 0px repeat-y;
	height:6px;
}
.aFilter {
	
}
.aFilter:hover {
    -webkit-filter: drop-shadow(0px 0px 2px rgba(255,255,255,1));
    filter: url(#drop-shadow);
    -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=0, Color='#FFF')";
    filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=0, Color='#FFF')";

}
</style>
<script type="text/javascript" src="js/jquery.js"></script>
<script>
var speedLoc  = 0;
var sLoc1 = 0;
var sLoc2 = 0;
var tgo  = 0;
var tgol = 0;
var rgo_url = 0;
var rgo_nm = '';
function locGoLine()
{
	var line = document.getElementById('MoveLine');
	if(line!=undefined)
	{
		prc = 100-Math.floor(tgo/tgol*100);
		sLoc1 = 64/100*prc;
		if(sLoc1<0)
		{
			sLoc1 = 0;
		}
		if(sLoc1>64)
		{
			sLoc1 = 64;
		}
		line.style.width = sLoc1+'px';
		if(tgo>0)
		{			
			tgo -= 1;
			setTimeout('locGoLine()',100);
		}else{
			if(rgo_url != 0) {
				location = rgo_url;
			}
		}
		//if( nm != undefined ) {
			if($('#moveto') != null && $('#moveto') != undefined) {
				if(rgo_nm != '') {
					if( $('#moveto').html() == '' ) {
						$('#moveto').css({'display':'','height':'auto'});
						$('#moveto').html('<div onclick="gotoLocationCancel();" style="cursor:pointer;padding:5px;">�� ��������� �: <b>' + rgo_nm + '</b> (<a onclick="gotoLocationCancel();" href="javascript:void(0)">������</a>)</div>');
					}
				}else{
					$('#moveto').css({'display':'none','height':'1px'});
					$('#moveto').html('');
				}
			}
		//}
	}
}
function errortxt(){
	$('#moveto').css({'display':'','height':'auto'});
	$('#moveto').html('<div style="cursor:pointer;padding:5px;color: Red;"><b>���������� ������ 8 ������ ���� ��������</b></div>');
}
function goLocal(id,nm) {
	rgo_url = id;
	rgo_nm = nm;
	if($('#moveto') != null && $('#moveto') != undefined && nm != undefined) {
		if(rgo_nm != '') {
			$('#moveto').css({'display':'','height':'auto'});
			$('#moveto').html('<div onclick="gotoLocationCancel(); return false;" style="cursor:pointer;padding:5px;">�� ��������� �: <b>' + nm + '</b> (<a onclick="gotoLocationCancel();" href="javascript:void(0)">������</a>)</div>');
			if(sLoc1 == 64) {
				location = rgo_url;
			}
		}else{
			$('#moveto').css({'display':'none','height':'1px'});
			$('#moveto').html('');
		}
	}
}
function gotoLocationCancel() {
	rgo_url = 0;
	rgo_nm = '';
	$('#moveto').css({'display':'none','height':'1px'});
	$('#moveto').html('');
}
</script>
<?
if(date('m') == 12 || date('m') == 1 || date('m') == 2) {
	//if( $u->info['admin'] > 0 ) {
		$rsnow = array(
			234 => 1,
			267 => 1,
			9	=> 1,
			286	=> 1,
			11	=> 1,
			236	=> 1,
			213	=> 1,
			252	=> 1
		);
	//}
	if($rsnow[$u->room['id']]==1) {
	?>
<script>
var no = 50; // snow number
var speed = 17; // smaller number moves the snow faster
var sp_rel = 1.4; //speed relevation
var snowflake1 = "/i/itimeges/snow1.gif";
var snowflake2 = "/i/itimeges/snow2.gif";

var i, doc_width, doc_height;

dx = new Array();
xp = new Array();
yp = new Array();
am = new Array();
stx = new Array();
sty = new Array();

Array.prototype.exists = function(el)
{
    for(var i=0;i<this.length;i++)
	if(this[i]==el)
	    return true;
    return false;
}

var rooms = ['1.100', '1.107', '1.111', '1.120'];

function SetVariable(c) {
	dx[c] = 0;                        // set coordinate variables
	am[c] = Math.random()*15;         // set amplitude variables
	xp[c] = Math.random()*(doc_width-35) + 0 + am[c];  // set position variables
	yp[c] = 0;
	stx[c] = 0.02 + Math.random()/10; // set step variables
	sty[c] = 0.7 + Math.random();     // set step variables
}

function DrawWeather(room) {
	
    doc_width = document.getElementById('ione').width;
    doc_height = document.getElementById('ione').height;
	
	doc_width = 600;
	doc_height = 268;

	var div = '';
	for (i = 0; i < no; ++ i) {
		SetVariable(i);
		div += "<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: 30" + i +"; VISIBILITY: visible; TOP: " + 0 + "px; LEFT: " + 0 + "px;\"><img id=\"im"+ i +"\" src=\"" + (sty[i]<sp_rel ? snowflake2 : snowflake1 ) + "\" border=\"0\" alt=\"��������\"></div>";
	}

	document.getElementById('snow').innerHTML = div;
	return 1;
}

function WeatherBegin() {  // IE main animation function

    for (i = 0; i < no; ++ i) {  // iterate for every dot
        yp[i] += sty[i] < sp_rel ? sty[i]/2 : sty[i];
        if (yp[i] > doc_height-40) {
            SetVariable(i);
            var im = document.getElementById('im'+i);
            im.src = (sty[i] < sp_rel) ? snowflake2 : snowflake1;
        }
        dx[i] += stx[i];
        document.getElementById('dot'+i).style.top = yp[i]+'px';
        document.getElementById('dot'+i).style.left = xp[i] +  am[i]*Math.sin(dx[i])+'px';
    }
    setTimeout('WeatherBegin()', speed);
}


</script>
    <?
	}
}

if(isset($u->room['id'])){
	$tmGo  = $u->info['timeGo']-time()+1; //������� ������ ��������
	$tmGol = $u->info['timeGo']-$u->info['timeGoL']+1; //������� ������ ���� �����
	if($tmGo<0){
		$tmGo = 0;
	}
	if($tmGol<1){
		$tmGol = 1;
	}
	//������ � ���� �������
	$goLis = '<table height="15" border="0" cellspacing="0" cellpadding="0">
               <tr>
               <td id="locobobr" rowspan="3" valign="bottom"><a href="main.php?rnd='.$code.'"><img style="display:block;" src="http://img.likebk.com/i/move/rel_1.gif" width="15" height="16" title="��������" border="0" /></a></td>
               <td colspan="3"><img style="display:block;" src="http://img.likebk.com/i/move/navigatin_462s.gif" width="80" height="4" /></td>
               </tr>
               <tr>
               <td><img style="display:block;" src="http://img.likebk.com/i/move/navigatin_481.gif" width="9" height="8" /></td>
               		<td width="64" bgcolor="black"><img src="http://img.likebk.com/1x1.gif" style="display:block;" id="MoveLine" height="8" class="MoveLine" style="width:33px;" /></td>
               <td><img style="display:block;" src="http://img.likebk.com/i/move/navigatin_50.gif" width="7" height="8" /></td>
               </tr>
               <tr>
              		<td colspan="3"><img style="display:block;" src="http://img.likebk.com/i/move/navigatin_tt1_532.gif" width="80" height="4" /></td>
               </tr>
               </table>
			   <div id="test"></div><script>var tgo = '.($tmGo*10).'; var tgol = '.($tmGol*10).';locGoLine();</script>';
			   
	$goline = '<div style="position:absolute; top:0px; z-index:101; right:12px; width:80px;">
				'.$goLis.'
               </div>';
	$rowonmax = '';
	$rowonmax2 = 0;

	$rowonmax2 = mysql_fetch_array(mysql_query('SELECT COUNT(`id`) FROM `users` WHERE `online` > '.(time()-520).' AND `inUser` = "0" AND `city` = "'.$u->info['city'].'" AND `no_ip` != "trupojor" LIMIT 1'));
	$rowonmax = '<span class="onlineusers">������ � ������: <strong>'.$rowonmax2[0].' ���.</strong></span>';
	$rowonmax =  ''.$rowonmax.'';
	$rowonmax2c = mysql_fetch_array(mysql_query('SELECT COUNT(`id`) FROM `users` WHERE `online` > '.(time()-520).' AND `inUser` = "0" AND `no_ip` != "trupojor" LIMIT 1'));
	$rowonmax3c = mysql_fetch_array(mysql_query('SELECT COUNT(`id`) FROM `users` WHERE `online` > '.(time()-520).' AND `inUser` = "0" AND `no_ip` != "trupojor" LIMIT 1'));
	$rowonmaxc = '����� � ����: '.$rowonmax2c[0].' ���.';
	$rowonmaxc =  ''.$rowonmaxc.'';
	
	if( /*($u->info['room'] == 9 || $u->info['room'] == 323 || $u->info['room'] == 11 || $u->info['room'] == 213) && */ 
	
							(date('w') == 2 && date('H') >= 20 && date('H') < 23) ||
						(date('w') == 3 && date('H') >= 18 && date('H') <= 23) ||
						(date('w') == 4 && date('H') >= 20 && date('H') < 23) ||
						(date('w') == 5 && date('H') >= 20 && date('H') <= 23) ||
						(date('w') == 6 && date('H') >= 18 && date('H') <= 23)
	
	) {
		//$rowonmax .= '<br><br><span style="cursor:help;font-size:11pt;" onMouseOver="top.hi(this,\'<b>������������� ���:</b> <br> ������� 20:00-23:00 <br>����� 18:00-00:00 <br>������� 20:00-23:00 <br>������� 20:00-00:00 <br>������� 18:00-00:00 <br> <br> <b>��������:</b> �� ����������� �������, ������������ �����, ��������� � �������� �������� ��������� ������������� ��� �� ����������. �� ����� ��� �������� ��� ��������� � ���������� �� ������������� ������ ���������.<br>����� �������: '.date('(w) H:i').'\',event,3,0,1,1,\'width:500px\')" onMouseOut="top.hic();" onMouseDown="top.hic();">������������� ��� <img src="http://likebk.com/qst.png" width="14"></span>';
	}
	
	//$rowonmaxc = '';
	//$rowonmax = '<span title="������ � ������: '.$rowonmax3c[0].' ���.">'.$rowonmax.'</span>';
	unset($sil,$pil,$rowonmax2);	
	if($u->room['file']!=''){
//		if($u->room['roomAjax'] == 'false'){
			include_once('modules_data/location/'.$u->room['file'].'.php');
			if((date('m') == 12 || date('m') == 1 || date('m') == 2) && $rsnow[$u->room['id']]==1) {
				echo '<script>DrawWeather(31);WeatherBegin();</script>';
			}
//		}else if($u->room['roomAjax'] == 'true'){
//			include_once('modules_data/location/fight-club.php');
//		}
		echo '<div align="right">'.$c['counters'].'</div>';
	}
}else{
	echo 'Location is lost.';
}

?>