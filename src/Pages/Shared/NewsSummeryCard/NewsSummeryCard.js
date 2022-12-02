import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsSummeryCard = ({ news }) => {
    const { _id, title, details, image_url, author,rating,total_view } = news;
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div className='d-flex'>
                        <Image className="me-2" src={author.img} roundedCircle style={{ height: '50px' }}></Image>
                        <div>
                            <p className='mb-0'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <p>
                        {
                            details.length > 250 ?
                                <span> {details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></span>
                                :
                                <span> {details} </span>
                        }
                    </p>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                    <FaStar className="text-warning me-2"></FaStar>
                    <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className="me-2"></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;