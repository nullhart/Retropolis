var EventEmitter = require('events');
var sys = require('util')
var exec = require('child_process').exec;
var child;







function Launcher(Emulator, ROM) {
    var commandRun = "open /Applications/" + Emulator + ".app " + "'" + ROM + "'";
    child = exec(commandRun, function(error, stdout, stderr) {
        console.log("Launching: " + ROM + "| with |" + Emulator)
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });

}







Launcher("Snes9x", "/Users/blakemastrud/Downloads/Super\ Mario\ World\ \(USA\).sfc");


function kill() {
    exec("pkill Snes9x", function(error, stdout, stderr) {
        console.log('Process Killed')
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
}

setTimeout(kill, 30000);