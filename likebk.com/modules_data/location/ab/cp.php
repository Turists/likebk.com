<?
if(!defined('GAME'))
{
	die();
}
$tattack = '';

if($u->room['file']=='ab/cp')
{
	if(date("H")>=6 && date("H")<22) {
	$now = 'day';
	} else { $now = 'night'; }
	if($u->info['level'] >= 4)
	{
		if(date("H")>=6 && date("H")<22) 
		{
		$tattack = '<span onMouseMove="this.runtimeStyle.color = \'white\';" onMouseOut="this.runtimeStyle.color = this.parentElement.style.color;" onclick="">��������� �������� � 22 �� 6 �.</span>';
		} else {
		if(isset($_POST['attack'])) 
		{
		$magic->magicCentralAttack();
		}
		$tattack = '<span onMouseMove="this.runtimeStyle.color = \'white\';" onMouseOut="this.runtimeStyle.color = this.parentElement.style.color;" onclick="findlogin(\'�������\',\'attack\',\'\',\'\');">�������</span>';
		}
	}
?>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="250" valign="top">      
        <? $usee = $u->getInfoPers($u->info['id'],0); if($usee!=false){ echo $usee[0]; }else{ echo 'information is lost.'; }  ?>
    </td>
    <td width="230" valign="top" style="padding-top:19px;"><? include('modules_data/stats_loc.php'); ?></td>
    <td valign="top"><div align="right">
      <table  border="0" cellpadding="0" cellspacing="0">
        <tr align="right" valign="top">
          <td>
                <? if($re!=''){ echo '<font color="red"><b>'.$re.'</b></font>'; } ?>
                <table width="500" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <div style="position:relative; cursor: pointer;" id="ione">
                      <img src="http://img.likebk.com/i/images/300x225/ap_bg1_1.jpg" alt="" name="img_ione" width="500" height="268" border="1" id="img_ione"/>
                      <div id="buttons_on_image" style="cursor:pointer; font-weight:bold; color:#D8D8D8; font-size:10px;">
                          <? echo $tattack; ?>
                          &nbsp;
                          <span onMouseMove="this.runtimeStyle.color = 'white';" onMouseOut="this.runtimeStyle.color = this.parentElement.style.color;" onclick="window.open('http://forum.<? echo $c['host']; ?>/', 'forum', 'location=yes,menubar=yes,status=yes,resizable=yes,toolbar=yes,scrollbars=yes,scrollbars=yes')">�����</span> &nbsp;
                      </div>
                      <script language="javascript" type="text/javascript">
                        <!--
                        if(document.getElementById('ione'))
                        {
                            document.getElementById('ione').appendChild(document.getElementById('buttons_on_image'));
                            document.getElementById('buttons_on_image').style.position = 'absolute';
                            document.getElementById('buttons_on_image').style.bottom = '8px';
                            document.getElementById('buttons_on_image').style.right = '23px';
                        }else{
                            document.getElementById('buttons_on_image').style.display = 'none';
                        }
                        -->
                      </script>
					    <div style="position:absolute; left:50px; top:70px; width:48px; height:68px; z-index:94;"><img <? thisInfRm('3.180.0.275'); ?> src="http://img.likebk.com/i/images/300x225/dungeon/ap_tower1.gif" width="48" height="68" class="aFilter" /></div>
						<div style="position:absolute; left:74px; top:142px; width:128px; height:49px; z-index:94;"><img <? thisInfRm('3.180.0.276'); ?> src="http://img.likebk.com/i/images/300x225/dungeon/abp_tradehouse.gif" width="128" height="49" class="aFilter" /></div>
						<div style="position:absolute; left:10px; top:200px; width:21px; height:30px; z-index:94;"><img <? thisInfRm('3.180.0.277'); ?> src="http://img.likebk.com/i/images/300x225/dungeon/dm_left1.gif" width="21" height="30" class="aFilter" /></div>
                        <div style="position:absolute; left:218px; top:134px; width:84px; height:87px; z-index:94;"><img <? thisInfRm('3.180.0.266'); ?> src="http://img.likebk.com/i/images/300x225/ap_port.gif" width="84" height="87" class="aFilter" /></div>
                        <!-- <div style="position:absolute; left:338px; top:47px; width:122px; height:140px; z-index:94;"><img <? //thisInfRm('3.180.0.271'); ?> src="http://img.likebk.com/i/images/300x225/ap_tower3.gif" width="122" height="140" class="aFilter" /></div> -->
                        <div style="position:absolute; left:466px; top:198px; width:21px; height:30px; z-index:94;"><img <? thisInfRm('3.180.0.268'); ?> src="http://img.likebk.com/i/images/300x225/dm_right.gif" width="21" height="30" class="aFilter" /></div>
                        <div id="snow"></div>
                        <? echo $goline; ?>
                      </div>
                    </td>
                  </tr>
                </table>  
                <div style="display:none; height:0px " id="moveto"></div>      
              </td>
          <td>
              <!-- <br /><span class="menutop"><nobr>������� ��� ��������</nobr></span>-->
          </td>
        </tr>
      </table>
      	<small>
        <HR>
        <? $hgo = $u->testHome(); if(!isset($hgo['id'])){ ?><INPUT onclick="location.href='main.php?homeworld=<? echo $code; ?>';" class="btn" value="�������" type="button" name="combats2"><? } unset($hgo); ?>
        <INPUT id="forum" class="btn" onclick="window.open('http://<? echo $c['forum']; ?>/', 'forum', 'location=yes,menubar=yes,status=yes,resizable=yes,toolbar=yes,scrollbars=yes,scrollbars=yes')" value="�����" type="button" name="forum">
          <!-- <INPUT class="btn" onclick="window.open('/encicl/help/top1.html', 'help', 'height=300,width=500,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes')" value="���������" type="button"> -->
          <!-- <INPUT class="btn" value="�������" type="button"> -->
        <br />
        <? echo $rowonmax; ?><BR>
        
      </div></td>
  </tr>
</table>
<?
}

?>