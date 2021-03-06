import { useMutation } from '@apollo/client'
import {
    Button,
    Dialog,
    DialogActions,
    TextField,
} from '@dvukovic/dujo-ui'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { useToggle } from 'react-use'
import * as Yup from 'yup'

import { CREATE_POST } from '../../../graphql/mutations/Post'
import type {
    CreatePostMutation,
    CreatePostMutationVariables,
} from '../../../graphql/types'

import type { CreateNewPostFormType } from './GroupAddDialog.types'

const ValidationSchema = Yup.object().shape({
    description: Yup.string()
        .min(3, 'Must be longer than 3 characters'),
    link: Yup.string()
        .required('Can\'t be empty.')
        .url('Has to be a link.'),
})

export const GroupAddDialog: React.FunctionComponent = () => {
    const [isOpen, toggleOpen] = useToggle(false)

    const router = useRouter()

    const [createPostMutation] = useMutation<CreatePostMutation, CreatePostMutationVariables>(CREATE_POST)

    const {
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        values,
    } = useFormik<CreateNewPostFormType>({
        initialValues: {
            description: '',
            link: '',
        },
        onSubmit: async (formValues) => {
            await createPostMutation({
                refetchQueries: ['Group'],
                variables: {
                    input: {
                        description: formValues.description,
                        groupId: router.query.groupId as string,
                        link: formValues.link,
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
                title="Create New Post"
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        error={Boolean(errors.description)}
                        helperText={errors.description}
                        label="Description"
                        name="description"
                        onChange={handleChange}
                        value={values.description}
                    />
                    <TextField
                        error={Boolean(errors.link)}
                        helperText={errors.link}
                        label="Link"
                        name="link"
                        onChange={handleChange}
                        value={values.link}
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
