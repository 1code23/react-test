export const ZHID = 0; //中文对应的languageId
export const CHNID = 100; //中国大陆对应的countryId
export const MAXSIZE = 3000; //后端接口每个page最大size
export const USERINFO = "droi.market.userInfo"; // 存储在localStorage里用户信息的key
export const LASTTIME = "droi.market.lastTIme"; // 存储在localStorage里最后一次点击的时间的key
export const POWERTREE = "droi.market.powerTree";
export const TIMEOUT = 24 * 60 * 60 * 1000; //超时时间24h

export const booleanList = [
  { key: 0, value: "否" },
  { key: 1, value: "是" },
];
export const appCategoryList = [
  { key: 1, value: "游戏" },
  { key: 2, value: "应用" },
];
export const NUmBooleanList = [
  { key: 2, value: "否" },
  { key: 1, value: "是" },
];
// 支持设备
export const supportedDeviceList = [
  { key: 1, value: "手机" },
  { key: 2, value: "平板电脑" },
];
// 支持的软件包类型
export const packageTypeList = [{ key: 1, value: "APK" }];

// 上架类型
export const releaseTypeList = [
  { key: "1", value: "下载" },
  { key: "2", value: "预约" },
  { key: "5", value: "试玩" },
];
export const manageTypeList = [
  { key: 1, value: "新增" },
  { key: 2, value: "下架" },
  { key: 3, value: "更新" },
  { key: 4, value: "预约" },
  { key: 5, value: "试玩" },
];
// 发布类型类型
export const releaseTypeListNUM = [
  { key: 1, value: "下载" },
  { key: 2, value: "预约" },
  { key: 5, value: "试玩" },
];

// 应用上架状态
export const appStatusList = [
  { key: 1001, value: "未上架", tag: "info" },
  { key: 1002, value: "待上架", tag: "info" },
  { key: 1003, value: "已上架", tag: "success" },
  { key: 1020, value: "自动下架", tag: "danger" },
  { key: 1004, value: "管理员下架", tag: "danger" },
  { key: 1005, value: "开发者下架", tag: "danger" },
  { key: 1006, value: "回退或下架申请单", tag: "danger" },
  { key: 1007, value: "预约暂存", tag: "info" },
];
export const appStatusListRecord=[
  // { key: 230, value: "未上架", tag: "info" },
  // { key: 233, value: "待上架", tag: "info" },
  { key: 522, value: "自动下架", tag: "danger" },
  { key: 511, value: "管理员下架", tag: "danger" },
  { key: 501, value: "开发者下架", tag: "danger" },
  { key: 500, value: "回退或下架申请单", tag: "danger" },
  { key: 401, value: "已上架", tag: "success" },
  { key: 231, value: "已上架", tag: "success" },

  // { key: 1007, value: "预约暂存", tag: "info" },
];
// 应用子类型
export const appSubTypeList = [
  { key: 1, value: "休闲游戏" },
  { key: 2, value: "网络游戏" },
];
// 应用来源
export const sourceList = [
  { key: 0, value: "开发者平台" },
  { key: 1, value: "运营管理平台" },
  { key: 2, value: "系统抓取" },
  { key: 3, value: "合作方同步" },
];
// 应用审核状态
export const appReviewStatusList = [
  { key: 1, value: "未审核", tag: "info" },
  { key: 2, value: "机审待审核", tag: "warning" },
  { key: 3, value: "机审不通过", tag: "danger" },
  { key: 4, value: "人工待审核", tag: "warning" },
  { key: 5, value: "人审不通过", tag: "danger" },
  { key: 6, value: "版本审核通过", tag: "success" },
];
// 应用类型
export const appTypeList = [
  { key: 2, value: "应用" },
  { key: 1, value: "游戏" },
];
// 合作方式
export const cooperationTypeList = [
  { key: 2, value: "固价推广" },
  { key: 1, value: "收录" },
];
// 商务审核
export const commentStatus = [
  { key: 100, value: "待审核", tag: "info" },
  { key: 101, value: "审核通过", tag: "success" },
  { key: 102, value: "审核不通过", tag: "danger" },
];
//审核状态
export const auditTypeList = [
  { key: 900, value: "应用认领审核中" },
  { key: 901, value: "应用认领审核通过" },
  { key: 902, value: "应用认领审核不通过" },
  // { key: 2, value: "机审待审核" },
  // { key: 3, value: "机审不通过" },
  // { key: 4, value: "人工待审核" },
  // { key: 6, value: "人工审核通过" },
  // { key: 5, value: "人工审核不通过" },
];
// 认领审核状态
export const claimStatusList = [
  { key: 900, value: "应用认领审核中", tag: "info" },
  { key: 901, value: "应用认领审核通过", tag: "success" },
  { key: 902, value: "应用认领审核不通过", tag: "danger" },
  // { key: 230, value: "人工待审核", tag: "warning" },
  // { key: 301, value: "认领审核通过", tag: "danger" },
  // { key: 101, value: "版本审核通过", tag: "warning" },
];

