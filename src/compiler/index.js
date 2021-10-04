/*
 * @Author: your name
 * @Date: 2021-10-02 16:17:53
 * @LastEditTime: 2021-10-04 13:12:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue/src/compiler/index.js
 */
/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
// `createCompilerCreator` 允许创建使用替代的编译器
// 解析器/优化器/代码生成器，例如 SSR 优化编译器。
// 这里我们只是使用默认部分导出默认编译器。
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
