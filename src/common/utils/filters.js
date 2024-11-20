export default {
  typeDesc(key, list) {
    return (list.find((item) => item.key === key) || {}).value || key;
  },
  tagType(key, list) {
    return (list.find((item) => item.key === key) || {}).tag || "";
  },
  ValueTagType(value, list) {
    return (list.find((item) => item.value === value) || {}).tag || "";
  },
  operationTypeDesc(type, custom) {
    if (custom) return custom;
    switch (type) {
      case "create":
        return "创建";
      case "view":
        return "查看";
      case "edit":
        return "修改";
      case "global":
        return "国际化";
      case "deploy":
        return "部署组件";
      case "config":
        return "配置";
      case "apk":
        return "配置APK";
      case "adv":
        return "配置广告";
      case "deployDetail":
        return "部署详情";
      case "app":
        return "应用管理";
      default:
        return " ";
    }
  },
  // 数字转为千分位，并保留两个小数位
  numberFilter(oldNum, isFixed) {
    if (!oldNum && oldNum != 0) return; // 传入的数值为空直接返回空对象
    let newNum = oldNum.toLocaleString("en-US"); // 数字转成千分位 = 123,456.78
    const numArr = newNum.split("."); // 按小数点吧数字拆分 = [123,456, 78]
    if (!isFixed) {
      if (!numArr[1]) {
        newNum = newNum + ".00";
      } else if (numArr[1].length === 1) {
        newNum = newNum + "0";
      } else if (numArr[1].length >= 2) {
        newNum = numArr[0] + "." + numArr[1].substr(0, 2);
      }
    }
    return newNum;
  },
  numChange(val){
    return (val*100).toFixed(2)
  },
  numfixed(val){
    return val.toFixed(2)
  }
};
