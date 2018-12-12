/*公共js*/
document.write('<script type="text/javascript" src="../js/jquery-3.1.0.min.js"></script>');
//document.write('<script type="text/javascript" src="../js/jquery.json-2.4.min.js"></script>');
document.write('<script type="text/javascript" src="../js/echarts/echarts.min.js"></script>');
document.write('<script type="text/javascript" src="../js/highcharts/highcharts.js"></script>');
/*公共地图js*/
document.write('<script type="text/javascript" src="../js/maps/china.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/shandong.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/anhui.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/aomen.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/beijing.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/chongqing.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/fujian.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/gansu.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/guangdong.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/guangxi.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/guizhou.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/hainan.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/hebei.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/heilongjiang.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/henan.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/hubei.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/hunan.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/jiangsu.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/jiangxi.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/jilin.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/liaoning.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/neimenggu.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/ningxia.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/qinghai.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/shandong.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/shanghai.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/shanxi.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/shanxi1.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/sichuan.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/tianjin.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/xizang.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/xianggang.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/xinjiang.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/zhejiang.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/yunnan.js"></script>');
document.write('<script type="text/javascript" src="../js/maps/taiwan.js"></script>');
/*socket*/
//document.write('<script type="text/javascript" src="../js/sockjs.min.js"></script>');
//document.write('<script type="text/javascript" src="../js/stomp.js"></script>');

/***
 * 格式化Echarts坐标换行显示
 * @param params
 * @param number
 * 		 	每行个数
 * @returns {String}
 */
function formatterEcharts(params,number){
	var newParamsName = "";// 最终拼接成的字符串
	var paramsNameNumber = params.length;// 实际标签的个数
	var provideNumber = number;// 每行能显示的字的个数
	var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
	/**
	 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
	 */
	// 条件等同于rowNumber>1
	if (paramsNameNumber > provideNumber) {
		/** 循环每一行,p表示行 */
		for ( var p = 0; p < rowNumber; p++) {
			var tempStr = "";// 表示每一次截取的字符串
			var start = p * provideNumber;// 开始截取的位置
			var end = start + provideNumber;// 结束截取的位置
			// 此处特殊处理最后一行的索引值
			if (p == rowNumber - 1) {
				// 最后一次不换行
				tempStr = params.substring(start, paramsNameNumber);
			} else {
				// 每一次拼接字符串并换行
				tempStr = params.substring(start, end) + "\n";
			}
			newParamsName += tempStr;// 最终拼成的字符串
		}

	} else {
		// 将旧标签的值赋给新标签
		newParamsName = params;
	}
	//将最终的字符串返回
	return newParamsName;
}

/*
if(window.outerWidth < 3000){
	alert(window.outerWidth)
	$("body").css("overflow","auto");
}else{
	$("body").css("overflow","hidden");
}*/

//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
//例子： 
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
 var o = {
     "M+": this.getMonth() + 1, //月份 
     "d+": this.getDate(), //日 
     "h+": this.getHours(), //小时 
     "m+": this.getMinutes(), //分 
     "s+": this.getSeconds(), //秒 
     "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
     "S": this.getMilliseconds() //毫秒 
 };
 if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
 for (var k in o)
 if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
 return fmt;
}