import * as React from 'react'
import { LogItem, LogItemData } from './log-item'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components/ui/tooltip'

export interface LogGroupData {
  title: string
  list: LogItemData[]
}

interface LogGroupProps {
  group: LogGroupData
}

export function LogGroup({ group }: LogGroupProps): React.ReactElement {
  const { title, list } = group
  const totalList = list.length ?? 0
  const reorderList = [...list].reverse()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center w-full gap-4">
        <h3 className="text-lg font-medium flex-grow tablet:flex-grow-0">
          {title}
        </h3>
        <span className="hidden tablet:flex flex-grow border-t border-border border-dashed"></span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="h-6 w-6 rounded-full border border-border flex justify-center items-center text-xs bg-surface cursor-pointer transition-all duration-300 hover:scale-105">
                {totalList}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <span>{totalList} Best moments recorded</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-col gap-2 tablet:gap-3">
        {reorderList.map((log, i) => (
          <LogItem log={log} key={i} />
        ))}
      </div>
    </div>
  )
}
