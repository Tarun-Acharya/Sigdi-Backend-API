
var customers = [
{
  "customer_id": "ajkdfb4812afg664jkh",
  "name": "Kumar Ankit",
  "phone_number": 8686959744,
  "email_id": "ankitkumarak901@gmail.com",
  "location": "home",
  "address_book": {
      "home": "17.4521191,78.4224986",
      "office": "52.4343242,-1.32324"
  },
  "orders": [{
      "order_id": "1",
      "transaction_id": "sblkkjlkhjh",
      "order": {
          "roti": "5",
          "dal": "1"
      },
      "cost": "120",
      "time_stamp": "12:40pm, 2nd October, 2020",
      "seller_id": "abcdefghijklmnop123",
      "seller_name": "Lata's kitchen",
      "delivery_guy_id": "qwertyuiopasdf098",
      "delivery_guy_name": "Ramesh biba"
  }],
  "reviews": [{
      "order_id": "1",
      "review_id": "1",
      "seller_id": "abcdefghijklmnop123",
      "seller_name": "Lata's kitchen",
      "rating": "4",
      "comment": "Great chef, you must try dal"
  }],
  "payments": [{
      "order_id": "1",
      "transaction_id": "sblkkjlkhjh",
      "time_stamp": "12:40pm, 2nd October, 2020",
      "cost": "120"
  }]
},
{
    "customer_id": "kjhfdkjsdanlkfjnsa",
    "name": "Kumar Ankit",
    "phone_number": 8686959744,
    "email_id": "ankitkumarak901@gmail.com",
    "location": "home",
    "address_book": {
        "home": "52.4343242,-1.32324",
        "office": "52.4343242,-1.32324"
    },
    "orders": [{
        "order_id": "1",
        "transaction_id": "sblkkjlkhjh",
        "order": {
            "roti": "5",
            "dal": "1"
        },
        "cost": "120",
        "time_stamp": "12:40pm, 2nd October, 2020",
        "seller_id": "abcdefghijklmnop123",
        "seller_name": "Lata's kitchen",
        "delivery_guy_id": "qwertyuiopasdf098",
        "delivery_guy_name": "Ramesh biba"
    }],
    "reviews": [{
        "order_id": "1",
        "review_id": "1",
        "seller_id": "abcdefghijklmnop123",
        "seller_name": "Lata's kitchen",
        "rating": "4",
        "comment": "Great chef, you must try dal"
    }],
    "payments": [{
        "order_id": "1",
        "transaction_id": "sblkkjlkhjh",
        "time_stamp": "12:40pm, 2nd October, 2020",
        "cost": "120"
    }]
  }];

  var sellers = [
    {
        "seller_id": "zkbkjsdnfklmssdfs",
        "name": "Pumbi's Kitchen",
        "profile_picture": "https://www.picture.com",
        "cover_picture": "https://www.picture.com",
        "phone_number": 8686959744,
        "email_id": "pumbixzy901@gmail.com",
        "location": "17.436753,78.439060",
        "rating": 4,
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eni celerisque id id.",
        "open": true,
        "currently_available": [{
            "dish_name": "dal",
            "dish_id": "2345",
            "img_link": "https:///www.lkhnsjn.com/",
            "cost": 80,
            "veg": true,
            "availability": true,
            "stock": 2,
            "tags": [0, 1, 0]
        }],
        "pre_order": [{
            "dish_name": "dal",
            "dish_id": "2345",
            "img_link": "https:///www.lkhnsjn.com/",
            "cost": 80,
            "veg": true,
            "availability": true,
            "time_to_cook": 30,
            "limit": 5,
            "tags": [0, 0, 1]
        }],
        "orders": [{
            "order_id": "1",
            "order": {
                "roti": "5",
                "dal": "1"
            },
            "cost": 120,
            "time_stamp": "12:40pm, 2nd October, 2020",
            "customer_id": "ajkdfb4812afg664jkh",
            "customer_name": "Kumar Ankit",
            "delivery_guy_id": "qwertyuiopasdf098",
            "delivery_guy_name": "Ramesh biba"
        }],
        "reviews": [{
            "order_id": "1",
            "review_id": "1",
            "customer_id": "ajkdfb4812afg664jkh",
            "customer_name": "Kumar Ankit",
            "rating": 4,
            "comment": "Great chef, you must try dal"
        }],
        "settelments": [{
            "transaction_id": "sblkkjlkhjh",
            "time_stamp": "12:40pm, 2nd October, 2020",
            "cost": 2000
        }],
        "notifications": [{
            "header": "Yoho Whatsapp",
            "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "time_stamp": "12:40pm, 2nd October, 2020",
            "tags": [0, 0, 0, 1]
        }]
    },
    {
    "seller_id": "foidja3klmnop123",
    "name": "Lata's Kitchen",
    "profile_picture": "https://www.picture.com",
    "cover_picture": "https://www.picture.com",
    "phone_number": 8686959744,
    "email_id": "ankitkumarak901@gmail.com",
    "location": "17.454569,78.423380",
    "rating": 4,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eni celerisque id id.",
    "open": true,
    "currently_available": [{
        "dish_name": "dal",
        "dish_id": "2345",
        "img_link": "https:///www.lkhnsjn.com/",
        "cost": 80,
        "veg": true,
        "availability": true,
        "stock": 2,
        "tags": [0, 1, 0]
    }],
    "pre_order": [{
        "dish_name": "dal",
        "dish_id": "2345",
        "img_link": "https:///www.lkhnsjn.com/",
        "cost": 80,
        "veg": true,
        "availability": true,
        "time_to_cook": 30,
        "limit": 5,
        "tags": [0, 0, 1]
    }],
    "orders": [{
        "order_id": "1",
        "order": {
            "roti": "5",
            "dal": "1"
        },
        "cost": 120,
        "time_stamp": "12:40pm, 2nd October, 2020",
        "customer_id": "ajkdfb4812afg664jkh",
        "customer_name": "Kumar Ankit",
        "delivery_guy_id": "qwertyuiopasdf098",
        "delivery_guy_name": "Ramesh biba"
    }],
    "reviews": [{
        "order_id": "1",
        "review_id": "1",
        "customer_id": "ajkdfb4812afg664jkh",
        "customer_name": "Kumar Ankit",
        "rating": 4,
        "comment": "Great chef, you must try dal"
    }],
    "settelments": [{
        "transaction_id": "sblkkjlkhjh",
        "time_stamp": "12:40pm, 2nd October, 2020",
        "cost": 2000
    }],
    "notifications": [{
        "header": "Yoho Whatsapp",
        "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        "time_stamp": "12:40pm, 2nd October, 2020",
        "tags": [0, 0, 0, 1]
    }]
},
    {
        "seller_id": "skjfhkjdxhbdf",
        "name": "Radha's Kitchen",
        "profile_picture": "https://www.picture.com",
        "cover_picture": "https://www.picture.com",
        "phone_number": 8686959744,
        "email_id": "radhajain901@gmail.com",
        "location": "17.435008,78.475336",
        "rating": 4,
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eni celerisque id id.",
        "open": true,
        "currently_available": [{
            "dish_name": "dal",
            "dish_id": "2345",
            "img_link": "https:///www.lkhnsjn.com/",
            "cost": 80,
            "veg": true,
            "availability": true,
            "stock": 2,
            "tags": [0, 1, 0]
        }],
        "pre_order": [{
            "dish_name": "dal",
            "dish_id": "2345",
            "img_link": "https:///www.lkhnsjn.com/",
            "cost": 80,
            "veg": true,
            "availability": true,
            "time_to_cook": 30,
            "limit": 5,
            "tags": [0, 0, 1]
        }],
        "orders": [{
            "order_id": "1",
            "order": {
                "roti": "5",
                "dal": "1"
            },
            "cost": 120,
            "time_stamp": "12:40pm, 2nd October, 2020",
            "customer_id": "ajkdfb4812afg664jkh",
            "customer_name": "Kumar Ankit",
            "delivery_guy_id": "qwertyuiopasdf098",
            "delivery_guy_name": "Ramesh biba"
        }],
        "reviews": [{
            "order_id": "1",
            "review_id": "1",
            "customer_id": "ajkdfb4812afg664jkh",
            "customer_name": "Kumar Ankit",
            "rating": 4,
            "comment": "Great chef, you must try dal"
        }],
        "settelments": [{
            "transaction_id": "sblkkjlkhjh",
            "time_stamp": "12:40pm, 2nd October, 2020",
            "cost": 2000
        }],
        "notifications": [{
            "header": "Yoho Whatsapp",
            "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "time_stamp": "12:40pm, 2nd October, 2020",
            "tags": [0, 0, 0, 1]
        }]
    }];
  
