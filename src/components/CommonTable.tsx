import {
  Table, TableBody, TableCell,
  TableHead, TableRow, IconButton
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

export default function CommonTable({ users, onEdit, onDelete }: any) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users?.map((u:any)=>(
          <TableRow key={u?.id}>
            <TableCell>{u?.firstName} {u?.lastName}</TableCell>
            <TableCell>{u?.email}</TableCell>
            <TableCell>{u?.phone}</TableCell>
             <TableCell align="center">
              <IconButton onClick={()=>onEdit(u)}>
                <EditIcon/>
              </IconButton>

              <IconButton color="error" onClick={()=>onDelete(u)}>
                <DeleteIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
