import { useDispatch, useSelector } from "react-redux"
import { deletUser, addUser, editUser } from "../reduser/counter"
import { useFormik } from "formik"
import { useState } from "react"
import type { RootState } from "../store/store"
import {
    TextField, Button, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Container, Box, Stack,
    Dialog, DialogTitle, DialogContent, DialogActions, Typography
} from "@mui/material"

const Reduxtoolkit = () => {
    const [idx, setIdx] = useState(0)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { data } = useSelector((state: RootState) => state.counter)

    const { resetForm, handleSubmit, values, handleChange, setFieldValue } = useFormik({
        initialValues: { name: '', age: 0 },
        onSubmit: (value) => {
            if (!idx) {
                dispatch(addUser({ id: Date.now(), ...value, status: false }))
            } else {
                dispatch(editUser({ id: idx, ...value }))
            }
            handleClose()
        }
    })

    const handleOpen = (user?: { name: string, age: number, id: number }) => {
        if (user) {
            setFieldValue('name', user.name)
            setFieldValue('age', user.age)
            setIdx(user.id)
        } else {
            resetForm()
            setIdx(0)
        }
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        resetForm()
        setIdx(0)
    }

    return (
        <div className="pt-25 pb-10">

            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <Typography variant="h5">User List</Typography>
                    <Button variant="contained" onClick={() => handleOpen()}>Add New User</Button>
                </Stack>

                {/* Dialog барои илова ва таҳрир */}
                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
                    <DialogTitle>{idx ? "Edit User" : "Add New User"}</DialogTitle>
                    <DialogContent>
                        <Box component="form" id="user-form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                            <TextField label="Name" name="name" value={values.name} onChange={handleChange} fullWidth />
                            <TextField label="Age" name="age" type="number" value={values.age} onChange={handleChange} fullWidth />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" form="user-form" variant="contained">{idx ? "Update" : "Add"}</Button>
                    </DialogActions>
                </Dialog>

                {/* Ҷадвал */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((e: any) => (
                                <TableRow key={e.id}>
                                    <TableCell>{e.id}</TableCell>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell>{e.age}</TableCell>
                                    <TableCell>{e.status ? 'True' : 'False'}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <Button color="error" size="small" onClick={() => dispatch(deletUser(e.id))}>Delete</Button>
                                            <Button size="small" onClick={() => handleOpen(e)}>Edit</Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>

    )
}

export default Reduxtoolkit