#7.3-chatroom

Another Backbone project. This application is a chat app where the user adds a username and all of the posts the user makes show that username. There is no password associated with the username and the username holds no other data. This project also makes use of Backbone Views to switch between the login page and posts list


# frontend-scaffolding

#### How to get started

1. Start your own project folder with a git clone then git init

    ```sh
    cd ~/Code/
    hub clone jacobthemyth/frontend-scaffolding NEWPROJECT
    cd NEWPROJECT
    rm -rf .git
    git init
    git add .
    git commit -m "Initial commit"
    ```

2. Install prerequisites

    ```sh
    npm install
    bower install
    ```

3. Start watching for changes and develop it!

    ```sh
    gulp
    ```

4. Ready to push your code to GitHub Pages?

    ```sh
    # build production assets
    gulp deploy
    ```

#### Testing

- To write tests, create `.js` files in the `tests` directory. There is a sample `hello-test.js` to help you get started.
- To run tests, open http://localhost:3000/tests in your browser

#### License

MIT.
