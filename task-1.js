import users from '../users.js';
//for(let user of users){
//    console.log(user.name);
//}

console.log('Task 1');
users.forEach(function(el){
    console.log(el.name);
});

console.log('Task 2');
const getUsersWithEyeColor = (users, eyeColor) => users.filter((el) => el.eyeColor === eyeColor)
console.log(getUsersWithEyeColor(users, 'blue'));

console.log('Task 3');
const getUserWithGender = (users, gender) => users.filter(el => el.gender === gender)
console.log(getUserWithGender(users, 'male'));

console.log('Task 4');
const getInactiveUsers = users => users.filter(el => el.isActive === false)
console.log(getInactiveUsers(users));

console.log('Task 5');
const getUserWithEmail = (users, email) => users.find(el => el.email === email)
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

console.log('Task 6');
const getUsersWithAge = (users, min, max) => users.filter(el => (el.age >= min && el.age <= max))
console.log(getUsersWithAge(users, 20, 30)); 
console.log(getUsersWithAge(users, 30, 40));

console.log('Task 7');
const calculateTotalBalance = users => users.reduce((acc, el) => acc + el.balance, 0);
console.log(calculateTotalBalance(users));

console.log('Task 8');
const getUsersWithFriend = (users, friendName) => users.filter(el => el.friends.some(elel => elel === friendName));
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

console.log('Task 9');
const fi = [];
const getNamesSortedByFriendsCount = users => {
    users.sort((userPrev, userNext) => userPrev.friends.length - userNext.friends.length);
    const users2 = [];
    users.forEach(user => {
        users2.push(user.name);
    });
    return users2;
}
console.log(getNamesSortedByFriendsCount(users));

// Моя версия
// console.log('Task 10');
// const skillsUsers = [];
// const getSortedUniqueSkills = users => users.map(((user) => {
//     for(let i = 0; i < user.skills.length; i += 1){
//         (skillsUsers.includes(user.skills[i]) === false) ? skillsUsers.push(user.skills[i]) : console.log('Этот скилл уже есть', user.skills[i]);
//     }
//     return skillsUsers.sort();
// }));
// console.log(getSortedUniqueSkills(users));

// Версия Дениса
const getSortedUniqueSkills = users => {
    const sortedSkills = users
      .reduce((acc, { skills }) => [...acc, ...skills], []);
  
    return (sortedSkills);
  };
  
  console.log('Задание 10');
  console.log(getSortedUniqueSkills(users));