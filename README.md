# 常用工具
### 手机号码验证方法
|method|params|return|description|
| --- | --- | --- | --- |
| isPhoneNo | phoneNo: 要验证的手机号码<br>internation: 国家代码 默认 'zh-cn'| boolean | 验证是否是手机号码，目前只支持中国，internation参数可不传 |
| isCTCC | phoneNo: 需要验证的手机号码 | boolean | 是否是中国电信手机号码 |
| isCMCC | phoneNo: 需要验证的手机号码 | boolean | 是否是中国移动手机号码 |
| isCUCC | phoneNo: 需要验证的手机号码 | boolean | 是否是中国联通手机号码 |
