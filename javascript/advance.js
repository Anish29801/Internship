function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1500);
    });
}

fetchData().then(result => console.log(result));

async function getData() {
    try {
        const response = await fetchData();
        console.log("Using async/await:", response);
    } catch (error) {
        console.error("Error:", error);
    }
}
getData();

export function sayHello(user) {
    return `Hello, ${user}!`;
}


