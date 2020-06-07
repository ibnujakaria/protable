import fromArray from './helpers/from-array'
import fromTable from './helpers/from-dom-table'
import fromServer from './helpers/from-server'
import bootstrapOptions from './const/bootstrap-options.json'
import semanticUIOptions from './const/semantic-ui-options.json'
import foundationOptions from './const/foundation.json'
import tailwindOptions from './const/tailwind.json'

const templateOptions = {
  bootstrap: bootstrapOptions.normal,
  bootstrapSm: bootstrapOptions.sm,
  semanticUI: semanticUIOptions,
  foundation: foundationOptions,
  tailwind: tailwindOptions
}

window.ProTable = {
  fromArray,
  fromTable,
  fromServer,
  templateOptions
}

export default {
  fromArray,
  fromTable,
  fromServer,
  templateOptions
}

export {
  fromArray,
  fromTable,
  fromServer,
  templateOptions
}
