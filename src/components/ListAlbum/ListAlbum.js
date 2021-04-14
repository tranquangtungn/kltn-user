import React, { useContext } from 'react'
import { HeadingAlbum } from "components/HeadingAlbum/HeadingAlbum.js"
import { GlobalContext } from "context/GlobalState.js"
import { Link } from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'
export const ListAlbum = () => {
    const { albums, removeAlbum } = useContext(GlobalContext);
    return (
        <div>
            <HeadingAlbum></HeadingAlbum>
            <ListGroup className="mt-4">
                {albums.map(album => (
                    <ListGroupItem className="d-flex">
                        <p>{album.name}
                            <br></br>
                            {album.description}</p>
                        <div className="ml-auto">
                            <Link className="btn btn-warning mr-1" to={`/library/edit/${album.id}`}>
                                Edit
                        </Link>
                            <Button onClick={() => removeAlbum(album.id)}
                                color="danger">Delete</Button>
                        </div>
                    </ListGroupItem>
                ))}


            </ListGroup>
        </div>
    )
}
