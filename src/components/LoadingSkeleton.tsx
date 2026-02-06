import { Skeleton, Stack } from "@mui/material"

export default function LoadingSkeleton() {
  return (
    <Stack className="p-3">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} height={50}/>
      ))}
    </Stack>
  )
}
