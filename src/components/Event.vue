<template>
  <div class="flex flex-col items-stretch max-w-xs rounded overflow-hidden shadow-md">
    <img
      alt="Sunset in the mountains"
      class="w-full"
      src="https://tailwindcss.com/img/card-top.jpg"
    >
    <div class="flex-grow px-6 py-4">
      <div
        class="font-bold text-xl mb-2"
        v-text="name"
      />
      <p
        class="text-cbblack-grey text-base"
        v-text="description"
      />
    </div>
    <div class="px-6 py-4">
      <span
        class="inline-block bg-cborange rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
        v-text="date"
      />
      <span
        class="inline-block bg-cborange rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
        v-text="time"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Event',
    props: {
      name: {
        required: true,
        type: String
      },
      date: {
        required: true,
        type: String
      },
      time: {
        required: true,
        type: String
      },
      description: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/tailwind.css";
</style>
