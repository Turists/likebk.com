<?
if(!defined('GAME'))
{
	die();
}
$red = '';
$odate = time();
if(isset($_POST['date'])) {
	$_POST['date'] = explode('.',$_POST['date']);
	$odate = strtotime($_POST['date'][0].'-'.$_POST['date'][1].'-'.$_POST['date'][2].' 00:00:00');
	if($u->info['money'] >= 0.5) {
		$red = '<font color="red"><b>������ � ��������� �� '.date('d.m.Y',$odate).' ������� ��� � ��������� � ������� &quot;��������&quot;.</b></font><br>';
		//������� �����
		$itm = $u->addItem(2435,$u->info['id'],'noodet=1|noremont=1');
		$u->info['money'] -= 0.5;
		mysql_query('UPDATE `users` SET `money` = `money` - 0.5 WHERE `id` = "'.$u->info['id'].'" LIMIT 1');
		mysql_query('UPDATE `items_users` SET `use_text` = 100 WHERE `id` = "'.$itm.'" LIMIT 1');
		/* ������� ������ �� ������ */
		mysql_query('INSERT INTO `items_text` (`item_id`,`time`,`login`,`text`,`city`,`x`,`type`) VALUES ("'.$itm.'","'.time().'","","'.mysql_real_escape_string("�������� � ��������� ��������� <B>".$u->info['login']."</B> �� <B>".date('d.m.Y',$odate)."</B>.").'","'.$pl['city'].'","1","1")');
		$sp = mysql_query('SELECT * FROM `delo` WHERE `uid` = "'.$u->info['id'].'" AND `time` >= "'.$odate.'" AND `time` <= "'.($odate+86399).'" LIMIT 10000');
		$zps = 0;
		while($pl = mysql_fetch_array($sp))
		{
			$dl = explode('.',$pl['login']);
			$se = 0;		
			if($dl[1]=='Shop' || $dl[1] == 'ComShop' || $dl[1]=='EkrShop' || $dl[1]=='EkrShop' || $dl[1]=='Bank' || $dl[1]=='remont' || $dl[1]=='inventory' || $dl[1]=='transfer') {
				$se = 1;
			}			
			if($se==1)
			{
				mysql_query('INSERT INTO `items_text` (`item_id`,`time`,`login`,`text`,`city`,`x`) VALUES ("'.$itm.'","'.$pl['time'].'","'.$pl['login'].'","'.mysql_real_escape_string($pl['text']).'","'.$pl['city'].'","1")');				
				$zps++;
			}
		}
		if($zps == 0)
		{
			mysql_query('INSERT INTO `items_text` (`item_id`,`time`,`login`,`text`,`city`,`x`,`type`) VALUES ("'.$itm.'","'.mysql_real_escape_string($odate).'","����������","'.mysql_real_escape_string("�������� � �������� �� ������ ����� �����������.").'","'.$pl['city'].'","1","1")');
		}
	}else{
		echo '<font color="red"><b>� ��� ������������ �����. ��������� ������ ���������� 0.5 ��.</b></font>';
	}
}
?>
<FORM ACTION="main.php?act_trf=1" METHOD=POST>
<P align=right><INPUT TYPE=button value="���������" style="background-color:#A9AFC0" onclick="window.open('/encicl/help/schet.html', 'help', 'height=300,width=500,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes')">
<INPUT TYPE="button" onClick="top.frames['main'].location = 'main.php';" value="���������" name=edit></P>
<H3>����� � ���������</H3>

�� ������ �������� ����� � ��������� ��������/����� �� ���/� ��� �� ��������� ����. ������ �������, ����� <B>0.5 ��.</B><BR>
� ��� �� �����: <FONT COLOR=339900><B><?=$u->info['money']?></B></FONT> ��.<BR>
������� ����, �� ������� ������ �������� �����: <INPUT TYPE=text NAME=date value="<?=date('d.m.Y',$odate)?>"> <INPUT TYPE=submit name=schet value="�������� �����">
</FORM>
<?='<br>'.$red?>