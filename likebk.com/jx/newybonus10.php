<?php
define('GAME',true);

/*echo strtotime('now 00:00:00').'<br>';
echo date("Y-m-d H:i:s", strtotime('now 00:00:00'));*/

include('../_incl_data/class/__db_connect.php');
include('../_incl_data/class/__user.php');

if( $u->info['dnow'] > 0 ) { die('��������� ����� � ������!'); }

$d2 = round(date('m'));
$bns = mysql_fetch_array(mysql_query('SELECT * FROM `a_quest` WHERE `id` = "'.mysql_real_escape_string($_GET['newybonus10']).'" AND ((`mm` <= "'.$d2.'" AND `mm2` >= "'.$d2.'") OR (`mm` > `mm2` AND `mm2` >= "'.$d2.'") OR (`mm` > `mm2` AND `mm` <= "'.$d2.'")) LIMIT 1'));
if(isset($bns['id']) && ( ($bns['mm'] == $d2 && date('d') < $bns['dd']) || ($bns['mm2'] == $d2 && date('d') > $bns['dd2']) ) ) {
	unset($bns);
}
if(!isset($bns['id'])) {
	die('������� �� �������!');
}

if( $bns['dd'] < 10 ) {
	$bns['dd'] = '0'.$bns['dd'];
}
if( $bns['dd2'] < 10 ) {
	$bns['dd2'] = '0'.$bns['dd2'];
}
if( $bns['mm'] < 10 ) {
	$bns['mm'] = '0'.$bns['mm'];
}
if( $bns['mm2'] < 10 ) {
	$bns['mm2'] = '0'.$bns['mm2'];
}
$bns['yy'] = date('Y');
$bns['yy2'] = $bns['yy'];
if( $bns['mm2'] < $bns['mm'] && round(date('m')) >= $bns['mm'] ) {
	$bns['yy2']++;
}

$itm1 = mysql_fetch_array(mysql_query('SELECT * FROM `items_main` WHERE `id` = "'.$bns['itm1'].'" LIMIT 1'));
$itm2 = mysql_fetch_array(mysql_query('SELECT * FROM `items_main` WHERE `id` = "'.$bns['itm2'].'" LIMIT 1'));
$itm3 = mysql_fetch_array(mysql_query('SELECT * FROM `items_main` WHERE `id` = "'.$bns['itm3'].'" LIMIT 1'));

