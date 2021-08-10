//this file for bem modifers

//if use a component name, convert to lower case
const transformName = (string) => string.replace(/\s+/g, '-').toLowerCase()

//imort component
const install = (Vue, { propName = 'types', modsName = 'mods' } = {}) => {
  Vue.mixin({
    props: {
      // Prop name is now dynamic and allows to avoid conflits
      [propName]: {
        type: Array,
        default: () => []
      }
    },
    // Dependency injection forces us to explicitly require that function
    provide: {
      [modsName](baseClass) {
        baseClass = baseClass || transformName(this.$options.name)
        return (this[propName] || []).map((type) => `${baseClass}--${type}`)
      }
    }
  })
}

export default { install }
