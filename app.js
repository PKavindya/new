const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('message logged', function(){
    console.log('Listener called');
});

emitter.on('message logged', function(){
    console.log('Listener called');
});

emitter.on('message logged', function(){
    console.log('Listener called');
});

emitter.on('message logged', function(){
    console.log('Listener called');
});
//Raise an event
emitter.emit('messageLogged');