?>
<style type="text/css">
	#wrapper {
	    margin-bottom: 20px;
	    padding-top: 5px;
	}
	.button{
	     display: block;
	     width: 165px;
	     margin: 10px auto;
		 text-decoration:none; 
		 text-align:center; 
		 padding:5px 5px; 
		 border:solid 1px #007300; 
		 -webkit-border-radius:8px;
		 -moz-border-radius:8px; 
		 border-radius: 8px; 
		 font:16px Arial, Helvetica, sans-serif; 
		 font-weight:bold; 
		 color:#fff!important; 
		 background-color:#43a824; 
		 background-image: -moz-linear-gradient(top, #43a824 0%, #1a5707 100%); 
		 background-image: -webkit-linear-gradient(top, #43a824 0%, #1a5707 100%); 
		 background-image: -o-linear-gradient(top, #43a824 0%, #1a5707 100%); 
		 background-image: -ms-linear-gradient(top, #43a824 0% ,#1a5707 100%); 
		 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a5707', endColorstr='#1a5707',GradientType=0 ); 
		 background-image: linear-gradient(top, #43a824 0% ,#1a5707 100%);   
		 -webkit-box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff; 
		 -moz-box-shadow: 0px 0px 2px #bababa,  inset 0px 0px 1px #ffffff;  
		 box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;    
	}
	.button:hover{
		color:#E5FFFF!important;
		opacity: 0.8; 
	}
</style>
<div style="float: right; width: 210px;">
  <INPUT type='button' value='��������' onclick='location="/main.php?newybonus10=<?=$bns['id']?>"';'>
&nbsp;<INPUT TYPE=button value="���������" onclick='location="/main.php"'>
</div>
<div id="wrapper">
<h3 style="font-size: 24px; font-weight: bold; padding: 20px; padding-bottom: 0px; margin-bottom: 10px; text-align: center;">������ ���� ������� �� <?=$bns['name2']?>!</h3>
<div style="text-align: center; font-family: Arial; line-height: 24px;">
<span style="font-size: 16px; font-weight: bold;"><br>
<small style="font-weight:normal;font-size:14px;">(���� ���������� �������� � <?=$bns['dd']?>.<?=$bns['mm']?>.<? if( $bns['mm'] > $bns['mm2'] ) { echo $bns['yy']-1; }else{ echo $bns['yy']; }?> �� <?=$bns['dd2']?>.<?=$bns['mm2']?>.<?=$bns['yy2']?>)</small><br>
�� ������ ��� ����������� � ����, �� ������� ������� <img src="http://img.likebk.com/i/items/<?=$itm1['img']?>"> "<?=$itm1['name']?>", � ������ �������� <img src="http://img.likebk.com/i/items/<?=$itm2['img']?>"> "<?=$itm2['name']?>", � � ������� �������� <img src="http://img.likebk.com/i/items/<?=$itm3['img']?>"> &quot;<?=$itm3['name']?>&quot;! ������ ����������� ����������, �� ������� �������� �� �� ����� ������ �����<? if( $bns['loto'] > 0 ) { ?>, � ����� <font color="#b40611"><img src="http://img.likebk.com/i/items/loto1b.jpg"> ���������� ������</font>, � �������� ������ <font color="#b40611" style="font-size:19px;">����� 1300 ���</font>.
<?
echo '<span style="cursor:help;font-size:11pt;" onMouseOver="top.hi(this,\'3 ����� �� 100 ���.<br>10 ������ �� 50 ���.<br>30 ������ �� 10 ���.<br>200 ������ �� 1 ���.\',event,3,0,1,1,\'width:150px\')" onMouseOut="top.hic();" onMouseDown="top.hic();"><img src="http://likebk.com/qst.png"></span>';
?>
&nbsp; � ������ ������! </font><? } ?>. <? if( $bns['gift'] == 1 ) { ?>�� ������ 100  ����� � ������� �� ��������� ����� �� ���������� <font color="#b40611">������� �������</font> ��� <font color="#b40611">�������</font>!<? } ?><br>
�������� ����������������� ���� �� ������ � <font color="#b40611">&quot;�������� �������&quot;</font>, ������� ��������� �� <font color="#b40611">&quot;����������� �������&quot; <? if( date('m') == 12 || date('m') < 2 ) { echo ' ��� ����� � <font color="#b40611">&quot;���������� ��������&quot;</font>!'; } ?></font>.
<?
$xps = mysql_fetch_array(mysql_query('SELECT COUNT(*) FROM `items_users` WHERE `uid` = "'.$u->info['id'].'" AND `item_id` = '.$itm1['id'].' AND `delete` = 0 AND `inShop` = 0 LIMIT 1'));

if( isset($_GET['obmen123']) ) {
	if( $xps[0] >= 100 ) {
		echo '<div><b><font color="red">�� ������� �������� 100 ���������! ��������� � ������� ���� ������ (�� ������ �����, ����� � ������)!</font></b></div>';
		mysql_query('DELETE FROM `items_users` WHERE `uid` = "'.$u->info['id'].'" AND `item_id` = '.$itm1['id'].' AND `delete` = 0 AND `inShop` = 0 LIMIT 100');
		$type = 1;
		if( $_GET['obmen123'] == 2 ) {
			$type = 2;
		}
		mysql_query('INSERT INTO `free_buy` (`uid`,`time`,`type`) VALUES ("'.$u->info['id'].'","'.time().'","'.$type.'")');
		$xps[0] -= 100;
	}else{
		echo '<div><b><font color="red">������������ ��������� ��� ������!</font></b></div>';
	}
}

if( $bns['gift'] == 1 ) {
	if( $xps[0] >= 100 ) {
		echo '<div><a href="javascript:void(0);" onclick="if(confirm(\'�� ������� ��� ������ ���������� ������� �������?\')){ location.href = \'/main.php?newybonus10='.$bns['id'].'&obmen123=1\'; } return false;"><span class="button" style="pointer-events: none; cursor: default;">�������� 100 &quot;'.$itm1['name'].'&quot; �� ������� �������!</span></a></div>';
		echo '<div><a href="javascript:void(0);" onclick="if(confirm(\'�� ������� ��� ������ ���������� ������� �������?\')){ location.href = \'/main.php?newybonus10='.$bns['id'].'&obmen123=2\'; } return false;"><span class="button" style="pointer-events: none; cursor: default;">�������� 100 &quot;'.$itm1['name'].'&quot; �� ������� �������!</span></a></div>';
	}else{
		$xcfasd = 100 - $xps[0];
		echo '<div style="pointer-events: none; cursor: default;opacity: 0.2;"><b><font color="red">��� ��������� ����������� ������� ��� �������� �������� ��� '.$xcfasd.' &quot;'.$itm1['name'].'&quot;!</font></b></div><hr>';
	}
}
?>
<Br><span style="font-size:18px;">����������� � ����������!</span>
</span>
</div>
</div>
<?php

echo '<div align="center">';
$o1 = mysql_fetch_array(mysql_query('SELECT * FROM `online` WHERE `uid` = "'.$u->info['id'].'" LIMIT 1'));
$o2 = mysql_fetch_array(mysql_query('SELECT * FROM `elka_quest` WHERE `uid` = "'.$u->info['id'].'" ORDER BY `id` DESC LIMIT 1'));

if(isset($_GET['takeitnowfastbig'])) {
	if( $o1['time_all'] - $o2['time_online'] >= 3600 ) {
		
		//if( rand(0,100) < 31 || $u->info['id'] == 12345 ) {
			$u->lockstart();
			echo '<script>top.sd4win();</script>';
		//}
		
		echo '<div><font color="red"><b>������ ������ �� ���������� ������� &quot;'.$itm1['name'].'&quot;!</b></font></div>';
		
		$u->addItem($itm1['id'],$u->info['id'],'|sudba='.$u->info['login'].'');
		
		$sund = array(
			1 => rand(0,1),
			2 => rand(0,1),
			3 => rand(0,1)
		);
		
		$sundr = array(
			array( 1001 , '������ �� �����' ),
			array( 1460 , '�������� �����' ),
			array( 994 , '����������' ),
			array( 6819 , '�������' ),
			array( 2139 , '������ ������������' ),
			array( 2140 , '������ ���������' ),
			array( 3102 , '����� ����� +5' )
		);
		
		$sop = round((int)$_GET['takeitnowfastbig']);
		
		$i = 1;
		while( $i <= 3 ) {
			$itmb = $sund[$i];
			//$sop
			$html2 = '';
			if( $itmb == 1 ) {
				$itmb = $sundr[rand(0,count($sundr)-1)];
				$html2 .= '&quot;'.$itmb[1].'&quot;';
				if( $sop == $i ) {
					$re = $u->addItem($itmb[0],$u->info['id'],'|sudba='.$u->info['login'].'|nosale=1|srok='.(86400*1).'');
					if( $re > 0 ) {
						mysql_query('UPDATE `items_users` SET `iznosMAX` = 1 WHERE `id` = "'.$re.'" AND `uid` = "'.$u->info['id'].'" LIMIT 1');
					}
				}
			}else{
				$html2 = '�����';
			}
			if( $sop == $i ) {
				$html2 .= ' (�� ������� ��� ������!)';
			}
			echo '<div><font color="red"><b>� ������� �'.$i.' ����: '.$html2.'</b></font></div>';
			$i++;
		}
		
		mysql_query('INSERT INTO `elka_quest` (`uid`,`time`,`time_online`) VALUES (
			"'.$u->info['id'].'","'.time().'","'.$o1['time_all'].'"
		)');
		
		$o1 = mysql_fetch_array(mysql_query('SELECT * FROM `online` WHERE `uid` = "'.$u->info['id'].'" LIMIT 1'));
		$o2 = mysql_fetch_array(mysql_query('SELECT * FROM `elka_quest` WHERE `uid` = "'.$u->info['id'].'" ORDER BY `id` DESC LIMIT 1'));
				
	}else{
		echo '<div><font color="red"><b>��� ���������� �������� � ������� ��� '.$u->timeOut(( 3600 - ($o1['time_all'] - $o2['time_online']) )).'!</b></font></div>';
	}
}


if( $o1['time_all'] - $o2['time_online'] >= 3600 ) {
	echo '<a href="/main.php?newybonus10='.$bns['id'].'&takeitnowfastbig=1"><span class="button" style="pointer-events: none; cursor: default;">������� ������ �1</span></a>';
	echo '<a href="/main.php?newybonus10='.$bns['id'].'&takeitnowfastbig=2"><span class="button" style="pointer-events: none; cursor: default;">������� ������ �2</span></a>';
	echo '<a href="/main.php?newybonus10='.$bns['id'].'&takeitnowfastbig=3"><span class="button" style="pointer-events: none; cursor: default;">������� ������ �3</span></a>';
}else{
	echo '��� ���������� �������� � ������� ��� '.$u->timeOut(( 3600 - ($o1['time_all'] - $o2['time_online']) )).'!';
	echo '<a href="/main.php?newybonus10='.$bns['id'].'&takeitnowfastbig=1"><span class="button" style="pointer-events: none; cursor: default;opacity: 0.2;">������� ������ �1</span></a>';
	echo '<a href="/main.php?newybonus10='.$bns['id'].'&takeitnowfastbig=2"><span class="button" style="pointer-events: none; cursor: default;opacity: 0.2;">������� ������ �2</span></a>';
	echo '<a href="/main.php?newybonus10='.$bns['id'].'&takeitnowfastbig=3"><span class="button" style="pointer-events: none; cursor: default;opacity: 0.2;">������� ������ �3</span></a>';
}	
echo '<b>����� ������� ����� ���� ������, � ������ ������� ������ �������!</b>';	
echo '</div>';
?>