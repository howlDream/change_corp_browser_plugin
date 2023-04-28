function change() {
	localStorage.setItem('corpid', 'xbbxing');
	localStorage.setItem('userId', 'xiao001');
	location.href = location.origin+'/#/';
	location.reload();
}

function changeCorp(corpid,userId) {
	localStorage.setItem('corpid', corpid);
	localStorage.setItem('userId', userId);
	location.href = location.origin+'/#/';
	location.reload();
}

chrome.extension.onConnect.addListener(function(port) {
		// 监听某个创建的名为julius-connect 的消息通道
		if(port.name == 'julius-connect') {
			port.onMessage.addListener(function(msg) {
			  if (msg.message == "xbbxing")
				// 小星星测试 公司
				changeCorp('xbbxing','xiao001');
			  else if (msg.message == "lizheng")
				// 李正的公司
				changeCorp('xbba5e1252285294c389a1cda11a5e1b2fb','1493661334632');
			  else if (msg.message == 'xbblizheng001')
				  // 李正的pro分公司
				changeCorp('xbblizheng001','1493661334633');
			});	 
		}
});