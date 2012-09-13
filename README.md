# Demo Timer Sync

Simple demo app to start/stop a timer across multiple browsers/devices across a socket at the same time.

# Setup

App runs in node.js and can be installed and run with the following commands:

    brew install node
    curl https://npmjs.org/install.sh | sh

    cd demo-timer-sync
    npm install socket.io

    # run with
    node app.js

Browse to `http://127.0.0.1:3000/#master` (or your local IP if using other devices too). Drop off the `#master` to view purely as a client.