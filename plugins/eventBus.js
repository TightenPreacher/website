import mitt from 'mitt';

// 创建一个事件总线实例
const eventBus = mitt();

export default defineNuxtPlugin(() => {
  return {
    provide: {
      eventBus,
    },
  };
});