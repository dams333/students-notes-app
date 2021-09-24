<template>
  <div class="branches">
    <current-year class="current" />
    <div class="all-branches">
      <branch-note class="note-item" v-for='(branch, index) in notes' :key='index' :branch='branch' />
    </div>
  </div>
</template>

<script>
import BranchNote from '../components/features/BranchNote'
import CurrentYear from '../components/features/CurrentYear/CurrentYear'

export default {
  data() {
    return {
      notes: [
        {
          name: 'App. des mathématiques',
          note: 5.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        },
        {
          name: 'Français',
          note: 4.5
        },
        {
          name: 'Allemand',
          note: 2.5
        }
      ]
    }
  },
  components: {
    CurrentYear,
    BranchNote
  }
}
</script>

<style scoped>
.branches {
  display: block;
  margin-top: 70px;
}

.current {
  margin-left: calc(50% - 150px);
}

.all-branches {
  width: 340px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: calc(50% - 170px);
}

.note-item {
  display: inline-grid;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
