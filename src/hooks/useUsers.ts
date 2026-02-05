import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../api/client"
import type { User } from "../types/user"

export const useUsers = () => {
  const qc = useQueryClient()

  const users = useQuery({
    queryKey: ["users"],
    queryFn: async () => (await api.get<User[]>("/users")).data
  })

  const create = useMutation({
    mutationFn: (data: User) => api.post("/users", data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] })
  })

  const update = useMutation({
    mutationFn: (data: User) => api.put(`/users/${data.id}`, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] })
  })

  const remove = useMutation({
    mutationFn: (id: number) => api.delete(`/users/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] })
  })

  return { users, create, update, remove }
}
