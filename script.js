

	const buttons = document.querySelectorAll("button");
	buttons.forEach(button => {
		button.addEventListener("click", () => {
			const corpid = button.parentElement.getAttribute('corpid');
			const userId = button.parentElement.getAttribute('userId');
			console.log(corpid + ":" + userId);
			if (button.getAttribute('class') == 'icon') {
				copyText(corpid,userId);
			} else {
				action(corpid+"__"+userId);
			}					
		});
	});

  function action(corp)
  {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		let port = chrome.tabs.connect(tabs[0].id, { name: 'julius-connect' })
		// 相当于, 首先在当前选中的标签页, 创建一个服务器, name为 julius-connect 
		port.postMessage({ message: corp, type: 'changeCorp' });
		// 发送消息
	})     
  }
  
 
  
  function copyText(corpid,userId) {
 
	// text area
	const model = document.getElementById('copyText');
	const textArea = document.createElement('textArea');
	  var value = model.value;
	  value = value.replace('$CORPID',corpid);
	  value = value.replace('$USERID',userId);
	textArea.value = value;
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
  
		
