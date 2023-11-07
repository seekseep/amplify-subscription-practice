'use client'

import { View } from "@aws-amplify/ui-react"
import { useQuery } from "@tanstack/react-query"
import { Auth } from "aws-amplify"

const ViewUser = () => {
  const session = useQuery({
    queryKey: ['session'],
    async queryFn  () {
      return await Auth.currentSession()
    }
  })

  return (
    <View>
      ViewUser
      <pre>
        <code>{JSON.stringify(session.data, null, 2)}</code>
      </pre>
    </View>
  )
}

export default ViewUser
