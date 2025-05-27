import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs md/main:grid-cols-2 lg/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="container/card">
        <CardHeader className="relative">
          <CardDescription>Total Visitors </CardDescription>
          <CardTitle className="[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            1,940
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
      <Card className="container/card">
        <CardHeader className="relative">
          <CardDescription> Daily Visitors  </CardDescription>
          <CardTitle className="[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            194
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingDownIcon className="size-3" />
              -20%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% from average <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for today 
          </div>
        </CardFooter>
      </Card>
      <Card className="container/card">
        <CardHeader className="relative">
          <CardDescription>Total Accounts</CardDescription>
          <CardTitle className="[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            512
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Slowly climbing up <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">More traffic is expected</div>
        </CardFooter>
      </Card>
      <Card className="container/card">
        <CardHeader className="relative">
          <CardDescription>Viewing Time</CardDescription>
          <CardTitle className="[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            7.5 minutes
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +4.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
    </div>
  )
}
