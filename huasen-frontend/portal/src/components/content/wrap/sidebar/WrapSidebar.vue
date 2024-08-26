<!--
 * @Autor: huasenjio
 * @Date: 2022-08-28 23:45:07
 * @LastEditors: starwishes
 * @LastEditTime: 2023-04-29 00:43:49
 * @Description: 
-->
<template>
  <div class="wrap-sidebar">
    <ul>
      <li v-if="showWrapSidebarSocket" class="animate__animated animate__fadeIn shadow">
        <i class="iconfont icon-md-rocket" @click="goTop"></i>
      </li>
      <li class="shadow">
        <i class="iconfont icon-a-unfoldcross-line" @click="handleNavbar"> </i>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import Bus from '@/plugin/event-bus.js';
import { HOME_SCROLL_TO } from '@/plugin/event-type.js';
export default {
  name: 'WrapSidebar',
  data() {
    return {
      showConnect: false,
    };
  },
  computed: {
    ...mapState(['showWrapSidebarSocket', 'appConfig', 'user']),
  },
  methods: {
    ...mapMutations(['commitAll']),

    handleNavbar() {
      this.commitAll({
        user: {
          config: {
            showNavbar: !this.user.config.showNavbar,
          },
        },
      });
      this.$store.dispatch('snapshoot');
    },

    // 回到顶部
    goTop() {
      Bus.pubEv(HOME_SCROLL_TO, 0, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-sidebar {
  position: absolute;
  right: 0;
  bottom: 50px;
  z-index: 1;
  ul {
    li {
      width: 40px;
      height: 40px;
      margin: 10px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: var(--gray-0);
      i {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}
</style>
