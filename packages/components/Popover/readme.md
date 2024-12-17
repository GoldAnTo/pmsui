<popup :popupOptions="popupOptions" :needTabs="false" :TabList="tabs">
        <!-- 主体内容不需要tabs传参 -->
        <template #content>
        </template>
        <template v-slot:compute="{data}" >
            <div>
                {{data}}
            </div>
        </template>
        <div slot="button">
            <el-button size="mini">确认</el-button>
            <el-button size="mini">取消</el-button>
        </div>
</popup>

1.popupOptions: 必传，示例
      popupOptions:{
                title   : "属性", // 标题名称
                show    : false, // 显示隐藏
                id      : "",   // 传输id
                name    : "",   // 标题额外名称
            },
2.tabs： 非必穿，示例
       tabs:[
                {label:"基本信息",name:"base"},  // label为tabs名称 ， name为slot名称
                {label:"算法信息",name:"compute"},
              ],
3.needTabs: 是否需要tabs
4.slot： 插槽，示例
        header：弹窗头部
        content：内容区域
        button：底部按钮区域
        当 needTabs为ture时，可多一种content插槽，插槽名称为 tabs里面的name属性，切可以在slot中获取到data
5.sizeClass：非必传，内容的类名
6.activeName: 非必传，所选中tabs 中name名称，默认选中第一个，用于操作选中
7.@handleClick： 当needTabs为true时，在tabs点击时，可触发的事件 ，回调参数tab
8.@handleClose： 当点击title上关闭按钮时触发
9.@#handleEnter： 当按下enter键时触发
10.@activeTab： 当needTabs为true时，获取当前选中数据，回调参数tab




<!-- 使用说明 -->

在main.js中引入dialogDrag.js 可自定义 v-dialogDrag