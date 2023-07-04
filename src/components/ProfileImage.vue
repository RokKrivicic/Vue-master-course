<template>
  <img
    :src="imageLink"
    class="h-8 w-8 rounded-3xl object-contain"
    alt="User profile image"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png",
    };
  },
};
</script>
