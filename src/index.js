import {
  isChinaPhoneNoExp,
  isCMCCExp,
  isCUCCExp,
  isCTCCExp,
  isVirtualExp,
  isEmailExp,
  identityCardNumberExp
} from "./config";

function fixPhoneNo(phoneNo) {
  if (phoneNo) {
    return phoneNo.replace(/-|\s/g, '');
  }
  return phoneNo;
}
/**
 * 验证电话号码是否正确 目前只支持中国号码
 * 支持中划线分割的号码类型和空格分割的号码类型
 * 支持带国际区号的手机号码
 * @param phoneNo 需要验证的手机号码
 * @param internation 暂时无用
 */
export function isPhoneNo (phoneNo = '', internation = 'zh-cn') {
  const no = fixPhoneNo(phoneNo);
  return isChinaPhoneNoExp.test(no);
}

/**
 * 中国电信
 * @param phoneNo
 */
export function isCTCC (phoneNo) {
  const no = fixPhoneNo(phoneNo);
  return isCTCCExp.test(no);
}

/**
 * 中国联通
 * @param phoneNo
 */
export function isCUCC (phoneNo) {
  const no = fixPhoneNo(phoneNo);
  return isCUCCExp.test(no);
}

/**
 * 中国移动
 * @param phoneNo
 */
export function isCMCC (phoneNo) {
  const no = fixPhoneNo(phoneNo);
  return isCMCCExp.test(no);
}


/**
 * 虚拟运营商
 * @param phoneNo
 * @return {boolean}
 */
export function isVirtual (phoneNo) {
  const no = fixPhoneNo(phoneNo);
  return isVirtualExp.test(no);
}

/**
 * 验证邮箱格式是否正确
 * @param email
 * @return {boolean}
 */
export function isEmail (email) {
  return isEmailExp.test(email);
}

/**
 * 验证是否是中国身份证号
 * @param identityCardNumber
 * @return {*}
 */
export function isIDCard (identityCardNumber) {
  return identityCardNumberExp(identityCardNumber);
}
