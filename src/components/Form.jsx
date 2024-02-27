import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import '../assets/styles/form.scss'

const Forms = () => {
    return (
        <div className="form-container">
            <Card className="custom-card">
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupKitapAdi">
                            <Form.Label className="form-label">Kitap Adı</Form.Label>
                            <Form.Control type="text" placeholder="Kitap Adı" className="form-control" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupKitapYazari">
                            <Form.Label className="form-label">Kitap Yazarı</Form.Label>
                            <Form.Control type="text" placeholder="Yazar" className="form-control" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Kategori</Form.Label>
                            <Form.Select defaultValue="" className="form-control">
                                <option>Kategori Seçiniz</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formGroupSayfaSayisi" className="mb-3">
                            <Form.Label>Sayfa Sayısı</Form.Label>
                            <Form.Control type="number" placeholder="Sayfa Sayısı" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Kitap Resmi Ekle</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kitap Açıklaması</Form.Label>
                            <Form.Control as="textarea" placeholder="Kitap Açıklaması" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-primary">
                            Kitap Ekle
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Forms;
