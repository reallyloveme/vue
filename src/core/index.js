/*
 * @Author: your name
 * @Date: 2021-10-02 16:17:53
 * @LastEditTime: 2021-10-02 16:47:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue/src/core/index.js
 */
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
// vue对家添加静态方法和属性
initGlobalAPI(Vue)

// 判断是不是服务端渲染
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
// 服务端渲染上下文
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})
// 函数式渲染上下文
// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
