# SetWeiboVisibility
Set the visibility of your past posts one by one. Removal has not been test, but it deserves a try.

批量设置微博可见范围，或删除微博。（删除微博未经测试，请谨慎使用）

可设置微博状态为：
1. 仅粉丝可见
2. 仅好友圈可见
3. 仅自己可见

## 使用方法
打开微博网页版，点击微博数目进入个人主页，按下F12进入开发者模式，点击"Console"Tab并复制上script.js中的代码。待页面加载完全后，按下回车开始运行。

本脚本会自动翻页，理论上会处理直到最后一页。

若想控制时间范围，可基于页面右边的时间线（受微博限制，只能以月份为单位）。比如想要修改2018年6月全部微博的可见范围，则点击2018年后再点击其下的6月，再开始运行脚本。

脚本默认修改为“仅个人可见”。如需修改为其他可见范围，参见script.js注释。

脚本运行时，建议将该页面放置前台，避免额外状况。

本脚本基于油猴脚本[“批量转换微博可见范围”](https://greasyfork.org/zh-TW/scripts/36902-%E6%89%B9%E9%87%8F%E8%BD%AC%E6%8D%A2%E5%BE%AE%E5%8D%9A%E4%B8%BA%E8%87%AA%E5%B7%B1%E5%8F%AF%E8%A7%81) 修改。原脚本已失效。
