<?
if(!defined('GAME')) {
	die();
}
/*
	�����: ������ ����
*/
$pvr = array();

//�������� ��� �����
if( isset($pr_momental_this)) {
	$fx_moment = function(  $uid, $enemy, $j_id, $yron, $profil, $inlog ) {
		return round($yron);
	};
}elseif( isset($pr_tested_this) ) {
		$fx_priem = function(  $id , $at , $uid, $j_id ) {
		return $at;
	};
	unset( $pr_used_this );
}elseif( isset($pr_used_this) && isset($pr_moment) ) { 
	$fx_priem = function(  $id , $at , $uid, $j_id ) {
		return $at;
	};
	unset( $pr_used_this );
}else{
	//�������� ��� �����
	/*
	$btl->priemAddLog( $id, 1, 2, $u->info['id'], $u->info['enemy'],
		'���������',
		'{tm1} '.$btl->addlt(1 , 21 , $btl->users[$btl->uids[$u->info['id']]]['sex'] , NULL).'',
		($btl->hodID+1)
	);
	*/
				//
		if( $u->stats['hpNow'] < $u->stats['hpAll']/100*30 ) {
			echo '<font color=red><b>&quot;������ ����&quot; ����� ������������ ����� � ��� ����� '.floor($u->stats['hpAll']/100*30).' ��</b></font>';
			$cup = true;
		}else{
				$pvr['mp'] = round($u->stats['mpAll']*0.20);
				$pvr['mpSee'] = 0;
				$pvr['mpNow'] = floor($u->stats['mpNow']);
				$pvr['mpAll'] = $u->stats['mpAll'];
				$pvr['mpTr'] = $pvr['mpAll'] - $pvr['mpNow'];
				
				//$pvr['mp'] = $btl->hphe( $u->info['id'] , $pvr['hp'] );
				
				if( $pvr['mpTr'] > 0 ) {
					//��������� ����
					if( $pvr['mpTr'] < $pvr['mp'] ) {
						$pvr['mp'] = $pvr['mpTr'];
					}
					$pvr['mpSee'] = '+'.$pvr['mp'];
					$pvr['mpNow'] += $pvr['mp'];
				}					
				if( $pvr['mpNow'] > $pvr['mpAll'] ) {
					$pvr['mpNow'] = $pvr['mpAll'];
				}elseif( $pvr['mpNow'] < 0 ) {
					$pvr['mpNow'] = 0;
				}
				if( $pvr['mpSee'] == 0 ) {
					$pvr['mpSee'] = '--';
				}
				//
				//$btl->users[$btl->uids[$u->info['id']]]['last_hp'] = $pvr['hp'];
				//
				$pvr['color2'] = $btl->mcolor[$btl->mname['�����']];
				//
				$u->stats['mpNow'] = $pvr['mpNow'];	
				$u->info['mpNow'] = $pvr['mpNow'];	
				$btl->stats[$btl->uids[$u->info['id']]]['mpNow'] = $pvr['mpNow'];
				$btl->users[$btl->uids[$u->info['id']]]['mpNow'] = $pvr['mpNow'];
				//
				$pvr['hp'] = round($u->stats['hpAll']*0.10);
				
				//���������� �������� �� ���� �������
				//$pvr['hp'] = $btl->testYronPriem( $u->info['id'], $u->info['id'], 12, $pvr['hp'], -1, true );
				
				$pvr['hpSee'] = 0;
				$pvr['hpNow'] = floor($u->stats['hpNow']-$pvr['hp']);
				$pvr['hpAll'] = $u->stats['hpAll'];
				
				$pvr['hp'] = -$pvr['hp'];
				$pvr['hpSee'] = $pvr['hp'];
								
				if( $pvr['hpNow'] > $pvr['hpAll'] ) {
					$pvr['hpNow'] = $pvr['hpAll'];
				}elseif( $pvr['hpNow'] < 1 ) {
					$pvr['hpNow'] = 1;
				}
				if( $pvr['hpSee'] == 0 ) {
					$pvr['hpSee'] = '--';
				}
				//
				//$btl->users[$btl->uids[$u->info['id']]]['last_hp'] = $pvr['hp'];
				//
				$pvr['color2'] = $btl->mcolor[$btl->mname['�����']];
				//
				$u->stats['hpNow'] = $pvr['hpNow'];	
				$u->info['hpNow'] = $pvr['hpNow'];	
				$btl->stats[$btl->uids[$u->info['id']]]['hpNow'] = $pvr['hpNow'];
				$btl->users[$btl->uids[$u->info['id']]]['hpNow'] = $pvr['hpNow'];									
				mysql_query('UPDATE `stats` SET `hpNow` = "'.$u->stats['hpNow'].'",`mpNow` = "'.$u->stats['mpNow'].'" WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
				//
				$this->testDie($u->info['id']);
				//
				$btl->priemAddLogFast( $u->info['id'], 0, "<font color^^^^#".$pvr['color2'].">������ ����</font>",
					'{tm1} '.$btl->addlt(1 , 21 , $btl->users[$btl->uids[$u->info['id']]]['sex'] , NULL).' �� <font Color=#006699><b>'.$pvr['hpSee'].'</b></font> ['.$pvr['hpNow'].'/'.$pvr['hpAll'].']',
				1, time() );
				$btl->priemAddLogFast( $u->info['id'], 0, "<font color^^^^#".$pvr['color2'].">������ ����</font>",
					'{tm1} '.$btl->addlt(1 , 21 , $btl->users[$btl->uids[$u->info['id']]]['sex'] , NULL).' �� <font Color=#006699><b>'.$pvr['mpSee'].'</b></font> ['.$pvr['mpNow'].'/'.$pvr['mpAll'].'] (����)',
				1, time() );
				//
				$this->testDie($u->info['id']);					
				//
			echo '<font color=red><b>�� ������� ������������ ����� &quot;������ ����&quot;</b></font>';
			//$this->addEffPr($pl,$id);
			$this->mintr($pl);
		}
}

unset($pvr);
?>