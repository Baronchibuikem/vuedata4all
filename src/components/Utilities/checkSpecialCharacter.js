const checkSpecificKey = str => {
	var specialKey =
		"[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？0123456789]‘'";
	for (var i = 0; i < str.length; i++) {
		if (specialKey.indexOf(str.substr(i, 1)) != -1) {
			return false;
		}
	}
	return true;
};

export default checkSpecificKey;
