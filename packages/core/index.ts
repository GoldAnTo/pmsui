import  { makeInstaller } from '@pmsui/utils'
import components from './components'
import '@pmsui/theme/index.css'

const installer = makeInstaller(components)

export * from '@pmsui/components'
export default installer