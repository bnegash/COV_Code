import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
// import { useQuery } from "@tanstack/react-query";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "fullName",
        type: "string",
        headerName: "Full Name",
        width: 150,
    },
    {
        field: "username",
        type: "string",
        headerName: "Username",
        width: 150,
    },
    {
        field: "location",
        type: "string",
        headerName: "Location",
        width: 200,
    },
    {
        field: "shift",
        type: "string",
        headerName: "Shift",
        width: 200,
    },
    {
        field: "role",
        headerName: "Role",
        width: 200,
        type: "string",
    },
    {
        field: "status",
        headerName: "Status",
        width: 150,
        type: "boolean",
    },
];

const Users = () => {
    const [open, setOpen] = useState(false);

    // TEST THE API

    // const { isLoading, data } = useQuery({
    //   queryKey: ["allusers"],
    //   queryFn: () =>
    //     fetch("http://localhost:8800/api/users").then(
    //       (res) => res.json()
    //     ),
    // });

    return (
        <div className="users">
            <div className="info">
                <h1>Staff</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {/* TEST THE API */}

            {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    );
};

export default Users;
