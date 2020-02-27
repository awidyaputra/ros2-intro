# Introduction to ROS 2

This project aims to teach ROS 2 using a minimum-install environment.

One of the major problems in teaching ROS is that it requires a laborious installation process. This scares off a lot of people especially those that are used to a Windows or Mac environment.

My solution is to package the program using web technology. That way we can focus on teaching core concepts such as publisher-subscriber. An additional bonus in using web technology is that it allows us to build a cross-platform GUI.

## How to install

Note: I've only tested on [Ubuntu 18.04](http://releases.ubuntu.com/18.04/).

### Prerequisites

1. Install [ROS 2 Dashing](https://index.ros.org/doc/ros2/Installation/Dashing/).
2. Install Node 10 using [nvm](https://github.com/nvm-sh/nvm). Node 10 is chosen because the ROS Client Library ([rclnodejs](https://github.com/RobotWebTools/rclnodejs)) will break using a later version.
3. (Optional) Install [pnpm](https://pnpm.js.org/).

### Installation

1. Clone this repository.
2. Source your ROS 2 setup script.
3. Run `pnpm install`.

## Running the program

- Go to the project's root directory.
- Source ROS 2.
- Run `pnpm start`. Open localhost:5000 in your browser.
- Open another terminal. Run `node src/server.js`.
- Open another terminal. Source ROS 2. Run `node src/subscription-example.js`.
- Open another terminal. Source ROS 2. Run `ros2 topic pub /sub_example_topic std_msgs/msg/String '{data: "goodbye"}'`.
- You should see the words in your browser change to 'goodbye'.
- This example shows how we can connect a ROS node with a browser frontend using socketio as the message broker.

## TODO

- Dockerize project.
- Consider using ElectronJS. Note there might
