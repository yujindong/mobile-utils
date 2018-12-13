[![Build Status](https://travis-ci.org/yujindong/mobile-utils.svg?branch=master)](https://travis-ci.org/yujindong/mobile-utils)

# 常用工具
### 使用方法
```
    npm i -S @yujindong/validate;
    
    import { isPhoneNo, isCTCC } from "@yujindong/validate";
    
    isPhoneNo('18511249990'); // true
    isPhoneNo('+8618511249990'); // true
    isPhoneNo('+86-185-11249990'); // true
    isPhoneNo('+86 185 11249990'); // true
    isPhoneNo('+86 185-11249990'); // true
    
    isCTCC('18511249990'); // false
    isCTCC('18931642779'); // true
    
    
```
### 手机号码验证方法
|method|params|return|description|
| --- | --- | --- | --- |
| isPhoneNo | phoneNo: 要验证的手机号码<br>internation: 国家代码 默认 'zh-cn'| boolean | 验证是否是手机号码，目前只支持中国，internation参数可不传 |
| isCTCC | phoneNo: 需要验证的手机号码 | boolean | 是否是中国电信手机号码 |
| isCMCC | phoneNo: 需要验证的手机号码 | boolean | 是否是中国移动手机号码 |
| isCUCC | phoneNo: 需要验证的手机号码 | boolean | 是否是中国联通手机号码 |
| isVirtual | phoneNo: 需要验证的手机号码 | boolean | 是否是中国虚拟运营商手机号码 |
### 邮箱验证
|method|params|return|description|
| --- | --- | --- | --- |
| isEmail | email: 要验证的邮箱| boolean | 验证是否符合邮箱格式 |

## 验证中国身份证

|method|params|return|description|
| --- | --- | --- | --- |
| isIDCard | identityCardNumber: 要验证的身份证号码| boolean | 验证格式是否符合中国身份证 |
