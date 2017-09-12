
const path = require('path');

const pageArr = [
	'vip_certification',	// 会员认证
	'h5game/summary',			// H5轻游戏汇总页
	'h5game/detail',			// H5轻游戏详情页
	'h5game/alert'				// H5轻游戏退出弹窗（供游戏方引用）
];

const entryConfig = {};
const pageDir = path.join(__dirname, '/../src/pages/');

pageArr.forEach((page) => {
	entryConfig[page] = path.resolve(pageDir, `${page}/index.js`);
});

module.exports = entryConfig;