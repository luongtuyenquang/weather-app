<template>
  <div class="text-center opacity-80">{{ formatLocalTime }}</div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    localtime: String,
  },
  computed: {
    formatLocalTime() {
      const splitCurrentTime = this.localtime.split(" ");
      const currentDate = splitCurrentTime.at(0);
      const currentTime = splitCurrentTime.at(-1);
      const formatTime = dayjs(`1/1/1 ${currentTime}`).format("HH:mm A");
      const formatDate = dayjs(currentDate).format("dddd, Ngày DD - MM - YYYY");
      return `${formatDate} | Giờ hiện tại: ${formatTime}`;
    },
  },
};
</script>
