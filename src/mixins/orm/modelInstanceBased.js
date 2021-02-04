import { Model } from '@vuex-orm/core'

export default
{
  props:
  {
    mi: Object,
  },
  computed:
  {
    Model() { return this.mi.constructor },
    crud() { return this.Model.crud() },
    fields() { return this.Model.fields() },
  }
}
