<template lang="html">
  <div class="">

    <!-- section modal -->
    <el-dialog title="Add" :visible.sync="show" width="60%" >

      <h1>Add</h1>

    </el-dialog>


    <!-- BTN -->
    <el-button type="primary" @click="show = true">Add</el-button>

  </div>
</template>

<script>
import show from '@/mixins/ui/show.js'
import modelInstanceBased from '@/mixins/orm/modelInstanceBased.js'
import relatedLoader from '@/mixins/orm/relatedLoader.js'

export default
{
  mixins: [show, modelInstanceBased, relatedLoader],
  watch:
  {
    show(val)
    {
      if(val) this.loadRelated(null)
    }
  }
}
</script>
