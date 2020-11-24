import router from '@/router'
import ui from './ui'
import api from '@/api'

const NAVS_ROUTES = [
	'/pages/index/index',
	'/pages/aboutMy/aboutMy',
	'/pages/map/map',
	'/pages/leaveWorld/leaveWorld',
	'/pages/cart/index'
]
  export const imgSrcReplace=(htmlstr)=> {
      let regex3 = new RegExp(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi);
      let domainURL = "http://www.baidu.com/";
      let htmlstr1 = htmlstr.replace(regex3, function (match, capture) {
        // let tmp = capture.split(domainURL + "");
        // capture = "http://www.amei.com" + tmp[1];
        var newStr = "<img src='" + 'https:'+capture+ "'/>";
        return newStr;
      });
      regex3 = null;
      return htmlstr1;
    }

// String.prototype.myReplace=function(f,e){
//     var reg=new RegExp(f,"g");   
//     return this.replace(reg,e); 
// }
export const getWeekByDate = (date) => {
	var dt = new Date(date);
	var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
	return weekDay[dt.getDay()];
}
export const getWeekDate = (addDay = 0) => {
	var now = new Date();
	var day = now.getDay();
	var weeks = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
	let week = "";
	if (addDay == 0) {
		week = weeks[day];
	} else if (addDay > 0) {
		if (day + addDay <= 6) {
			week = weeks[day + addDay];
		} else {
			week = weeks[day + addDay - 7];
		}
	} else if (addDay < 0) {
		if (day + addDay >= 0) {
			week = weeks[day + addDay];
		} else {
			week = weeks[day + addDay + 7];
		}
	}
	return week;
}
// export const getDateStr = (AddDayCount) => {
// 	var dd = new Date();
// 	dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
// 	var y = dd.getFullYear();
// 	var m = dd.getMonth() + 1; //获取当前月份的日期
// 	var d = dd.getDate();
// 	return y + '-' + (m < 10 ? '0' + m : m) + '-' + d;
// }
export const strCard = (card) => {
	return card.replace(/^(.{6})(?:\d+)(.{4})$/, "$1******$2")
}
export const formatRichText = (html) => { //控制小程序中图片大小
	if (html) {
		let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
			match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
			match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
			match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
			return match;
		});
		newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
			match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
			return match;
		});
		newContent = newContent.replace(/<br[^>]*\/>/gi, '');
		newContent = newContent.replace(/\<img/gi,
			'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
		return newContent;
	}
}
/**
 * 公共跳转方法
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param "页面地址" url
 * @param 是否关闭当前页面跳转 r
 */
