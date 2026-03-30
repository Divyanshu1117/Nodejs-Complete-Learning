const EventEmitter = require('events');

const event = new EventEmitter();

event.on('greet', () => {
    console.log("Hello Bro, event triggered!");
});

event.emit('greet');