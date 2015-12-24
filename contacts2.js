var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	};
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (contacts[i].lastName == lastName) {
            printPerson(contacts[i]);
        };
    };
}

function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
    };
}

//search("Jones");
var stan = contacts[contacts.length + 1];
add("Stan", "Lee", "sl@ya.com", "569-234-9090");
list()
