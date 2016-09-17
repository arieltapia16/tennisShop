<?php header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
include "db.php";

$get=false;
$post=false;
$put=false;


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $post=true;
}
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $put=true;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $get=true;
}

if ($get) {

    $query = $conn->prepare('SELECT name  FROM categories');
    $query->execute();

    $result_cat = $query->fetchAll();


    foreach ($result_cat as $category) {
        $categories[] = $category['name'];
    }


    $query = $conn->prepare('SELECT s.name , c.name as category FROM sub_categories s , categories c WHERE s.category_id = c.id');
    $query->execute();

    $result_sub_cat = $query->fetchAll();

    $subcategories=[];
    foreach ($result_sub_cat as $subcategory ) {
        $subcategories[] = ['name' => $subcategory['name'], 'category' => $subcategory['category'] ];
    }

    $subcategories_array=[];
    foreach ($categories as $item ) {
        $sc =  array('category' => $item ,'items' => []);

        foreach ($subcategories as $sub) {
            if ($sub['category']==$item) {
                array_push($sc['items'], $sub['name']);
            }
        }

        array_push($subcategories_array , $sc);
    }
    echo json_encode($subcategories_array);
}
