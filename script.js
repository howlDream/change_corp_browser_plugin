

var btn = document.getElementById("xbbxing");  
var btnLizheng = document.getElementById("xbba5e1252285294c389a1cda11a5e1b2fb"); 
var btnLizheng001 = document.getElementById("lizheng001"); 
var copyBtn = document.getElementById("copyBtn"); 
btn.onclick =function(){    
	action('xbbxing');
}  
btnLizheng.onclick =function() {
	action('xbba5e1252285294c389a1cda11a5e1b2fb');
}
btnLizheng001.onclick =function() {
	action('xbblizheng001');
}

	 

  function action(corp)
  {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		let port = chrome.tabs.connect(tabs[0].id, { name: 'julius-connect' })
		// 相当于, 首先在当前选中的标签页, 创建一个服务器, name为 julius-connect 
		console.log(corp);
		port.postMessage({ message: corp, type: '1' });
		// 发送消息
	})     
  }
  
 
  
  function copyText() {
 
	// text area
	const model = document.getElementById('copyText');
	console.log(model.value);
	const textArea = document.createElement('textArea');
	textArea.value = model.value;
	// 使text area不在viewport，同时设置不可见
	textArea.style.position = 'absolute';
	textArea.style.opacity = '0';
	textArea.style.left = '-999999px';
	textArea.style.top = '-999999px';
	document.body.appendChild(textArea)
	textArea.focus();
	// 选中文本
	textArea.select(); 
	// 执行 copy 操作
	const successful = document.execCommand('copy'); 
	if (successful) {
		console.log("\n 复制成功");
	}
	textArea.remove();
   }
  
		