function getCustomerDB(id){
    for(let i=0;i<customers.length;i++)
    {
        if(id===customers[i].customer_id)
        {
            return customers[i];
        }
    }
}
function getSellersDB(id){
    for(let i=0;i<sellers.length;i++)
    {
        if(id===sellers[i].seller_id)
        {
            return sellers[i];
        }
    }
}
function getSellerInfo(id){
    for(let i=0;i<sellers.length;i++)
    {
        if(id===sellers[i].seller_id)
        {
            return sellers[i];
        }
    }
}
function getSellersPreview(id){
    var customer = customers.filter((customer)=>customer.customer_id===id)[0];
    return sellers.map((seller)=>({id:seller.id,
         name: seller.name,
         profile_picture:seller.profile_picture,
         cover_picture:seller.cover_picture,
         location:seller.location,
         rating:seller.rating,
         about:seller.about,
         open:seller.open,
         distance: getDistance(seller.location,customer.address_book[customer.location]).toFixed(2),
         ETA:Math.ceil(getDistance(seller.location,customer.address_book[customer.location])*5+5)
        }));
}

function deg2rad(deg) {
    return deg * (Math.PI/180);
  }
  
function getDistance(sellerLoc,customerLoc){
    lat1= parseFloat(sellerLoc.split(",")[0]);
    lon1= parseFloat(sellerLoc.split(",")[1]);
    lat2= parseFloat(customerLoc.split(",")[0]);
    lon2= parseFloat(customerLoc.split(",")[1]);
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    
    return d;
}



module.exports = {getSellersDB,getCustomerDB,getSellersPreview,getSellerInfo};