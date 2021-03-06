
// /**
// * Product onclick function
// *／
function doOnclick(id){
  window.location.href =  "productDetail.html?="+id;
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
    strHtml += "</div></div>";
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
  console.log(key)
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
