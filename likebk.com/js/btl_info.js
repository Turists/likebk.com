var stl4 = { 1:0,2:0 };
stl4[1] = { 4:'',5:'',6:'' };
stl4[2] = { 4:'',5:'',6:'' };

var stl1 = { 1:0,2:0 };
stl1[1] = { 1:'',52:'' };
stl1[2] = { 1:'',52:'' };

var stl10 = { 1:0,2:0 };
stl10[1] = { 10:'',65:'' };
stl10[2] = { 10:'',65:'' };
function info_reflesh(id_info,uid,up_info,obraz,hp,hpAll,mp,mpAll,invis,sex,eff,ststua,align)
{
	stl4[id_info] = { 4:'',5:'',6:'' }; img4 = ''; lst4 = 0;
	var d = document.getElementById('player'+id_info);
	if(d!=undefined)
	{
		var mbmp = '';
		var nomp = 0;
		var whp = Math.floor(hp/hpAll*120);
		var wmp = Math.floor(mp/mpAll*120);
		var chp = 'hp_3';
		var cmp = 'hp_mp';
		if(whp<1)
		{
			chp = 'hp_none';	
		}
		if(whp>0)
		{
			chp = 'hp_1';
		}
		if(whp>32)
		{
			chp = 'hp_2';
		}
		if(whp>65)
		{
			chp = 'hp_3';
		}
		if(wmp<=0)
		{
			cmp = 'hp_none';
		}
		if(mpAll>0)
		{
			mbmp = '	<div id="vmp4" title="������� ����" class="seemp" style="position:absolute; top:10px; width:120px; height:10px; z-index:12;"> '+mp+'/'+mpAll+'</div>'+
			'	<div title="������� ����" class="hpborder" style="position:absolute; top:10px; width:120px; height:9px; z-index:13;"><img src="http://'+top.c.img+'/1x1.gif" height="9" width="1"></div>'+
			'	<div class="'+cmp+' senohp" style="height:9px; position:absolute; top:10px; width:'+wmp+'px; z-index:11;" id="lmp4"><img src="http://'+top.c.img+'/1x1.gif" height="9" width="1"></div>'+
			'	<div title="������� ����" class="hp_none" style="position:absolute; top:10px; width:120px; height:10px; z-index:10;"></div>';
		}else{
			nomp = 5;	
		} 
		if (align==9){
			hp = Math.floor(hp/(hpAll/100)); 
			hpAll = '100%';
		} 

		document.getElementById('player'+id_info+'_login').innerHTML = up_info;
		d.innerHTML = '<div align="left">'+
		 ' <div style="box-shadow: 1px 1px 7px 0px #000000; width:240px; padding:2px; border-bottom:1px solid #666666; border-right:1px solid #666666; border-left:1px solid #FFFFFF; border-top:1px solid #FFFFFF;">'+
			'<div align="center">'+
			'  <!-- blocked -->'+
			'</div>'+
			'<table width="240" border="0" cellspacing="0" cellpadding="0">'+
			 ' <tr>'+
				'<td width="60" valign="top"><table width="60" height="280" border="0" cellspacing="0" cellpadding="0">'+
				 ' <tr>'+
					'<td height="60" id="'+id_info+'_itmSlot1"><img style="display:block;" title="������ ���� ����" src="http://'+top.c.img+'/i/items/w/w9.gif"></td>'+
				 ' </tr>'+
				  '<tr>'+
				'	<td height="40" id="'+id_info+'_itmSlot2"><img style="display:block;" title="������ ���� ������" src="http://'+top.c.img+'/i/items/w/w13.gif"></td>'+
				 ' </tr>'+
				 ' <tr>'+
				'<td height="60" id="'+id_info+'_itmSlot3"><img style="display:block;" title="������ ���� ������" src="http://'+top.c.img+'/i/items/w/w3.gif"></td>'+
				 ' </tr>'+
				 ' <tr>'+
				'	<td height="80"><div id="'+id_info+'_itmSlot4"><img style="display:block;" title="������ ���� �����" src="http://'+top.c.img+'/i/items/w/w4.gif"></div></td>'+
				  '</tr>'+
				 ' <tr>'+
				'	<td height="40" id="'+id_info+'_itmSlot7"><img style="display:block;" title="������ ���� ����" src="http://'+top.c.img+'/i/items/w/w5.gif"></td>'+
				  '</tr>'+
				'</table></td>'+
				'<td height="280" valign="top"><table width="120" height="280" border="0" cellspacing="0" cellpadding="0">'+
				  '<tr>'+
					'<td height="20" valign="top"><!-- HP and MP -->'+
					'	  <div style="position:relative;">'+
						'	<div id="vhp4" title="������� �����" class="seehp" style="position:absolute; top:'+nomp+'px; width:120px; height:10px; z-index:12;"> '+hp+'/'+hpAll+'</div>'+
							'<div title="T ������� �����" class="hpborder" style="position:absolute; top:'+nomp+'px; width:120px; height:9px; z-index:13;"><img style="display:block;" src="http://'+top.c.img+'/1x1.gif" height="9" width="1"></div>'+
						'	<div class="'+chp+' senohp" style="height:9px; width:'+whp+'px; position:absolute; top:'+nomp+'px; z-index:11;" id="lhp4"><img style="display:block;" src="http://'+top.c.img+'/1x1.gif" height="9" width="1"></div>'+
						'	<div title="������� �����" class="hp_none" style="position:absolute; top:'+nomp+'px; width:120px; height:10px; z-index:10;"><img style="display:block;" src="http://'+top.c.img+'/1x1.gif" height="10"></div>'+
						 mbmp+
						 ' </div>'+
					'  <!-- -->'+
					'</td>'+
				 ' </tr>'+
				 ' <tr>'+
					'<td valign="top"><div style="position:relative; height:220px;">'+
					 ' <!-- ����� -->'+
					 ' <div style="position:absolute; width:120px; height:220px; z-index:1;" onMouseOver="top.hi(this,\''+ststua+'\',event,0,1,1,1,\'\');" onMouseOut="top.hic();" onMouseDown="top.hic();"><a href="#obraz_pers"><img oncontextmenu="return false" ondragstart="return false" style="display:block;" width="120" height="220" src="http://'+top.c.img+'/i/obraz/'+sex+'/'+obraz+'" ></a></div>'+
					 ' <div style="position:absolute; width:auto; height:auto; z-index:3;">'+eff+'</div>'+
					'</div></td>'+
				'  </tr>'+
				 ' <tr>'+
				'	<td height="40"><table width="120" border="0" cellspacing="0" cellpadding="0">'+
						'<tr>'+
						 ' <td width="40" id="'+id_info+'_itmSlot53" height="20"><img style="display:block;" title="������ ���� ������ ������" src="http://'+top.c.img+'/i/items/w/w15.gif"></td>'+
						 ' <td width="40" id="'+id_info+'_itmSlot55" height="20"><img style="display:block;" title="������ ���� ����������� ������" src="http://'+top.c.img+'/i/items/w/w15.gif"></td>'+
						 ' <td width="40" id="'+id_info+'_itmSlot54" height="20"><img style="display:block;" title="������ ���� ����� ������" src="http://'+top.c.img+'/i/items/w/w15.gif"></td>'+
						'</tr>'+
						'<tr>'+
						 ' <td width="40" id="'+id_info+'_itmSlot56" height="20"><img style="display:block;" title="������ ���� �����" src="http://'+top.c.img+'/i/items/w/w20.gif"></td>'+
						 ' <td width="40" id="'+id_info+'_itmSlot57" height="20"><img style="display:block;" title="������ ���� �����" src="http://'+top.c.img+'/i/items/w/w20.gif"></td>'+
						  '<td width="40" id="'+id_info+'_itmSlot58" height="20"><img style="display:block;" title="������ ���� �����" src="http://'+top.c.img+'/i/items/w/w20.gif"></td>'+
						'</tr>'+
					  '</table></td>'+
				 ' </tr>'+
				'</table></td>'+
				'<td width="60" valign="top"><table width="60" border="0" cellspacing="0" cellpadding="0">'+
				'  <tr>'+
				'	<td height="20" id="'+id_info+'_itmSlot8"><img style="display:block;" title="������ ���� ������" src="http://'+top.c.img+'/i/items/w/w1.gif"></td>'+
				 ' </tr>'+
				 ' <tr>'+
				'	<td height="20" id="'+id_info+'_itmSlot9"><img style="display:block;" title="������ ���� ��������" src="http://'+top.c.img+'/i/items/w/w2.gif"></td>'+
				 ' </tr>'+
				 ' <tr>'+
					'<td height="20"><table width="60" border="0" cellspacing="0" cellpadding="0">'+
					'  <tr>'+
					'	<td width="20" id="'+id_info+'_itmSlot10" height="20"><img style="display:block;" title="������ ���� ������" src="http://'+top.c.img+'/i/items/w/w6.gif"></td>'+
					'	<td width="20" id="'+id_info+'_itmSlot11"><img style="display:block;" title="������ ���� ������" src="http://'+top.c.img+'/i/items/w/w6.gif"></td>'+
					'	<td width="20" id="'+id_info+'_itmSlot12"><img style="display:block;" title="������ ���� ������" src="http://'+top.c.img+'/i/items/w/w6.gif"></td>'+
					'  </tr>'+
					'</table></td>'+
				 ' </tr>'+
				 ' <tr>'+
				'	<td height="40" id="'+id_info+'_itmSlot13"><img style="display:block;" title="������ ���� ��������" src="http://'+top.c.img+'/i/items/w/w11.gif"></td>'+
				'  </tr>'+
				 ' <tr>'+
				'	<td height="60" id="'+id_info+'_itmSlot14"><img style="display:block;" title="������ ���� ���" src="http://'+top.c.img+'/i/items/w/w10.gif"></td>'+
				 ' </tr>'+
				 ' <tr>'+
				'	<td height="80" id="'+id_info+'_itmSlot16"><img style="display:block;" title="������ ���� ������" src="http://'+top.c.img+'/i/items/w/w19.gif"></td>'+
				 ' </tr>'+
				 ' <tr>'+
				'	<td height="40" id="'+id_info+'_itmSlot17"><img style="display:block;" title="������ ���� �����" src="http://'+top.c.img+'/i/items/w/w12.gif"></td>'+
				'  </tr>'+
				'</table></td>'+
			  '</tr>'+
			'</table>'+
		 ' </div>'+
		'</div>';
	}
}
var img4 = '';
var lst4 = 0;
var img1 = '';
var lst1 = 0;
var img10 = '';
var lst10 = 0;
var stl10 = [];
var hr = '<div align=\\\'center\\\' style=\\\'margin:4px;\\\'><img src=\\\'http://'+top.c.img+'/1x1.gif\\\' height=\\\'1\\\' width=\\\'111\\\' style=\\\'background-color:black;\\\'></div>';
function abitms(id_pers,uid,id,slot,name,title,img,clck)
{
	if(slot>=4 && slot<=6)
	{
		//img4 = img;
		if(slot==4 && lst4==0)
		{
			img4 = img;
			lst4 = 4;
		}else if(slot==5 && lst4<5)
		{
			img4 = img;
			lst4 = 5;
		}else if(slot==6 && lst4<6)
		{
			if( noplaw == undefined ) {
				noplaw = 0;
			}
			if( noplaw == 0 ) {
				img4 = img;
			}
			lst4 = 6;
		}
		stl4[id_pers][slot] = title;
		slot = 4;
		var ltt4 = '';
		if(stl4[id_pers][6]!='')
		{
			ltt4 += stl4[id_pers][6];
			if(stl4[id_pers][4]!='' || stl4[id_pers][5]!=''){ ltt4 += hr; }			
		}
		if(stl4[id_pers][5]!='')
		{
			ltt4 += stl4[id_pers][5];
			if(stl4[id_pers][4]!=''){ ltt4 += hr; }			
		}
		if(stl4[id_pers][4]!='')
		{
			ltt4 += stl4[id_pers][4];
		}
		title = ltt4;
		img = img4;
	}else if( slot == 1 || slot == 52 ) {
		img1 = img;
		if( slot == 1 && lst1 == 0 ) {
			img1 = img;
			lst1 = 1;
		}else if( slot == 52 && lst1 == 1 ) {
			img1 = img;
			lst1 = 52;
		}
		stl1[id_pers][slot] = title;
		slot = 1;
		var ltt1 = '';
		if(stl1[id_pers][52]!='')
		{
			ltt1 += stl1[id_pers][52];
			if(stl1[id_pers][1]!=''){ ltt1 += hr; }			
		}
		if(stl1[id_pers][1]!='')
		{
			ltt1 += stl1[id_pers][1];
		}
		title = ltt1;
		img = img1;
	}/*else if( slot == 10 || slot == 65 ) {
		if( img10 == '' ) {
			img10 = img;
		}
		if( slot == 10 && lst10 == 0 ) {
			if( img10 == '' ) {
				img10 = img;
			}
			lst10 = 10;
		}else if( slot == 65 && lst10 == 10 ) {
			img10 = img;
			lst10 = 65;
		}
		if( typeof stl10[id_pers] == 'undefined' ) {
			stl10[id_pers] = { 10:'',65:'' };
		}
		stl10[id_pers][slot] = title;
		slot = 10;
		var ltt10 = '';
		if(stl10[id_pers][65]!='')
		{
			ltt10 += stl10[id_pers][65];
			if(stl10[id_pers][10]!=''){ ltt10 += hr; }			
		}
		if(stl10[id_pers][10]!='')
		{
			ltt10 += stl10[id_pers][10];
		}
		title = ltt10;
		img = img10;
	}*/
	
	var itm = document.getElementById(id_pers+'_itmSlot'+slot);
	

	if(itm!=undefined)
	{
		if(clck != undefined && clck != '') {
			clck = 'cursor:pointer;" onclick="'+clck;
		}
		itm.innerHTML = '<img style="display:block;'+clck+'" src="http://'+top.c.img+'/i/items/'+img+'" onMouseOver="top.hi(this,\''+title+'\',event,3,1,1,1,\'\');" onMouseOut="top.hic();" onMouseDown="top.hic();">';
	}
}