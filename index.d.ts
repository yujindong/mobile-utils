declare namespace YJD {
  type InternationType = "zh-cn";
  interface MobileUtils {
    isPhoneNo(phoneNo: string, internation?: InternationType ): boolean;
    isCTCC(phoneNo: string): boolean;
    isCUCC(phoneNo: string): boolean;
    isCMCC(phoneNo: string): boolean;
    isVirtual(phoneNo: string): boolean;
    isEmail(email: string): boolean;
    isIDCard(identityCardNumber: string): boolean;
  }
}

declare const MobileUtil: YJD.MobileUtils;

export = MobileUtil;
export as namespace MobileUtil;
