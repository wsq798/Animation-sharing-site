// 路径配置
//path.js文件的作用是​​集中管理后端API接口路径​​。通过将项目中所有的请求地址统一管理

// 核心作用：
// ​​统一配置​​：所有API地址集中存放，避免在代码中硬编码URL
// ​​便于维护​​：当接口地址变更时，只需修改此文件一处
// ​​提高可读性​​：通过语义化的属性名（如chengpin）清晰表明接口用途

const base = {
    baseUrl: 'http://iwenwiki.com',
    chengpin: '/api/blueberrypai/getChengpinDetails.php'
}

export default base;