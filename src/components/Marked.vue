<template>
  <div
    :class="markedClass"
    class="prose max-w-none"
    v-html="compiled"
  />
</template>

<script>
  import { marked } from 'marked'
  import dedent from 'dedent'
  import sanitize from 'sanitize-html'

  export default {
    name: 'MarkedContainer',
    props: {
      dedent: {
        type: Boolean,
        required: false,
        default: true
      },
      markdown: {
        type: String,
        required: false,
        default: ''
      },
      markedClass: {
        type: String,
        required: false,
        default: 'markdown'
      },
      sanitizeOptions: {
        type: Object,
        required: false,
        default () {
          return {
            allowedTags: ['h1', 'h2', ...sanitize.defaults.allowedTags],
            allowedAttributes: {
              h1: ['class', 'id'],
              h2: ['class', 'id'],
              h3: ['class', 'id'],
              ...sanitize.defaults.allowedAttributes
            }
          }
        }
      },
      options: {
        type: Object,
        required: false,
        default: () => {
          return { gfm: true }
        }
      }
    },
    computed: {
      compiled () {
        // If using the markdown prop, disregard the slot content
        const markdown = this.markdown
          ? this.markdown
          : this.$slots.default
            ? this.$slots.default[0].text
            : ''

        // Pass the markdown through dedent
        const stripped = this.dedent ? dedent(markdown) : markdown

        // Parse the markdown with marked and then sanitize it
        return sanitize(marked.parse(stripped, this.options), this.sanitizeOptions)
      }
    }
  }
</script>