// 收费类型
export const tariffTypeList = [
  { key: "1", value: "激活收费" },
  { key: "2", value: "道具收费" },
  { key: "3", value: "关卡收费" },
  { key: "4", value: "购买虚拟币" },
  { key: "5", value: "部分章节收费（图书阅读类）" },
  { key: "6", value: "课程收费" },
  { key: "7", value: "会员收费" },
  { key: "8", value: "其他" },
];

// 年龄分级标准
export const ageLevelList = [
  {
    key: 3,
    level: "3+",
    value: "年满3周岁",
    desc: "此类内容不包含暴力、惊吓、不良用语（如低俗幽默、粗口）等受限制内容及7+以上级别禁止内容，一般情况下，适合各个年龄段的用户。 ",
  },
  {
    key: 7,
    level: "7+",
    value: "年满7周岁",
    desc: "此类内容基本健康，可能包含少量卡通暴力或极少的含蓄不良用语（如轻度的粗口，但不得含有性粗口），但不得含有现实暴力（如针对人类外形或动物形象或描写细致、逼真、血腥的暴力场景）或惊吓的内容（如可能惊吓到儿童的声音或场景）及12+以上级别禁止内容。",
  },
  {
    key: 12,
    level: "12+",
    value: "年满12周岁",
    desc: "此类内容可能包含少量的轻微暴力（针对虚拟形象的暴力内容以及含蓄的针对人类外形或动物角色的暴力内容，不含逼真、细致、血腥的暴力场景）、少量的含蓄不良用语（如轻度的粗口，但不得含有性粗口）、少量可能惊吓到儿童的场景（但不含惊悚/恐怖题材内容），但不得含有粗俗幽默内容及16+以上级别禁止内容。",
  },
  {
    key: 16,
    level: "16+",
    value: "年满16周岁",
    desc: "此类内容可能包含较少的暴力（不含逼真、细致、血腥的暴力场景）、不良用语（不得含有性粗口）、可能惊吓到儿童的场景（但不含惊悚/恐怖题材内容），但不得含有性暗示内容（例如两性笑话、裸露内容等）、惊悚/恐怖题材内容、提及烟草/饮酒的内容及18+级别禁止内容。",
  },
  {
    key: 18,
    level: "18+",
    value: "年满18周岁",
    desc: "此类内容（如理财、直播表演、恋爱交友等）仅适用于成人用户，但不得含有色情、赌博、激烈的暴力（如血腥、残肢、严刑拷打等场景）、教唆犯罪、危害国家利益、破坏民族团结、侮辱宗教信仰、宣扬邪教/迷信/毒品等违反法律及违背社会公德的内容。",
  },
];

