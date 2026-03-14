import { useState } from "react";
import { useTodo } from "../stores/todo";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import {
    Button,
    TextField,
    Modal,
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
} from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "12px",
};

const Zustand = () => {
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);

    const { data, deleteUser, addUser, editUser } = useTodo();

    const { handleSubmit, values, handleChange, resetForm, setFieldValue } =
        useFormik({
            initialValues: {
                name: "",
                age: "",
            },
            onSubmit: (values) => {
                if (idx) {
                    editUser({ id: idx, ...values, status: false });
                } else {
                    addUser({
                        id: Date.now(),
                        name: values.name,
                        age: Number(values.age),
                        status: false,
                    });
                }

                resetForm();
                setIdx(0);
                setOpen(false);
            },
        });

    const handleEdit = (e) => {
        setIdx(e.id);
        setFieldValue("name", e.name);
        setFieldValue("age", e.age);
        setOpen(true);
    };

    const handleAdd = () => {
        resetForm();
        setIdx(0);
        setOpen(true);
    };

    return (
        <div className="w-[80%] m-auto pt-28">
            <Button variant="contained" color="success" onClick={handleAdd}>
                Add User
            </Button>

            {/* Modal */}
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style}>
                    <Typography variant="h6" mb={2}>
                        {idx ? "Edit User" : "Add User"}
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="Age"
                            type="number"
                            name="age"
                            value={values.age}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />

                        <Button type="submit" variant="contained" fullWidth>
                            {idx ? "Save" : "Add"}
                        </Button>
                    </form>
                </Box>
            </Modal>

            {/* Table */}
            <Table sx={{ mt: 4, background: "white" }}>
                <TableHead sx={{ background: "#ff9800" }}>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((e) => (
                        <TableRow key={e.id}>
                            <TableCell>{e.id}</TableCell>
                            <TableCell>{e.name}</TableCell>
                            <TableCell>{e.age}</TableCell>

                            <TableCell sx={{ color: e.status ? "green" : "red" }}>
                                {e.status ? "Active" : "Inactive"}
                            </TableCell>

                            <TableCell>
                                <Button
                                    color="error"
                                    onClick={() => deleteUser(e.id)}
                                    sx={{ mr: 1 }}
                                >
                                    Delete
                                </Button>

                                <Button
                                    color="success"
                                    onClick={() => handleEdit(e)}
                                    sx={{ mr: 1 }}
                                >
                                    Edit
                                </Button>

                                <Link to={`/info/${e.id}`}>Info</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Zustand;