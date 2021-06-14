import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from 'context/GlobalState.js'
import { Link, useHistory } from 'react-router-dom'


import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
export const EditAlbum = (props) => {
    const [selectedAlbum, setSelectedAlbum] = useState({
        _id: '',
        albumname: '',
        description: '',
    })
    const { albums, editAlbum } = useContext(GlobalContext)
    const history = useHistory();
    const currentAlbumId = props.match.params._id;
    useEffect(() => {
        const albumId = currentAlbumId;
        const selectedAlbum = albums.find(album => album.id === Number(albumId))
        setSelectedAlbum(selectedAlbum)
    }, [currentAlbumId, albums])
    const onSubmit = () => {
        editAlbum(selectedAlbum)
        history.push("/library/");
    }
    const onChangeName = (e) => {
        setSelectedAlbum({ ...selectedAlbum, [e.target.albumname]: e.target.value })
    }
    const onChangeDecr = (e) => {
        setSelectedAlbum({ ...selectedAlbum, [e.target.albumname]: e.target.value })
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>name</Label>
                    <Input type="text" name="name" value={selectedAlbum.albumname} onChange={onChangeName} placeholder='Enter Name'></Input>
                    <Label>description</Label>
                    <Input type="text" name="description" value={selectedAlbum.description} onChange={onChangeDecr} placeholder='Enter Description'></Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
                < Link to="/library/" className="btn btn-danger ml-2">
                    Cancel
            </Link>
            </Form>
        </div>
    )
}
