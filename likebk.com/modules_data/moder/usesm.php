<?
if(!defined('GAME'))
{
	die();
}
if($p['sm2']==1 || $p['citysm2']==1 || $p['citysm1']==1 || $p['sm1']==1)
{
	$tm = (int)$_POST['time'];
	if($tm!=1 && $tm!=2 && $tm!=3)
	{
		$uer = '������� ������� ������';
	}else{
		$uu = mysql_fetch_array(mysql_query('SELECT * FROM `users` WHERE `login` = "'.mysql_real_escape_string($_POST['logingo']).'" LIMIT 1'));
		if(isset($uu['id']))
		{
			$x = 0;
			if($tm==1)
			{
				$tm = '`molch1` = "'.(time()-1).'"'; $x = 1;
			}elseif($tm==2)
			{
				$tm = '`molch2` = "'.(time()-1).'"'; $x = 2;
			}elseif($tm==3)
			{
				$tm = '`molch1` = "'.(time()-1).'",`molch2` = "'.(time()-1).'"'; $x = 3;
			}
			$upd = mysql_query('UPDATE `users` SET '.$tm.' WHERE `id` = "'.$uu['id'].'" LIMIT 1');
			if($upd)
			{
				$sx = '';
				if($u->info['sex']==1)
				{
					$sx = '�';
				}
				if($x!=2 && $uu['molch1']>=time())
				{
					$rtxt = '[img[items/pal_button3.gif]] '.$rang.' &quot;'.$u->info['cast_login'].'&quot; ����'.$sx.' �������� �������� � &quot;'.$uu['login'].'&quot;';
					mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");				
					$rtxt = $rang.' &quot;'.$u->info['login'].'&quot; ����'.$sx.' �������� &quot;<b>��������</b>&quot;.';
					mysql_query("INSERT INTO `users_delo` (`uid`,`ip`,`city`,`time`,`text`,`login`,`type`) VALUES ('".$uu['id']."','".$_SERVER['REMOTE_ADDR']."','".$u->info['city']."','".time()."','".$rtxt."','".$u->info['login']."',0)");
					$uer = '�� ������� ����� �������� �������� � ��������� "'.$uu['login'].'".<br>';
				}
				if($x!=1 && $uu['molch2']>=time())
				{
					$rtxt = '[img[items/fsleep_off.gif]] '.$rang.' &quot;'.$u->info['login'].'&quot; ����'.$sx.' �������� ��������� �������� � &quot;'.$uu['login'].'&quot;';
					mysql_query("INSERT INTO `chat` (`new`,`city`,`room`,`login`,`to`,`text`,`time`,`type`,`toChat`,`typeTime`) VALUES (1,'".$u->info['city']."','".$u->info['room']."','','','".$rtxt."','".time()."','6','0','1')");				
					$rtxt = $rang.' &quot;'.$u->info['login'].'&quot; ����'.$sx.' �������� &quot;<b>��������� ��������</b>&quot;.';
					mysql_query("INSERT INTO `users_delo` (`uid`,`ip`,`city`,`time`,`text`,`login`,`type`) VALUES ('".$uu['id']."','".$_SERVER['REMOTE_ADDR']."','".$u->info['city']."','".time()."','".$rtxt."','".$u->info['login']."',0)");
					$uer .= '�� ������� ����� �������� ��������� �������� � ��������� "'.$uu['login'].'".';
				}
			}else{
				$uer = '�� ������� ������������ ������ ��������';
			}
		}else{
			$uer = '�������� �� ������ � ���� ������';
		}
	}
}else{
	$uer = '� ��� ��� ���� �� ������������� ������� ��������';
}	
?>