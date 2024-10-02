const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registrationContent = "";

// Read HTML files synchronously to ensure content is loaded before server starts
fs.readFile("./http-server/home.html", (err, home) => {
    if (err) {
        throw err;
    }
    homeContent = home;
});

fs.readFile("./http-server/project.html", (err, project) => {
    if (err) {
        throw err;
    }
    projectContent = project;
});

fs.readFile("./http-server/registration.html", (err, registration) => {
    if (err) {
        throw err;
    }
    registrationContent = registration;
});

const server = http.createServer((request, response) => {
    const url = request.url;
    response.writeHead(200, { "Content-Type": "text/html" });

    switch (url) {
        case "/project":
            response.write(projectContent);
            response.end();
            break;
        case "/registration":
            response.write(registrationContent);
            response.end();
            break;
        default:
            response.write(homeContent);
            response.end();
            break;
    }
});

// Start server and log to console
server.listen(5000, () => {
    console.log("Server is listening on port 3000");
});
