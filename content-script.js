/*修改此文件需要重新安装和重启浏览器*/

function change() {
	localStorage.setItem('corpid', 'xbbxing');
	localStorage.setItem('userId', 'xiao001');
	location.href = location.origin+'/#/';
	location.reload();
}

function changeCorp(corpid,userId) {
	console.log(corpid+"_" + userId);
	localStorage.setItem('corpid', corpid);
	localStorage.setItem('userId', userId);
	location.href = location.origin+'/#/';
	location.reload();
}

chrome.extension.onConnect.addListener(function(port) {
		// 监听某个创建的名为julius-connect 的消息通道
		if(port.name == 'julius-connect') {
			port.onMessage.addListener(function(msg) {
			  var cu = msg.message.split("__");
			  changeCorp(cu[0],cu[1]);
			});	 
		}
});