//预约审核状态
export const appointmentAduitList = [
  { key: 600, value: "预约待审核", tag: "info" },
  { key: 601, value: "预约审核通过-待生效", tag: "success" },
  { key: 611, value: "预约审核通过-已生效", tag: "info" },
  { key: 602, value: "预约审核不通过", tag: "danger" },
  { key: 603, value: "预约已失效", tag: "danger" },
  { key: 604, value: "预约暂存", tag: "success" },
  { key: 620, value: "更新待审核", tag: "danger" },
  { key: 621, value: "更新审核通过-待生效", tag: "success" },
  { key: 631, value: "更新审核通过-已生效", tag: "success" },
  { key: 632, value: "更新审核不通过", tag: "danger" },
  { key: 640, value: "预约下架待审核", tag: "danger" },
  { key: 641, value: "预约下架审核通过", tag: "success" },
  { key: 642, value: "预约下架审核不通过", tag: "danger" },
  { key: 643, value: "被管理后台下架", tag: "danger" },
];
//内测审核状态
export const closedBetaAduitList = [
  { key: 700, value: "内测待审核", tag: "info" },
  { key: 701, value: "内测审核通过-待生效", tag: "success" },
  { key: 711, value: "内测审核通过-已生效", tag: "success" },
  { key: 702, value: "内测审核不通过", tag: "danger" },
  { key: 703, value: "内测已失效", tag: "danger" },
  { key: 111, value: "开发者已撤销", tag: "danger" },
  { key: 721, value: "开发者下架", tag: "danger" },
  { key: 722, value: "被管理后台下架", tag: "danger" },
];
//首发审核状态
export const startingAduitList = [
  { key: 800, value: "首发待审核", tag: "info" },
  { key: 801, value: "首发审核通过", tag: "success" },
  { key: 802, value: "首发审核不通过", tag: "danger" },
  { key: 111, value: "取消", tag: "danger" },
];
//运营审核状态
export const onOffAuditList = [
  { key: 100, value: "运营待审核", tag: "info" },
  { key: 101, value: "运营审核通过", tag: "success" },
  { key: 102, value: "运营审核不通过", tag: "danger" },
];
//信息审核状态
export const infoAduitList = [
  { key: "0", value: "信息待审核", tag: "info" },
  { key: "1", value: "信息审核通过", tag: "success" },
  { key: "2", value: "信息审核不通过", tag: "danger" },
];
//版本审核状态
export const versionAduitList = [
  { key: "0", value: "人工待审核", tag: "success" },
  { key: "1", value: "人工审核通过", tag: "success" },
  { key: "2", value: "人工审核不通过", tag: "danger" },
  { key: "3", value: "回退待审核", tag: "info" },
  { key: "4", value: "回退审核通过", tag: "success" },
  { key: "5", value: "回退审核不通过", tag: "danger" },
  { key: "6", value: "机器待审核", tag: "info" },
  { key: "7", value: "机器审核不通过", tag: "danger" },
  { key: "11", value: "机器审核通过", tag: "danger" },
  { key: "12", value: "安全检测中", tag: "danger" },
  { key: "13", value: "安全检测完成", tag: "danger" },
  { key: "14", value: "安全审核不通过", tag: "danger" },
  { key: "15", value: "安全检测失败", tag: "danger" },
  // { key: "8", value: "下架待审核", tag: "info" },
  // { key: "9", value: "下架审核通过", tag: "success" },
  // { key: "10", value: "下架审核不通过", tag: "danger" },
];
// 安全检测状态
export const safeSatausList = [
  { key: -1, value: "检测失败", tag: "danger" },
  { key: 1, value: "队列中", tag: "info" },
  { key: 2, value: "已下发", tag: "danger" },
  { key: 3, value: "检测成功", tag: "success" },
  { key: 4, value: "已下发", tag: "info" },
  { key: 5, value: "已下发", tag: "success" },
];
// 开发者账号状态
export const devStatusList = [
  { key: 0, value: "使用中", tag: "success" },
  { key: 1, value: "待认证", tag: "info" },
  { key: 2, value: "冻结中", tag: "danger" },
  { key: 3, value: "已注销", tag: "danger" },
];
// 开发者认证类型
export const identityTypeList = [
  { key: 1, value: "个人" },
  { key: 2, value: "企业" },
];
// 开发者实名认证状态
export const verifiedCheckStatusTypeList = [
  { key: 1, value: "待认证", tag: "info" },
  { key: 2, value: "待审核", tag: "info" },
  { key: 3, value: "审核通过", tag: "success" },
  { key: 4, value: "审核不通过", tag: "danger" },
  { key: 5, value: "待审核(上级)", tag: "info" },
  { key: 6, value: "上级审批不通过", tag: "error" },
];
// 开发者申诉状态
export const allegeStatusTypeList = [
  { key: 1, value: "待审核", tag: "info" },
  { key: 2, value: "审核通过", tag: "success" },
  { key: 3, value: "审核不通过", tag: "danger" },
];

