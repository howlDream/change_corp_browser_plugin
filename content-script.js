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


// V3版本使用runtime.onConnect替代extension.onConnect
chrome.runtime.onConnect.addListener(function(port) {
    if(port.name === 'julius-connect') {
        port.onMessage.addListener(function(msg) {
            // 增加消息类型校验
            if(msg.type === 'changeCorp' && msg.message) {
                const cu = msg.message.split("__");
                if(cu.length === 2) {
                    changeCorp(cu[0], cu[1]);
                }
            }
        });
        
        // 建议添加断开连接处理
        port.onDisconnect.addListener(() => {
            console.log('Port disconnected');
        });
    }
});

// 新增：通过runtime.onMessage实现双向通信
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === 'changeDefault') {
        change();
        sendResponse({status: 'success'});
    }
    return true; // 保持消息通道开放用于sendResponse
});


//chrome.extension.onConnect.addListener(function(port) {
		// 监听某个创建的名为julius-connect 的消息通道
//		if(port.name == 'julius-connect') {
//			port.onMessage.addListener(function(msg) {
//			  var cu = msg.message.split("__");
//			  changeCorp(cu[0],cu[1]);
//			});	 
//		}
//});
