<?php
defined('GAME', true);
// ����� �������� ������ 
$dbgo = mysql_connect('localhost','like','23wesdxc');
mysql_select_db('like',$dbgo);
mysql_query('SET NAMES cp1251');
/*$dbgo = mysql_connect('localhost','root','');
mysql_select_db('crazy',$dbgo);
mysql_query('SET NAMES cp1251');*/

$user = mysql_fetch_array(mysql_query('SELECT * FROM `users` WHERE `login`= "'.mysql_real_escape_string($_COOKIE['login']).'" AND `pass`= "'.mysql_real_escape_string($_COOKIE['pass']).'"'));
if(!isset($user['id'])) {
	die('�������� �� ������!');
}


$obraz = 0;
$clan_img = 0;
//��������� ������
$money2 = 0;
if($_GET['type']==1){
  $obraz = 1;
  $money2 = 9.99;
}elseif($_GET['type']==2){
  $clan_img = $user['clan'];
  $money2 = 24.99;
}
elseif($_GET['type']==3){
  $animal_img = 1;
  $obraz = 3;
  $money2 = 4.99;
}
$bank = mysql_fetch_array(mysql_query('SELECT * FROM `bank` WHERE `uid`= "'.$user['id'].'"'));
//print_r($_FILES);
if($bank['money2'] >= $money2){
  if(isset($_FILES)){
      $uploaddir = '../../clan_prw';
      //@mkdir("uploads", 0777);
      $uploadfile =$uploaddir."/".basename($_FILES['filename']['name']);
      //echo $uploadfile;
      //print_r($_FILES);
      
      if($_FILES['filename']['type'] != "image/gif") {
         echo "��������� ����� ������ GIF �����������";
         exit;
      }
      else{
          if($_FILES["filename"]["size"] > 400000)
          {
              echo ("������ ����� ��������� 40 ��");
              exit;
          }
          else{
             // ��������� �������� �� ����
              if(is_uploaded_file($_FILES["filename"]["tmp_name"]))
              {
                  // ���� ���� �������� �������, ���������� ���
                  // �� ��������� ���������� � ��������
                  if($_GET['type']==1){
                    if(move_uploaded_file($_FILES["filename"]["tmp_name"], $uploadfile)){
                      echo "���� ������ ���������� �� ���������";
                      mysql_query('INSERT INTO `reimage`
                        ( `uid`,`login`,`src`,`type`,`clan`,`money2` ) VALUES
                        (
                          "'.$user['id'].'",
                          "'.mysql_real_escape_string($user['login']).'",
                          "'.$_FILES['filename']['name'].'",
                          "'.$obraz.'",
                          "'.$clan_img.'",
                          "'.$money2.'"
                        )');
                      mysql_query('UPDATE `bank` SET `money2` = `money2` - '.$money2.' WHERE `uid` = "'.$user['id'].'" LIMIT 1');
                    }
                  }
                  elseif($_GET['type']==2){
                    if($user['clan_prava'] =="glava"){
                      if(move_uploaded_file($_FILES["filename"]["tmp_name"], $uploadfile)){
                      echo "���� ������ ���������� �� ���������";
                      mysql_query('INSERT INTO `reimage`
                        ( `uid`,`login`,`src`,`type`,`clan`,`money2` ) VALUES
                        (
                          "'.$user['id'].'",
                          "'.mysql_real_escape_string($user['login']).'",
                          "'.$_FILES['filename']['name'].'",
                          "'.$obraz.'",
                          "'.$clan_img.'",
                          "'.$money2.'"
                        )');
                      mysql_query('UPDATE `bank` SET `money2` = `money2` - '.$money2.' WHERE `uid` = "'.$user['id'].'" LIMIT 1');
                      }
                    }
                    else{
                      echo "��������� �������� ����� ����� ������ ����� �����";
                    }
                  }
                  elseif($_GET['type']==3){
                      if(move_uploaded_file($_FILES["filename"]["tmp_name"], $uploadfile)){
                        echo "���� ������ ���������� �� ���������";
                        mysql_query('INSERT INTO `reimage`
                          ( `uid`,`login`,`src`,`type`,`clan`,`money2` ) VALUES
                          (
                            "'.$user['id'].'",
                            "'.mysql_real_escape_string($user['login']).'",
                            "'.$_FILES['filename']['name'].'",
                            "'.$obraz.'",
                            "'.$clan_img.'",
                            "'.$money2.'"
                          )');
                        mysql_query('UPDATE `bank` SET `money2` = `money2` - '.$money2.' WHERE `uid` = "'.$user['id'].'" LIMIT 1');
                      }
                  }
                  else{
                    echo("������ �������� ������");
                  }
             } else {
                echo("������ �������� ������");
             }
         }
      }
  }
}else{
  echo "� ��� ������������ �������.";
}
?>