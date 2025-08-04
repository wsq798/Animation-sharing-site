import axios from "axios";

const errorHandle = (status, info) => {
    switch (status){
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 408:
            console.log("请求超时");
            break;
        case 500:
            console.log("服务器内部错误");
            break;
        case 501:
            console.log("服务器不支持请求的功能");
            break;
        case 502:
            console.log("网关错误");
            break;
        default:
            console.log(info);
            break;
    }
}


const instance = axios.create({
  //网络请求的公共配置
  timeout: 5000,
});

//拦截器
//发送数据之前
instance.interceptors.request.use(
  //config包含所有网络请求的配置信息
  (config) => {
    return config;
  },
  //请求拦截器的错误处理
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

//获取数据之前
instance.interceptors.response.use(
  //response包含服务器返回的响应数据
  (response) => {
    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response);
  },
  //响应拦截器的错误处理
  (error) => {
    const { response } = error;
    errorHandle(response.status,response.info);
  }
);

export default instance;