export function redirect(url, r) {
	if (!url) return

	var url = decodeURIComponent(url)
	var leng = url.indexOf('?')
	var path = leng === -1 ? url : url.substring(0, leng)
	if (NAVS_ROUTES.indexOf(path) > -1) {
		router.switchTab(url)
	}
	if (r) {
		router.redirectTo(url)
	} else {
		router.navigateTo(url)
	}
}
export const addLineHeight = (s) => {
	if (s) {
		s.replace(/<(p).*?(\/>|<\/p>)/g, function(a) {
			if (a.indexOf('style') < 0) {
				return a.replace(/<\s*p/, '<p style="line-height:40rpx;"');
			} else {
				return a.replace(/style=("|')/, 'style=$1line-height:40rpx;')
			}
		});
	}
}
export const createMonthDay = (relaMonth = 0) => {
	let daysOfMonth = [];
	let fullYear = new Date().getFullYear();
	let month = new Date().getMonth() + 1 + relaMonth;
	let lastDayOfMonth = new Date(fullYear, month, 0).getDate();
	for (var i = 1; i <= lastDayOfMonth; i++) {
		daysOfMonth.push(fullYear + '-' + month + '-' + i);
	};
	return daysOfMonth;
}
export const splitImg = (value, splitValue = "|") => {
	if (value.indexOf(splitValue) == -1) {
		return [value];
	} else {
		return value.split(splitValue)
	}
}
/**
 * 日期格式化方法
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param 需要格式化的日期时间 time
 * @param 需要格式化的格式，例如'yyyy-M-d' fmt
 * @returns 根据格式化格式返回，例如：2020-06-22
 */
export const formatDate = (time, fmt) => {
	var time = new Date(time)
	var o = {
		'M+': time.getMonth() + 1, //月份
		'd+': time.getDate(), //日
		'h+': time.getHours(), //小时
		'm+': time.getMinutes(), //分
		's+': time.getSeconds(), //秒
		'q+': Math.floor((time.getMonth() + 3) / 3), //季度
		S: time.getMilliseconds() //毫秒
	}

	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
	for (var k in o)
		if (new RegExp('(' + k + ')').test(fmt))
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
			)
	return fmt
}
export const time = (n = 0) => {
	// console.log("n:" + n);
	// JS获取当前年月，获取N个月前/后年月
	var date = new Date();
	var nowYear = date.getFullYear(); //获取当前年份
	var nowMonth = date.getMonth() + 1; //获取当前月份
	var nMonth = date.getMonth() + 1 + n; //n为正数则为n月后，n为负数则为n月前 
	if (n > 0) {
		if (nMonth <= 12) {
			var nYear = nowYear;
		} else {
			var nYear = nowYear + parseInt((nMonth - 1) / 12);
			nMonth = Math.abs(nMonth % 12) == 0 ? 12 : parseInt(Math.abs(nMonth % 12));
		}
	} else {
		if (nMonth > 0) {
			var nYear = nowYear;
		} else {
			var nYear = nowYear - parseInt(Math.abs((nMonth / 12) - 1));
			nMonth = 12 - parseInt(Math.abs(nMonth % 12));
		}
	}
	var nowYearMonth = nowYear.toString() + "-" + nowMonth; //当前年月
	// console.log("nowYear * 100",nowYear * 100);
	// console.log("nowMonth",nowMonth);
	// console.log("nowYearMonth",nowYearMonth);
	var nYearMonth = nYear.toString() + "-" + nMonth; //n月前/后年月
	if (n == 0) {
		return nowYearMonth
	} else {
		return nYearMonth;
	}
}
export const getNextMonth = (date) => {
	var arr = date.split('-');
	var year = arr[0]; //获取当前日期的年份
	var month = arr[1]; //获取当前日期的月份
	var day = arr[2]; //获取当前日期的日
	var days = new Date(year, month, 0);
	days = days.getDate(); //获取当前日期中的月的天数
	var year2 = year;
	var month2 = parseInt(month) + 1;
	if (month2 == 13) {
		year2 = parseInt(year2) + 1;
		month2 = 1;
	}
	var day2 = day;
	var days2 = new Date(year2, month2, 0);
	days2 = days2.getDate();
	if (day2 > days2) {
		day2 = days2;
	}
	if (month2 < 10) {
		month2 = '0' + month2;
	}

	var t2 = year2 + '-' + month2 + '-' + day2;
	return t2;
}
export const checkPhone = (phone) => {
	if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
		ui.showToast("手机号码有误，请重填");
		return false;
	} else {
		return true;
	}
}
export const validateIdCard = (idcard) => {
	// 判断如果传入的不是一个字符串，则转换成字符串
	idcard = typeof idcard === 'string' ? idcard : String(idcard);
	//正则表达式验证号码的结构
	let regx = /^[\d]{17}[0-9|X|x]{1}$/;
	if (regx.test(idcard)) {
		// 验证前面17位数字，首先定义前面17位系数
		let sevenTeenIndex = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
		// 截取参数前17位
		let front_seventeen = idcard.slice(0, 17);
		// 截取第18位
		let eighteen = idcard.slice(17, 18);
		// 这里如果是X要转换成小写，如果是数字在这里是字符串类型,则转换成数字类型，好做判断
		eighteen = isNaN(parseInt(eighteen)) ? eighteen.toLowerCase() : parseInt(eighteen);
		// 定义一个变量计算系数乘积之和余数
		let remainder = 0;
		//利用循环计算前17位数与系数乘积并添加到一个数组中
		// charAt()类似数组的访问下标一样，访问单个字符串的元素,返回的是一个字符串因此要转换成数字
		for (let i = 0; i < 17; i++) {
			remainder = (remainder += parseInt(front_seventeen.charAt(i)) * sevenTeenIndex[i]) % 11;
		}
		//余数对应数字数组
		let remainderKeyArr = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
		// 取得余数对应的值
		let remainderKey = remainderKeyArr[remainder] === 'X' ? remainderKeyArr[remainder].toLowerCase() : remainderKeyArr[
			remainder];
		console.log(remainderKey);
		console.log(eighteen)
		// 如果最后一位数字对应上了余数所对应的值，则验证合格，否则不合格,
		// 由于不确定最后一个数字是否是大小写的X，所以还是都转换成小写进行判断
		if (eighteen === remainderKey) {
			return idcard;
		} else {
			ui.showToast("您输入的身份证号码格式不对");
			return false;
		}
	} else {
		ui.showToast("您输入的身份证号码格式不对");
		return false;
	}
}
export const clearZero = (str) => {
	let strs = str.split("-");
	strs.forEach((item, index) => {
		if (item[0] == '0') {
			strs[index] = item[1];
		}
	})
	return strs.join("-");
}
export const prefixZero = (str) => {
	return parseInt(str) < 10 ? '0' + str : str;
}
//获取倒计时
export const countDown = (t1, t2, isZero) => {
	//相差的毫秒数
	var ms = Date.parse(t2) - Date.parse(t1);
	var minutes = 1000 * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	//求出天数
	var d = Math.floor(ms / days);
	//求出除开天数，剩余的毫秒数
	ms %= days;
	var h = Math.floor(ms / hours);
	ms %= hours;
	var m = Math.floor(ms / minutes);
	ms %= minutes;
	var s = Math.floor(ms / 1000);
	if (isZero) {
		return [prefixZero(d), prefixZero(h), prefixZero(m), prefixZero(s)];
	}
	return [d, h, m, s];
}

