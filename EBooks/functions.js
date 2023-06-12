function register_close()
{
  $(document).ready(function(){
  $("#login").modal("show");
  $("#register").modal("hide");
});
}
function login_close()
{
  $(document).ready(function(){
  $("#register").modal("show");
  $("#login").modal("hide");
});
}
function buy_product(){
    location.href="buy_product.html";
}
function return_home(){
    location.href="index.html";
}
function add_to_cart(){
  document.getElementById("cart_no").innerHTML++;
  $(document).ready(function(){
  $("#add_success").modal("show");
  $("#ed_1").modal("hide");
  $("#ed_2").modal("hide");
  });
}