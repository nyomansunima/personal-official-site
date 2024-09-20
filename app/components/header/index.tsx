import { Actions } from './actions'
import { Brand } from './brand'

export default function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between h-20 laptop:h-44">
      <Brand />
      <Actions />
    </header>
  )
}
