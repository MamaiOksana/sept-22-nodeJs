const event = require ('node:events');

const eventEmitter = new event();

eventEmitter.on('click', ()=>{
    console.log('Click, click');
});

eventEmitter.emit('click')
eventEmitter.emit('click')

