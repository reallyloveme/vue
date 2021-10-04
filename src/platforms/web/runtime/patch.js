/*
 * @Author: your name
 * @Date: 2021-10-02 16:17:53
 * @LastEditTime: 2021-10-04 14:24:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue/src/platforms/web/runtime/patch.js
 */
/* @flow */


import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({ nodeOps, modules })
