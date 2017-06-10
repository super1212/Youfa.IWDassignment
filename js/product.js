// /**
// * Product onclick function
// *／
function doOnclick(id){
  var myItems = window.location.href.split("/");
  var myLink = "";
  $.each(myItems, function(index, item){
    if(index < myItems.length-1){
      myLink += "/" + item;
    }
  });
  alert(myLink)
  myLink = myLink.substr(1,myLink.length);
  window.location.href =  myLink + "/productDetail.html?="+id;
}
// /**
// *@desc: Create the html code of every product
// *@param: item, json object
// *@return: return the html code of the product.
// *／
function createItem(item){
    //create new elements
    var strHtml = "<div class='event_div' id='" + item.id + "' onclick=doOnclick('"+item.id+"')>";
    strHtml += "<div class='event_div_header'>";
    strHtml +=  "<img src='images/books/"+item.id+".jpg'>";
    strHtml +=  "</div>";
    strHtml += "<div class='event_text'>";
    strHtml +=    "<div class='event_text_header'>";
    strHtml +=     "<p><b>Title</b>: "+item.title+"</p>";
    strHtml +=     "<p><b>Category</b>: "+item.category+"</p>";
    strHtml +=    "</div>";
    strHtml +=    "<div class='event_text_content'><b>Price</b>: $" + item.price+ "</div>";
    strHtml += "</div></a></div>";
    return strHtml;
}
//
// /**
// *@desc: Create the html code of filter
// *@param: categoryCache, the cache of category, key is the title of category, value is the num of this category
// *@return: return the html code of the every filter.
// *／
function loadFilter(categoryCache){
    var strHtml = "<h3>Filters</h3>";
    strHtml += "<br>";
    for (var key in categoryCache){
      strHtml += "<a  onclick=filter('"+key+"')>"+ key+"("+categoryCache[key]+")</a><hr>"
    }
    return strHtml;
}
// ／**
// *@desc: filter function, it is used to Control the display of products, loop every product, and check the catetory.
// *@param: key, the name of category
// *@return: void
// *／
function filter(key){
    $.each(products, function(index, item){
    // for (var mykey in productCache){
    // console.log(item.title);
        if(item.category == key || "All" == key){
          document.getElementById(item.id).style.display = '';
        }else{
          document.getElementById(item.id).style.display = 'none';
        }
    });

}


function showCartNum(){
		var myValue = $.cookie("bookstore");
		if(myValue != null){
				myValue = $.parseJSON(myValue);
				var num = myValue.length;
				if(num > 0){
					$("#cartNum").html("(" + num + ")");
				}
		}
}

function addToCart(productItem){
		var myValue = $.cookie('bookstore');
    var isNew = 0;
		if(myValue != null){
				myValue = $.parseJSON(myValue);
				$.each(myValue, function(index, item){
            if(item.id == productItem.id){
              item.quantity += 1;
              isNew = 1;
            }
        });
		}else{
      myValue = [];
    }
    if(isNew == 0){
        var myPro = {
          "id": productItem.id,
          "title": productItem.title,
          "quantity": 0,
          "price": productItem.price
        }
        alert(JSON.stringify(myPro))
        myValue.push(myPro);
    }
    console.log(JSON.stringify(myValue));
    $.cookie("bookstore", JSON.stringify(myValue));
    $("#cartNum").html('('+ myValue.length +')');
}
function setCartData(){
  var myValue = $.cookie('bookstore');
  var num = 0;
  if(myValue != null){
      myValue = $.parseJSON(myValue);
      num = myValue.length;
  }
  $("#cartNum").html('('+ num +')');
}
