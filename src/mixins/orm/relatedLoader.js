import _ from 'lodash'
//import { HasOne, BelongsTo, HasMany, HasManyBy, BelongsToMany, HasManyThrough, Attr, Type } from '@vuex-orm/core'

export default
{
  props:
  {
    relatedBehaviour:
    {
      type: Object,
      default: () => ({

        'HasOne': [],
        'BelongsTo': [],
        'HasMany':[],
        'HasManyBy':[],
        'BelongsToMany':[],
        'HasManyThrough':[]
        // todo Polymorphic...
      })
    },
  },
  methods:
  {
    loadRelated(config = {})
    {
      let c = Object.assign({}, this.relatedBehaviour, config)

      // load related Models$
      _.mapKeys(this.fields, (field, key) =>
      {
        switch(true)
        {
          case field.constructor.name == 'Attr':
          console.log(key, 'is an Attr');
          break;

          case field.constructor.name == 'HasMany':
          console.log(key, 'is instance of HasMany')
          console.log(field);
          console.log(field.related.crud());
          //Model.crud().get(_.kebabCase(Model.entity))
          break;
        }
      })

    },
    #loadThem
  }
}
