<template lang="html">
  <div></div>
</template>

<script>
import { Model } from '@vuex-orm/core'

export default
{
  data:()=>({
    page: 1,
    aeDialog: false,
    dDialog: false,
    currentItem: new Model(),
    urls:
    {
      index:'models',
      create:'models/add',
      edit:'models/edit/',
      del:'models/delete',
    }
  }),
  computed:
  {
    items()
    {
      return this.currentItem.constructor.query()
      .get()
    },
    pagination()
    {
      return this.currentItem.constructor.crud().pagination
    },
  },
  mounted()
  {
    this.currentItem.constructor.crud().paginate(this.urls.index, {}, 1)
  },
  watch:
  {
    page(value)
    {
      this.currentItem.constructor.crud().goTo(value)
    }
  },
  methods:
  {
    // crud
    createItem()
    {
      this.currentItem.save(this.urls.create)
    },
    updateItem()
    {
      this.currentItem.update(this.urls.edit+this.currentItem.$id)
    },
    deleteItem()
    {

    },

    // dialog handlers
    aeClose(){ this.aeDialog = false },
    aeOpen(){ this.aeDialog = true },
    dClose(){ this.dDialog = false },
    dOpen(){ this.dDialog = true },

    // click handlers
    saveHandler()
    {
      this.aeClose()
      if(this.currentItem.$id) this.updateItem()
      else this.createItem()
    },
    addHandler()
    {
      this.currentItem = new this.currentItem.constructor()
      this.aeOpen()
    },
    viewHandler(key)
    {
      this.currentItem = this.items[key]
    },
    editHandler(key)
    {
      this.currentItem = this.items[key]
      this.aeOpen()
    },
    deleteHandler(key)
    {
      this.currentItem = this.items[key]
      this.dOpen()
    }
  }
}
</script>
