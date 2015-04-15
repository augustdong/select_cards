/**
 * 批处理构建前端代码
 * @author August Dong
 */

var path = require('path');
var childProcess = require('child_process');
var exec = childProcess.exec;

var prjCore = require('prj.core');
var prjConfig = prjCore.config;
var tasks = prjConfig.build;
var rootPath = prjConfig.path.rootPath;

var currentTaskName;

// format tasks
for (var key in tasks) {
  var task = tasks[key];
  for (var i = 0; i < task.length; i++) {
      task[i].cwd = path.resolve(rootPath, task[i].cwd);
  }
};

var run = function(cmd, cwd, cb, index) {
    console.log('task ' + index + ':\n');
    exec(cmd, {
        cwd: cwd
    }, function(error, stdout, stderr) {
        if (stdout != null && typeof stdout != 'undefined' && stdout != '') {
            console.log('stdout: ' + stdout);
        }
        if (stderr != null && typeof stderr != 'undefined' && stderr != '') {
            console.log('stderr: ' + stderr);
        }
        if (error != null) {
            console.log('exec error: ' + error + ' @ task '  + index + '\n');
            console.log(currentTaskName + ' build error\n');
            return;
        }
        cb && cb();
    });
};

var doTasks = function(tasks, taskName) {
    currentTaskName = taskName
    console.log('\n' + currentTaskName + ' start to build: ' + tasks.length + ' tasks\n');
    var taskList = tasks;
    var steps = taskList.length;
    var current = 0;
    var cb = function() {
        current++;
        if (current >= steps) {
            console.log(currentTaskName + ' build successfully\n');
            return;
        }
        run(taskList[current].cmd, taskList[current].cwd, cb, current);
    };
    run(taskList[current].cmd, taskList[current].cwd, cb, current);
};

var arg1 = process.argv[2];

if (arg1 in tasks) {
    doTasks(tasks[arg1], arg1);
} else {
    console.log('args error');
}
