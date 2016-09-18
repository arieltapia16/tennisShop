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

    $query = $conn->prepare('SELECT a.description, a.code, a.price, a.stock, a.size,a.img,t.name, s.name as subcategory, c.name as category, t.name as trade FROM trades t, articles a, sub_categories s, categories c WHERE a.sub_category_id = s.id AND s.category_id = c.id AND a.trade_id = t.id');
    $query->execute();

    $result_articles = $query->fetchall(PDO::FETCH_OBJ);


    echo json_encode($result_articles);

}//get

if ($post) {

    $code = $_POST['code'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $trade_id = $_POST['trade_id'];
    $sub_category_id = $_POST['sub_category_id'];
    $img = $_POST['img'];
    $size = $_POST['size'];
    $stock = $_POST['stock'];

    $sql='INSERT INTO articles (code, description, price, trade_id, sub_category_id, img, size, stock)
            VALUES ( :code, :description, :price, :trade_id, :sub_category_id, :img, :size, :stock)';

    $query = $conn->prepare($sql);

    $query->bindParam(':code',$code);
    $query->bindParam(':description',$description);
    $query->bindParam(':price',$price);
    $query->bindParam(':trade_id',$trade_id);
    $query->bindParam(':sub_category_id',$sub_category_id);
    $query->bindParam(':img',$img);
    $query->bindParam(':size',$size);
    $query->bindParam(':size',$size);
    $query->bindParam(':stock',$stock);


    // print_r ($query);die();

    if ($query->execute()) {
        echo "Article added succesfully";
    }else {

    echo "Execute failed: (" . $query->errno . ") " . $query->error;
    }

}
