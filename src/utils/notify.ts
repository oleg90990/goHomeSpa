import Vue from 'vue';

export default {
  success(title: string, text: string) {
    this.notify(title, text, 'success');
  },
  error(title: string, text: string) {
    this.notify(title, text, 'error');
  },
  warn(title: string, text: string) {
    this.notify(title, text, 'warn');
  },
  notify(title: string, text: string, type: string) {
    Vue.notify({
      group: 'notify',
      title,
      text,
      type,
    });
  },
};
