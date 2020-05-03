<?php 
    header('Access-Control-Allow-Origin:*');
    $goods_data = file_get_contents('./mini_base.json');

    $goods_arr = json_decode($goods_data);

    $type= $_GET['type'];
    $page= $_GET['page'];

    for($i=0;$i<count($goods_arr);$i++){
        $isType = $goods_arr[$i] -> type;
        $isPage = $goods_arr[$i] -> page;
        if($isType == $type && $isPage == $page){

            $data_arr[] = $goods_arr[$i];
        }

    }
    echo json_encode($data_arr,true);
?>