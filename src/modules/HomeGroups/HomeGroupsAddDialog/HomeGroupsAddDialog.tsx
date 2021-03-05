import { useMutation } from '@apollo/client'
import {
    Button,
    Dialog,
    DialogActions,
    TextField,
} from '@dvukovic/dujo-ui'
import { useFormik } from 'formik'
import React from 'react'
import { useToggle } from 'react-use'
import * as Yup from 'yup'

import { CREATE_GROUP } from '../../../graphql/mutations/Group'
import type {
    CreateGroupMutation,
    CreateGroupMutationVariables,
} from '../../../graphql/types'

import type { CreateNewGroupFormTypes } from './HomeGroupsAddDialog.types'

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('You gotta put something in.')
        .min(3, 'Must be longer than 3 characters'),
})

export const HomeGroupsAddDialog: React.FunctionComponent = () => {
    const [isOpen, toggleOpen] = useToggle(false)

    const [createGroupMutation] = useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CREATE_GROUP)

    const {
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        values,
    } = useFormik<CreateNewGroupFormTypes>({
        initialValues: {
            name: '',
        },
        onSubmit: async (formValues) => {
            await createGroupMutation({
                refetchQueries: ['Groups'],
                variables: {
                    input: {
                        name: formValues.name,
                    },
                },
            })

            toggleOpen()
        },
        validateOnChange: false,
        validationSchema: ValidationSchema,
    })

    const handleCancel = () => {
        toggleOpen()
        resetForm()
    }

    return (
        <>
            <Button
                onClick={toggleOpen}
                variant="outlined"
            >
                Add New
            </Button>
            <Dialog
                isOpen={isOpen}
                title="Create New Campfire"
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                        label="Name"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                    />
                    <DialogActions>
                        <Button
                            onClick={handleCancel}
                            type="submit"
                            variant="blank"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="outlined"
                        >
                            Create
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}
