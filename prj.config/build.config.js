/**
 * 批处理构建配置文件，想使用批处理构建功能，请在此文件配置
 * 
 * @author August Dong
 */

var tasks = {};

//////////////////////////////////////////////

// PC版本整体release构建
tasks.p_biz_release = [{
    cwd: 'src/p',
    cmd: 'grunt release'
}];
// PC版本整体debug构建
tasks.p_biz_debug = [{
    cwd: 'src/p',
    cmd: 'grunt debug'
}];

//////////////////////////////////////////////

module.exports = exports = tasks;