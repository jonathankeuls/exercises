function isSameUser(user1, user2) {
    user1 = {name: "Johan", email: "johan.efternam@gmail.com"}
    user2 = {name: "Peter", email: "peter.efternam@gmail.com"}
    return user1.email === user2.email
}

console.log(isSameUser())