//任务状态
export const taskList = [
  { key: 1, value: "待审核", tag: "info" },
  { key: 2, value: "审核驳回", tag: "danger" },
  { key: 3, value: "审核通过/待投放", tag: "info" },
  { key: 4, value: "执行中", tag: "success" },
  { key: 5, value: "暂停", tag: "danger" },
  { key: 6, value: "日预算不足", tag: "danger" },
  { key: 7, value: "账户日预算不足", tag: "danger" },
  { key: 8, value: "余额不足", tag: "danger" },
  { key: 9, value: "完成", tag: "success" },
  { key: 10, value: "无策略定向", tag: "info" },
  { key: 11, value: "无创意", tag: "info" },
  { key: 12, value: "创意待审核", tag: "info" },
  { key: 13, value: "创意驳回", tag: "danger" },
];
//开发者审核状态&&开票审核状态
export const developerAduitList = [
  { key: 1, value: "待审核", tag: "info" },
  { key: 2, value: "审核通过", tag: "success" },
  { key: 3, value: "审核不通过", tag: "danger" },
];
// 开票内容类型
export const contentTypeList = [
  { key: 1, value: "信息服务费" },
  { key: 2, value: "信息费" },
];
// 发票类型
export const invoiceTypeList = [
  { key: 1, value: "增值税普通发票" },
  { key: 2, value: "增值税专用发票" },
];
export const costTypeList = [
  { key: 1, value: "CPD" },
  { key: 2, value: "CPC" },
];
export const originalityShowTypes = [{ label: "ICON", value: 1 }, { label: "开屏大图", value: 2 }, { label: "焦点Banner图", value: 3 }];

//创意状态类型
export const originalityStatus = [
  { label: "待审核", value: 0, tag: "info", key: 0 },
  { label: "审核通过", value: 1, tag: "success", key: 1 },
  { label: "审核不通过", value: 2, tag: "danger", key: 2 },
  { label: "停用", value: 3, tag: "info", key: 3 },
]

