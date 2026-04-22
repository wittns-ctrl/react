import type { ReactNode } from "react"

interface Props {
    but :ReactNode
}

const button = ({but}:Props) => {
  return (
    <div >
      {but}
    </div>
  )
}

export default button
