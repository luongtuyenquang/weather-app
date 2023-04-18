<template>
  <div class="text-center opacity-80">{{ formatLocalTime() }}</div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

const props = defineProps<{ localtime: string }>();

const formatLocalTime = () => {
  const splitCurrentTime = props.localtime.split(" ");
  const currentDate = splitCurrentTime.at(0);
  const currentTime = splitCurrentTime.at(-1);
  const formatTime = dayjs(`1/1/1 ${currentTime}`).format("HH:mm A");
  const formatDate = dayjs(currentDate).format("dddd, Ngày DD - MM - YYYY");
  return `${formatDate} | Giờ hiện tại: ${formatTime}`;
};
</script>
