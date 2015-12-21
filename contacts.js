var friends = new Object();

friends.bill = { firstName: "Bill",
                 lastName: "Myers",
                 number: "123-456-7890",
                 address: ['one kings lane', 'SF', 'CA', '98123']
};

friends.steve = { firstName: "Steve",
                  lastName: "Wong",
                  number: "098-765-1234",
                  address: ['one kings lane', 'SF', 'CA', '9813']
};

var list = function(name) {
    for (var key in name) {
        console.log(key);
    }
};

var search = function(value) {
    for (var key in friends) {
        if (friends[key].firstName === value) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

list(friends);
search("Bill");
