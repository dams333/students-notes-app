<template>
  <div class="branches">
    <current-year class="current" />
    <div class="all-branches">
      <branch-note class="note-item" v-for='(branch, index) in notes' @click='toBranch(branch.id, branch.name)' :key='index' :branch='branch' />
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
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
        {
          name: 'Allemand',
          note: 2.5,
          id: 'allemand'
        },
        {
          name: 'Français',
          note: 4.5,
          id: 'francais'
        },
      ]
    }
  },
  components: {
    CurrentYear,
    BranchNote
  },
  methods: {
    toBranch(id, name) {
      this.$router.push('/branch/' + id);
    }
  },
  created() {
      this.$store.commit('setHeaderName', 'Détails des notes');
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
