<?php 
    header('Access-Control-Allow-Origin:*');
    $goods_data = file_get_contents('./home_goods.json');

    $good_arr = json_decode($goods_data);

    $type= $_GET['type'];
    $page= $_GET['page'];
    $arr = [];

    for($i=0;$i<count($good_arr);$i++){
        $is_type = $good_arr[$i] -> type;
        $is_page = $good_arr[$i] -> page;
        if($is_type == $type && $is_page == $page){

            $data_arr[] = $good_arr[$i];
        }

    }
    echo json_encode($data_arr,true);
?>