import React, { useState, useContext } from 'react'
import { GlobalContext } from 'context/GlobalState.js'
import { Link, useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import { Route } from 'react-router'

export const AddAlbum = () => {
    const [name, setName] = useState('');
    const [description, setDecription] = useState('');
    const { addAlbum } = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = () => {
        const newAlbum = {
            id: uuid(),
            name,
            description
        }
        addAlbum(newAlbum);
        history.push("/library/");
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeDecr = (e) => {
        setDecription(e.target.value);
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>name</Label>
                <Input type="text" value={name} onChange={onChangeName} placeholder='Enter Name'></Input>
                <Label>description</Label>
                <Input type="text" value={description} onChange={onChangeDecr} placeholder='Enter Description'></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            < Link to="/library/" className="btn btn-danger ml-2">
                Cancel
            </Link>
        </Form>
    )
}
