
const addon = require('../native_modules/build/Release/addon.node');

export default class Connect {
    constructor(ipc) {
        this.ipc = ipc;
        console.log("Connect INIT")
    }

    init = () => {
        this.ipc.on('ping', (e) => {
            e.sender.send('pong')
        })
        
        this.ipc.on('create-exception', (e) => {
            try {
                console.log(addon.hello());
            }
            catch(err) {
                e.sender.send('exception-catch-ok', false)
            }
            
            e.sender.send('exception-catch-ok', true)
        })
    }
 }