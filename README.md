README
 \n\n
 Online playable version: \n
 https://ninnyu.itch.io/dexter
 \n\n
 To run this code locally on your system:
 1. Download as a .zip file or clone the repository.
 2. Run a local web server. Any local web server system will do, I think. I used http-server for node.js https://www.npmjs.com/package/http-server . You need node.js installed to use it. https://nodejs.org/en/ .
    After installing node.js, open the command prompt. To install http-server, type: 
    <pre> <code> npm install http-server -g </code> </pre>
 3. In the command prompt, type:
    <pre> <code> http-server [path name] </code> </pre>
    Note: The path name is the address of the directory of whereever the repository is. For example, if it's in your desktop, it'll be C:\Users\[username]\Desktop\repos\Dexter so in the command prompt, you type:
    <pre> <code> http-server C:\Users\[username]\Desktop\repos\Dexter </code> </pre>
 4. Open a browser of your choice. I use Chrome. In the address bar, type:
    <pre> <code> http://localhost:8080/ </code> </pre>
    That should take you to the game.
