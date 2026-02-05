import { Skeleton, Stack } from "@mui/material"

export default function LoadingSkeleton() {
  return (
    <Stack spacing={2}>
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} height={50}/>
      ))}
    </Stack>
  )
}
