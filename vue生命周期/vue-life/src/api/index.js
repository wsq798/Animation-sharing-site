//将API请求进行封装，提供可复用的API调用函数

import axios from "../utils/request"   //导入自定义的axios实例，通常该实例已经配置了基础URL、拦截器等
import path from "../api/path" //导入一个定义好的路径对象，包含了API的各个端点路径

//定义了一个名为api的对象，该对象包含多个方法，每个方法对应一个API请求。
const api ={
    getChengpin(){
         // 拼接完整 URL：baseUrl + chengpin
        return axios.get(path.baseUrl + path.chengpin)
    }
}

//导出API对象​​：通过export default api;导出，这样其他组件或模块可以导入并使用这些封装好的API方法。
export default api;


// 优点​​：封装了API请求，使得代码更加简洁，易于维护。
// ​​封装性​​：将API请求集中管理，避免在业务代码中直接书写URL和请求细节。
// ​​维护性​​：当API路径或请求方式变化时，只需在此文件中修改一次，所有引用处都会更新。
// ​​复用性​​：多个组件可以共用同一个API方法，减少重复代码。