<?php
    header('content-type:text/html;charset=utf-8');
    include('./conn.php');
    // 接收用户数据
    $phone = $_REQUEST['username'];
    $password=$_REQUEST['psw'];

    $sql = "select * from members where u_phone='$phone' and u_pass='$password'";
    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        // echo '{"status":200,"msg":"登陆成功"}';
        echo "<script>alert('登陆成功');location.href='../html/home.html';</script>";
    }else{
        // echo '{"status":200,"msg":"用户名或密码不正确"}';
        echo "<script>alert('用户名或密码不正确');location.href='../html/login.html';</script>";
    }

    $mysqli->close();

?>