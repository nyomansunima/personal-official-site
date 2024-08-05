import { Actions } from './actions'
import { Brand } from './brand'
import { Navs } from './nav'

export default function Header(): React.ReactElement {
  return (
    <header className="relative flex items-center px-5 tablet:px-10 h-20 bg-background">
      <Brand />
      <Navs />
      <Actions />
    </header>
  )
}
