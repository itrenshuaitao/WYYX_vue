import ajax from "./ajax";

const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';

// 获取首页数据
export const reqHomeData = () => ajax('/home');
// 获取分类列表
export const reqCategoryList = () => ajax('/category');

// 识物-Tab 懒数据 ---- http://m.you.163.com/topic/v1/find/getTabs.json
export const reqRecommendTabs = () => ajax(`/api/topic/v1/find/getTabs.json`);

// 识物-推荐 数据 ----
export const reqRecommendData = () => ajax(`${prefix}/topic/v1/find/recManual.json`);

