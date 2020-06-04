import fromArray from './helpers/from-array'
import fromTable from './helpers/from-dom-table'
import bootstrapOptions from './const/bootstrap-options.json'
import semanticUIOptions from './const/semantic-ui-options.json'

const optionTemplates = {
  bootstrap: bootstrapOptions.normal,
  bootstrapSm: bootstrapOptions.sm,
  semanticUI: semanticUIOptions
}

window.ProTable = {
  fromArray,
  fromTable,
  optionTemplates
}

export default {
  fromArray,
  fromTable,
  optionTemplates
}

export {
  fromArray,
  fromTable,
  optionTemplates
}
