import { useMutation } from '@apollo/client'
import {
    Button,
    Dialog,
    DialogActions,
    IconButton,
    TextField,
} from '@dvukovic/dujo-ui'
import { useFormik } from 'formik'
import Image from 'next/image'
import React from 'react'
import { useToggle } from 'react-use'
import * as Yup from 'yup'

import { EDIT_GROUP } from '../../../graphql/mutations'
import type {
    EditGroupMutation,
    EditGroupMutationVariables,
} from '../../../graphql/types'

import type {
    EditGroupFormType,
    HomeGroupsEditDialogProps,
} from './HomeEditDialog.types'

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('You gotta put something in.')
        .min(3, 'Must be longer than 3 characters'),
})

export const HomeEditDialog: React.FunctionComponent<HomeGroupsEditDialogProps> = (props) => {
    const { group } = props

    const [isOpen, toggleOpen] = useToggle(false)

    const [editGroupMutation, { loading }] = useMutation<
        EditGroupMutation,
        EditGroupMutationVariables
    >(EDIT_GROUP)

    const {
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        values,
    } = useFormik<EditGroupFormType>({
        initialValues: {
            name: group.name,
        },
        onSubmit: async (formValues) => {
            await editGroupMutation({
                refetchQueries: ['UserGroups'],
                variables: {
                    input: {
                        id: group.id,
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
            <IconButton
                icon={(
                    <Image
                        height={17}
                        quality={100}
                        src="/icons/pencil.svg"
                        width={17}
                    />
                )}
                onClick={toggleOpen}
                variant="blank"
            >
                Add New
            </IconButton>
            <Dialog
                isOpen={isOpen}
                title="Edit Campfire"
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
                            loading={loading}
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