export const topLoad = (url, data, indexObj, indexArray) => {
	indexObj["isload"] = true;
	uni.showLoading({
		title: '加载中',
	})
	return new Promise((resolve, reject) => {
		console.log(url);
		console.log(data);
		api.common.get(url, data)
			.then(res => {
				indexObj["isload"] = false;
				uni.hideLoading();
				if (res.pageindex * res.pagesize >= res.count) {
					indexObj["isbottom"] = true;
				}
				const indexArrays = indexArray;
				res.list.forEach((item, index) => {
					indexArrays.push(item)
				})
				resolve(indexArrays)
			}).catch(err => {
				uni.hideLoading();
				ui.showToast(err.returnMsg)
				indexObj["isload"] = false;
				reject()
			})
	})
}


//替换日期格式，解决苹果适配
// export const replaceDate=(date)=>{
// 	return date.replace("-","/")
// }
export const wechatPay = function({
	timeStamp,
	nonceStr,
	packages,
	paySign,
	signType = "MD5",
	provider
}) {
	return new Promise((resolve, reject) => {
		uni.requestPayment({
			"provider": provider,
			"timeStamp": timeStamp,
			"nonceStr": nonceStr,
			"package": packages,
			"signType": signType,
			"paySign": paySign,
			success: function(res) {
				console.log("requestPayment", res);
				ui.showToast("支付成功")
				resolve(res)
			},
			fail: function(res) {
				console.log("requestPaymentfail", res);

				reject(res)
			}
		})
	})
}
export const getProvider = (service) => {
	return new Promise((resolve, reject) => {
		uni.getProvider({
			service: service,
			success: function(res) {
				// console.log(res.provider)
				resolve(res)
			}
		});
	});
}
export const getLocation = () => {
	// const params = {
	// 	city: this.local.city,
	// 	lng: res.longitude,
	// 	lat: res.latitude,
	// }
	return new Promise((resolve, reject) => {
		uni.getLocation({
			success: res => {
				resolve(res)
			},
			fail: err => {
				reject(err)
			}
		})
	});
}
