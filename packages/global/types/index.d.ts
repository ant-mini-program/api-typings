/// <reference path="./lib.app.d.ts" />
/// <reference path="./lib.page.d.ts" />
/// <reference path="./lib.component.d.ts" />
/// <reference path="./lib.mixin.d.ts" />
/// <reference path="./lib.shared.d.ts" />
/// <reference path="./lib.global.d.ts" />

declare namespace MiniProgram {
  type UnknownRecord = Record<string, unknown>;
  /**
   * Get union key of two types
   */
  type UnionKeys<T, U> = keyof T | keyof U;
  /**
   * Get unique keys of left type.
   */
  type UniqueLeftKeys<T, U> = Exclude<UnionKeys<T, U>, keyof U>;
  /**
   * Extract left-only types.
   */
  type UniqueLeft<T, U> = {
    [P in UniqueLeftKeys<T, U>]: T[P];
  };

  // 获取 mixins 数组的每一个元素的类型
  type TExtractValuesOfTuple<T extends any[]> = T[keyof T & number];

  // 获取 methods、props、data 类型(主要就是这个三个)

  type TGetMixinMethods<T> = T extends { methods?: infer M } ? M : never;

  type TGetMixinData<T> = T extends { data?: infer D } ? D : never;

  type TGetMixinProps<T> = T extends { props?: infer P } ? P : never;

  // 整合一下类型
  type UnionToIntersection<T> = (
    T extends any ? (x: T) => any : never
  ) extends (x: infer R) => any
    ? R
    : never;

  /**
   * Recursively map a type and make all properties optional.
   */
  type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
      ? Array<RecursivePartial<U>>
      : T[P] extends object
      ? RecursivePartial<T[P]>
      : T[P];
  };

  /**
   * Recursively map a type and make all properties optional & dynamic.
   */
  type RecursivePartialAndDynamic<T> = T extends object
    ? {
        [P in keyof T]?: T[P] extends Array<infer U>
          ? Array<RecursivePartialAndDynamic<U>>
          : T[P] extends Function
          ? T[P]
          : T[P] extends object
          ? RecursivePartialAndDynamic<T[P]>
          : T[P];
      }
    : T;
}