//推广任务状态
export const taskListType = [
  // { key: 1, value: "待审核", tag: "info" },
  // { key: 2, value: "审核驳回", tag: "danger" },
  { key: 3, value: "审核通过/待投放", tag: "info" },
  { key: 4, value: "执行中", tag: "success" },
  { key: 5, value: "暂停", tag: "danger" },
  { key: 6, value: "日预算不足", tag: "danger" },
  { key: 7, value: "账户日预算不足", tag: "danger" },
  { key: 8, value: "余额不足", tag: "danger" },
  { key: 9, value: "完成", tag: "success" },
  { key: 10, value: "无策略定向", tag: "info" },
  { key: 11, value: "无创意", tag: "info" },
  { key: 12, value: "创意待审核", tag: "info" },
  { key: 13, value: "创意驳回", tag: "danger" },
];
export const recomTypeList = [
  // { key: 0, value: "全部", tag: "info" },
  { key: 1, value: "应用开屏", tag: "info" },
  { key: 2, value: "首页焦点图", tag: "danger" },
  { key: 3, value: "智能推荐", tag: "info" },
  { key: 4, value: "精品推荐", tag: "success" },
  { key: 5, value: "搜索结果页", tag: "danger" },
];
//合同管理页面 审核状态
export const contractAuditList = [
  { key: 0, value: "待提交", tag: "info" },
  { key: 1, value: "待审核", tag: "info" },
  { key: 2, value: "审核通过-待签署", tag: "info" },
  { key: 3, value: "签约驳回", tag: "danger" },
  // { key: 4, value: "运营待审核", tag: "info" },
  // { key: 5, value: "签署驳回", tag: "danger" },
  // { key: 6, value: "运营审核通过", tag: "success" },
  // { key: 7, value: "运营驳回", tag: "danger" },
  { key: 6, value: "审核通过", tag: "success" },
  { key: 7, value: "签署驳回", tag: "danger" },
]
// 合同签约方式
export const contractTypeList = [
  { key: 1, value: "线上签约" },
  { key: 2, value: "商务对接" },
]
export const financeInfoAuditList = [
  { key: 0, value: "待提交", tag: "info" },
  { key: 1, value: "待审核", tag: "info" },
  { key: 2, value: "审核通过", tag: "success" },
  { key: 3, value: "审核不通过", tag: "danger" },
  { key: 4, value: "一级待审批", tag: "info" },
  { key: 5, value: "一级审批不通过", tag: "error" },
]
//结算方式
export const settlementTypeList = [
  { key: 1, value: "CPA" },
  { key: 2, value: "CPS" },
  { key: 3, value: "CPD" },
];
//合作模式
export const collaborateTypeList = [
  { key: 1, value: "CPA" },
  { key: 2, value: "CPS" },
  { key: 3, value: "CPD" },
  { key: 4, value: "CPC" },
];
//激励状态
export const activeStatusList = [
  { key: 0, value: "未开始", tag: "info" },
  { key: 1, value: "已开始", tag: "success" },
  { key: 2, value: "已结束", tag: "danger" },
];
//激励类型
export const incentiveTypeList = [
  // { key: 0, value: "新客户赠送" },
  { key: 5, value: "续充值" },
  { key: 4, value: "代理首充" },
  { key: 3, value: "直客首充" },
  // { key: 2, value: "新客户充值赠送" },
  { key: 1, value: "充值赠送" },
];
// 待完成任务类型
export const messageTypeList = [
  { key: 1, value: "上下架审核" },
  { key: 2, value: "信息审核" },
  { key: 3, value: "版本审核" },
  { key: 4, value: "合同审核" },
  { key: 5, value: "财务审核" },
  { key: 6, value: "实名认证审核" },
  { key: 7, value: "申诉审核" },
  { key: 8, value: "创意审核" },
  { key: 9, value: "充值审核" },
  { key: 10, value: "开票审核" },
  { key: 11, value: "应用审核" },
]
// 出价波动预警-场景类型
export const sceneTypeList = [
  { key: 1, value: "推荐" },
  { key: 2, value: "搜索" },
]
// 出价波动预警-等级
export const gradeTypeList = [
  { key: 1, value: "搜索一级" },
  { key: 2, value: "搜索二级" },
  { key: 3, value: "搜索三级" },
  { key: 4, value: "搜索四级" },
]
// 推荐版位类型；propKey--对应的场景类型key
export const sellPositionList = [
  { key: 1, value: "应用开屏", propKey: 1 },
  { key: 2, value: "首页焦点图", propKey: 1 },
  { key: 3, value: "智能推荐", propKey: 1 },
  { key: 4, value: "精品推荐", propKey: 1 },
  { key: 5, value: "搜索结果页", propKey: 2 },
]
// 安卓版本
export const versionList = [
  { key: 10, value: "Android 2.3.4,2.3.3" },
  { key: 11, value: "Android 3.0.x " },
  { key: 12, value: "Android 3.1.x" },
  { key: 13, value: "Android 3.2" },
  { key: 14, value: "Android 4.0, 4.0.1, 4.0.2" },
  { key: 15, value: "Android 4.0.3, 4.0.4" },
  { key: 16, value: "Android 4.1, 4.1.1" },
  { key: 17, value: "Android 4.2, 4.2.2" },
  { key: 18, value: "Android 4.3" },
  { key: 19, value: "Android 4.4" },
  { key: 20, value: "Android 4.4W" },
  { key: 21, value: "Android 5.0" },
  { key: 22, value: "Android 5.1" },
  { key: 23, value: "Android 6.0" },
  { key: 24, value: "Android 7.0" },
  { key: 25, value: "Android 7.1,7.1.1" },
  { key: 26, value: "Android 8.0" },
  { key: 27, value: "Android 8.1" },
  { key: 28, value: "Android 9" },
  { key: 29, value: "Android 10" },
  { key: 30, value: "Android 11" },
  { key: 32, value: "Android 12" },
]

