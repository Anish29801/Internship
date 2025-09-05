const person = {
    firstName: "Anish",
    lastName: "Agrawal",
    skills: ["JS", "HTML", "CSS"],
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const hobbies = ["Reading", "Gaming", "Traveling"];
const allInterests = [...person.skills, ...hobbies];
console.log("All Interests:", allInterests);

const heading = document.createElement("h1");
heading.textContent = `Welcome, ${person.fullName()}!`;
document.body.appendChild(heading);

const list = document.createElement("ul");
allInterests.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});
document.body.appendChild(list);
