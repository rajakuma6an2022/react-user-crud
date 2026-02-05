import { useState } from "react";
import { Card, CardContent } from "@mui/material";
import toast from "react-hot-toast";
import UserForm from "../components/UserForm";
import CommonTable from "../components/CommonTable";
import ConfirmDialog from "../components/ConfirmDialog";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useUsers } from "../hooks/useUsers";

export default function UsersPage() {

  const { users, create, update, remove } = useUsers();

  const [editing, setEditing] = useState<any>(null);
  const [del, setDel] = useState<any>(null);
  const [formKey, setFormKey] = useState(0);

  if (users.isLoading) return <LoadingSkeleton />;

  return (
    <div className="p-3 vh-80 overflow-hidden">
      <div className="d-flex h-100 gap-3">

        <Card className="col-md-6 col-12 d-flex flex-column h-80">
          <CardContent>

            <UserForm
              key={formKey}
              defaultValues={editing}
              submitLabel={editing ? "Update" : "Save"}
              onSubmit={(data: any) => {

                if (editing) {

                  update.mutate(
                    { ...editing, ...data },
                    {
                      onSuccess: () => {
                        toast.success("Updated");
                        setEditing(null);
                        setFormKey(prev => prev + 1);
                      }
                    }
                  );

                } else {

                  create.mutate(
                    data,
                    {
                      onSuccess: () => {
                        toast.success("Created");
                        setFormKey(prev => prev + 1);
                      }
                    }
                  );

                }

              }}
            />

          </CardContent>
        </Card>

        <Card className="col-md-6 col-12 d-flex flex-column h-80">
          <CardContent className="flex-grow-1 overflow-auto">

            <CommonTable
              users={users.data}
              onEdit={setEditing}
              onDelete={setDel}
            />

          </CardContent>
        </Card>

      </div>

      <ConfirmDialog
        open={!!del}
        onClose={() => setDel(null)}
        onConfirm={() => {
          remove.mutate(del.id, {
            onSuccess: () => {
              toast.success("Deleted");
              setDel(null);
            }
          });
        }}
      />

    </div>
  );
}
