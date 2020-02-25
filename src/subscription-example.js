'use strict';

const rclnodejs = require('rclnodejs');
const io = require('socket.io-client')

const socket = io("http://localhost:3000")

rclnodejs.init().then(() => {
  const node = rclnodejs.createNode('subscription_example_node');

  node.createSubscription('std_msgs/msg/String', 'sub_example_topic', msg => {
    console.log(`Received message: ${msg.data}`);
    socket.emit('subMessage', {msg: msg.data})
  });

  rclnodejs.spin(node);
});
