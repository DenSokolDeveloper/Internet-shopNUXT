<template>
  <div>
    <contact-list-item v-for="contact of contacts" :key="contact.id" :contact="contact" />
  </div>
</template>

<script>
import ContactListItem from './ContactListItem'
export default {
  name: 'ContactList',
  components: { ContactListItem },
  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
