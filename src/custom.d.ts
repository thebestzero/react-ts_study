// 声明文件，不包含任何逻辑，不会被编译，不会被打包
// css文件类型定义配置
// 将导出key所在的对象，原始的类名和相应的之都将会被转为对象
declare module "*.css"{
    const css : {[key:string]:string }
    export default css
}