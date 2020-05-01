<?php 
    header('Access-Control-Allow-Origin:*');
    $type = $_GET['type'];
    $page = $_GET['page'];
    $num = $_GET['num'];
    $goods_data = file_get_contents('./home_goods.json');

    $goods_arr = json_decode($goods_data);


    
    for($i=0;$i<count($goods_arr);$i++){
        $isType = $goods_arr[$i] -> type;
        $isPage = $goods_arr[$i] -> page;
        $isNum = $goods_arr[$i] -> num;
        if($isType == $type && $isPage == $page && $isNum == $num){

            $data_arr[] = $goods_arr[$i];
        }
    }
    echo json_encode($data_arr,true);
?>